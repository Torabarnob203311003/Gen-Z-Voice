import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState({


        name: "abu torab",
        email: "torab2gmail.com",
    });
    const authInfo = {

        user, setUser
    };


    return (
        <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
    )
}

export default AuthProvider