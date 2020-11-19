import { useState, useEffect } from 'react';
import firebase from "firebase";


const useFirebaseAuthentication = () => {
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const unlisten = firebase.auth().onAuthStateChanged(
            userAuth => {
                userAuth
                    ? setUserAuth(userAuth)
                    : setUserAuth(null);
            },
        );
        return () => {
            unlisten();
        }
    });

    return userAuth
}

export default useFirebaseAuthentication;