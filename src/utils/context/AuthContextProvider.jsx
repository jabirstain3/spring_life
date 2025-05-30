import { createContext, useEffect } from "react";
import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authloading, setAuthloading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Create user
    const createUser = (email, password) => {
        setAuthloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Authentication
    const logInUser = (email, password) => {
        setAuthloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleUser = () => {
        setAuthloading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const facebookUser = () => {
        setAuthloading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    // log out
    const logOut = () => {
        setAuthloading(true);
        return signOut(auth);
    };

    // Observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            if (currentuser) {
                setUser(currentuser);
            } else {
                setUser(null);
            }
            setAuthloading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    return (
        <AuthContext.Provider value={{ onAuthStateChanged, user, setUser, createUser, logInUser, googleUser, facebookUser, logOut, authloading, updateUserProfile }}>
            {children}
        </AuthContext.Provider>
    );
};