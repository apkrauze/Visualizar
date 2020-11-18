import { useState, useEffect } from 'react';
import firebase from 'firebase';


const useFirebaseAuthentication = (firebase) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() =>{
       const unlisten = firebase.auth.onAuthStateChanged(
        currentUser => {
            currentUser
              ? setCurrentUser(currentUser)
              : setCurrentUser(null);
          },
       );
       return () => {
           unlisten();
       }
    });

    return currentUser
}

export default useFirebaseAuthentication;