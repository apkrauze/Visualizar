import { useState, useEffect } from 'react';
import { firestore } from "../config/fire";
import firebase from "firebase";

const useMyImages = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() =>  {
        const unsub = firestore.collection("images").where("displayName", "==", firebase.auth().currentUser.displayName)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });
        
        return () => unsub();
    }, [collection])
    
    return { docs };

    }

export default useMyImages;