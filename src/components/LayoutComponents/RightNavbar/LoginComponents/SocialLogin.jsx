import React from 'react';
import { FaGithub } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SocialLogin() {

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log("User signed in: ", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData?.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error("Error during Google sign-in: ", errorCode, errorMessage, email);
            });
    };

    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='space-y-3'>
                <button
                    onClick={handleGoogleSignIn}
                    className='btn flex items-center gap-2 py-2 px-4 border-2 border-gray-300 rounded hover:bg-gray-200'
                >
                    <img src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png" alt="Google Logo" className="w-3.7 h-5" />
                    LogIn With Google
                </button>
                <button className='btn flex items-center gap-2 py-2 px-4 border-2 border-gray-300 rounded hover:bg-gray-200'>
                    <FaGithub size="20" className='text-black' />
                    LogIn With GitHub
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;
