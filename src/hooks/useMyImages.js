import { useState, useEffect } from 'react';
import { firestore } from "../config/fire";
import useFirebaseAuthentication from './userAuth';

const useMyImages = (collection) => {
    const [docs, setDocs] = useState([]);
    const user = useFirebaseAuthentication();

    useEffect(() => {
        if (user) {
            const unsub = firestore.collection("images").where("displayName", "==", user.displayName)
                .orderBy('createdAt', 'desc')
                .onSnapshot((snapshot) => {
                    let documents = [];
                    snapshot.forEach(doc => {
                        documents.push({ ...doc.data(), id: doc.id })
                    });
                    setDocs(documents);
                });
            return () => unsub();
        }
    }, [user, collection])

    return { docs };

}

export default useMyImages;