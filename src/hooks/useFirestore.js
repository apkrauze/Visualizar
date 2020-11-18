import { useState, useEffect } from 'react';
import { firestore } from "../config/fire";


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() =>  {
        const unsub = firestore.collection(collection)
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

export default useFirestore;

/* 
var imagasRef = db.collection("images");

var query = citiesRef.where("displayName", "==", "firebase.auth().currentUser.displayName");




db.collection("images").where("displayName", "==", "firebase.auth().currentUser.displayName")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    }); */