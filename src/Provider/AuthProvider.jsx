import React, { createContext, useState } from 'react'
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const authInfo = {

        user, setUser, createNewUser,
    };

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)


    }

    return (
        <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
    )
}

export default AuthProvider