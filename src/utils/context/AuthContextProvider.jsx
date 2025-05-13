import { createContext, useEffect } from "react";
import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState( null );
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Creat user
    const createUser = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    // Authintication
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const facebookUser = () =>{
        return signInWithPopup(auth, facebookProvider);
    }

    // log out
    const logOut = () => {
        return signOut(auth);
    }

    //Observe auth state change
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentuser =>{
            if(currentuser){
                setUser(currentuser);
                // console.log(currentuser);
            }
        });
        
        return ()=> {
            unSubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={{ onAuthStateChanged, user, setUser, createUser, logInUser, googleUser, facebookUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};
