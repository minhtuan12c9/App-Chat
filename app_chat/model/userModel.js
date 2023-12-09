import { EmailAuthProvider, updateProfile, onAuthStateChanged } from "firebase/auth";
import { showNotice } from "../lib";
import { auth, database, firebase } from "../firebase";
import { reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { set as dbSet, serverTimestamp, ref as dbRef, onDisconnect, remove, off, get } from "firebase/database";

const storage = getStorage();

const userModel = {
    changePass: async (oldPass, newPass, confirmPass) => {
        const cred = EmailAuthProvider.credential(auth.currentUser.email, oldPass);
        reauthenticateWithCredential(auth.currentUser, cred)
            .then(async () => {
                try {
                    if (newPass == '' && confirmPass == '') {
                        showNotice('Chưa nhập mật khẩu mới kìa Onii-chan!', true)
                    }
                    else if (newPass != confirmPass) {
                        showNotice('Xác nhận mật khẩu sai rồi kìa!', true)
                    } else {
                        await updatePassword(auth.currentUser, newPass)
                        showNotice('Xong rồi đó Onii-chan!', false)
                    }
                } catch (error) {
                    showNotice(error.message, true)
                }
            })
            .catch((error) => {
                showNotice('Sai mật khẩu rồi kìa Onii-chan!', true)
            })
    },

    uploadImage: async (namefull, blob, setPhoto, setLoading) => {
        // console.log('uploadImage');

        // Create the file metadata
        const metadata = {
            contentType: 'image/jpeg'
        };
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + namefull);
        const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
                setLoading(progress);
            },
            (error) => {
                showNotice(error.message, true)
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(auth.currentUser, {
                        photoURL: downloadURL,
                    }).then(() => {
                        showNotice('Xong rồi đó Onii-chan!');
                        setPhoto(downloadURL)
                    }).catch((error) => {
                        showNotice(error.message, true);
                    });
                });
            }
        );
    },
    connect: async (collectionName) => {
        const uid = auth.currentUser.uid;
        const name = auth.currentUser.displayName;
        const img = auth.currentUser.photoURL;
        const userStatusDatabaseRef = dbRef(database, '/status/' + uid);
        const isOfflineForDatabase = {
            state: 'offline',
            last_changed: serverTimestamp(),
        };
        const isOnlineForDatabase = {
            state: 'online',
            last_changed: serverTimestamp(),
            room: collectionName,
            name: name,
            img: img,
        };
        const connectedRef = dbRef(database, '.info/connected');
        onAuthStateChanged(auth, (user) => {
            if (user) {
                onDisconnect(userStatusDatabaseRef).set(isOfflineForDatabase).then(() => {
                    dbSet(userStatusDatabaseRef, isOnlineForDatabase);
                });
            }
        });
    },
    disconnect: async () => {
        const uid = auth.currentUser.uid;
        const userStatusDatabaseRef = dbRef(database, '/status/' + uid);
        await remove(userStatusDatabaseRef);
        return
    },
    listUserOnl: async (roomName, setData) => {
        const listUser = dbRef(database, 'status');
        const snapshot = await get(listUser);
        let arr = [];
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const user = childSnapshot.val();
                if (user.room === roomName && user.state === 'online') {
                    arr = [
                        ...arr,
                        {
                            id: user.name.toString() + user.last_changed.toString(),
                            name: user.name,
                            img: user.img,
                        }
                    ];
                }
            });
        }
        setData(arr);
        off(listUser, 'value');
    }
}

export default userModel;
