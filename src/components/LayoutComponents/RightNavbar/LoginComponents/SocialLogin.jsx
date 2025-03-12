import React, { useState, useEffect, useContext } from 'react';
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


function SocialLogin() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const auth = getAuth();

    // Check authentication state on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSignedIn(true);
                setUserEmail(user.email);
                console.log("User already signed in:", user);
            } else {
                setIsSignedIn(false);
                setUserEmail('');
            }
        });
        return () => unsubscribe();
    }, [auth]);

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setIsSignedIn(true);
                setUserEmail(result.user.email);
                console.log("Google User signed in:", result.user);
            })
            .catch((error) => {
                console.error("Google sign-in error:", error.message);
                alert("Google Sign-In Failed!");
            });
    };

    // Handle GitHub Sign-In
    const handleGitHubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setIsSignedIn(true);
                setUserEmail(result.user.email);
                console.log("GitHub User signed in:", result.user);
            })
            .catch((error) => {
                console.error("GitHub sign-in error:", error.message);
                alert("GitHub Sign-In Failed!");
            });
    };

    // Handle Logout
    const handleLogout = () => {
        signOut(auth).then(() => {
            setIsSignedIn(false);
            setUserEmail('');
            console.log("User signed out successfully");
        }).catch((error) => {
            console.error("Sign-out error:", error.message);
        });
    };

    return (
        <div className="text-center">
            {!isSignedIn ? (
                <>
                    <h2 className='font-semibold mb-3'>Login With</h2>
                    <div className='space-y-3'>
                        <button
                            onClick={handleGoogleSignIn}
                            className='btn flex items-center gap-2 py-2 px-4 border-2 border-gray-300 rounded hover:bg-gray-200'
                        >
                            <img src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png" alt="Google Logo" className="w-3.7 h-5" />
                            Log In With Google
                        </button>
                        <button
                            onClick={handleGitHubSignIn}
                            className='btn flex items-center gap-2 py-2 px-4 border-2 border-gray-300 rounded hover:bg-gray-200'
                        >
                            <FaGithub size="20" className='text-black' />
                            Log In With GitHub
                        </button>
                    </div>
                </>
            ) : (
                <div className="animate-pulse mt-5 text-xl font-semibold text-green-600">
                    🎉 Welcome, {userEmail}!
                    <div className="flex flex-col items-center justify-center mt-4 gap-2">
                        <video
                            className="w-80 h-60 rounded-lg shadow-lg "
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/src/assets/AppStore Button.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="flex items-center gap-2 mt-4">

                            <span>Download our mobile app from the Play Store</span>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default SocialLogin;
