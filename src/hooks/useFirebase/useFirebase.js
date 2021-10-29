import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    // signin in google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }
    // observer with user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    // function for signout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        setError,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }

}

export default useFirebase;