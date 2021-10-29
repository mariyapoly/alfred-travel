import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    // signin in google
    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            });
    }
    // observer with user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return () => unsubscribed;
    }, [])
    // function for signout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;