import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user)
    // Track loading state

    // Create a new user with email and password
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in an existing user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };



    // Sign out the current user
    const logOut = () => {
        return signOut(auth);
    };



    // Observer pattern to detect authentication state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);// User is signed in
                console.log("User signed in:", currentUser.uid);
            } else {
                setUser(null); // User is signed out
                console.log("User signed out");
            }
            setLoading(false); // Set loading to false after user state is determined
        });

        return () => unSubscribe(); // Cleanup subscription on unmount
    }, []);


    // Auth context information to be shared globally
    const authInfo = {
        user,
        createNewUser,
        signInUser,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
