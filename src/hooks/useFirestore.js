import { useState, useEffect } from 'react';
import { firestore } from "../config/fire";

// this hook takes our current collection of files and orders them by the createdAt field and sorts them by the descending property.
// We then take a snapshot, which looks at our current documents and inserts the data for each document.
const useFirestore = (collection) => { // a collection we want to get our documents from.
    const [docs, setDocs] = useState([]); // -> setDocs to update documents, useState [], because we dont start off with any docs.

    useEffect(() =>  { //useEffect to re-run whenever the collection changes, and it will constantly update
        const unsub = firestore.collection(collection) 
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => { //fires a callback, each time a change occurs. takes in snapshot object in that moment in time. (real-time updates)
            let documents = []; //basically keeping this in sync with whatever is being stored in the database.
            snapshot.forEach(doc => { //cycles through the docs currently in this moment in time. 
                documents.push({...doc.data(), id: doc.id}) //pushing the data from each document into the array, as well as ID(which will be used to output the images)
            });
            setDocs(documents); //update documents.
        });

        return () => unsub(); //unsubscribe from collection when we are not using it.
    }, [collection]) //whenever the collection changes, useEffect it is called.

    return { docs };
 
}

export default useFirestore;

