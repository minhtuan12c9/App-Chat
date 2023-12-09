import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { db } from "../firebase";

const storage = getStorage();

const chatModel = {
    addData: async (params, collectionName) => {
        const { _id, createdAt, text, user } = params
        try {
            const docRef = await addDoc(collection(db, collectionName), {
                _id: _id,
                createdAt: createdAt,
                text: text,
                user: user
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    },
    listData: async (collectionName, setMessages) => {
        const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setMessages(
                querySnapshot.docs.map((doc) => ({
                    _id: doc.id,
                    text: doc.data().text,
                    createdAt: doc.data().createdAt.toDate(),
                    user: doc.data().user,
                }))
            );
        }, (error) => console.log(error));
        console.log('doan chat');
        return unsubscribe;
    }

}

export default chatModel;