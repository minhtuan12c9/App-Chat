import React, { Children, createContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { showNotice } from '../lib'
import { useNavigation } from '@react-navigation/native'

// 1. Khởi tạo object context
export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: async (email, password) => {
          setLoading(true)
          await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              setUser(user)
              showNotice('Chào mừng Onii-chan!');
            })
            .catch((error) => {
              showNotice('Sai mật khẩu rồi Onii-chan!', true);
            });
          setLoading(false)
        },
        register: async (email, password) => {
          setLoading(true)
          await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              updateProfile(auth.currentUser, {
                displayName: email,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/app-chat-45e0e.appspot.com/o/default%2Fava_default.jpg?alt=media&token=98f0ab79-3dd1-4d55-9c0b-8e6d5b9c1f6b"
              }).then(() => {
                navigation.navigate('Login')
                showNotice('Xong rồi đó Onii-chan!')
              }).catch((error) => {
                showNotice(error.message, true);
              });
            })
            .catch((error) => {
              showNotice(error.message, true);
            });
          setLoading(false)
        },
        logout: async () => {
          setLoading(true)
          await signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
            showNotice(error.message, true);
          });
          setLoading(false)
        },
        updateInfo: async (displayName) => {
          setLoading(true)
          await updateProfile(auth.currentUser, {
            displayName: displayName, 
          }).then(() => {
            showNotice('Xong rồi đó Onii-chan!')
          }).catch((error) => {
            showNotice(error.message, true);
          });
          setLoading(false)
        },
      }}>
      {children}
    </AuthContext.Provider>
  )
}
