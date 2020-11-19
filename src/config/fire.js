 import firebase from 'firebase';
 import 'firebase/storage';
 import 'firebase/firestore';
 
  var firebaseConfig = {
    apiKey: "AIzaSyAbvxESsH30worIFcgDhWzdKsiVl4Z42jQ",
    authDomain: "visualizar-9141e.firebaseapp.com",
    databaseURL: "https://visualizar-9141e.firebaseio.com",
    projectId: "visualizar-9141e",
    storageBucket: "visualizar-9141e.appspot.com",
    messagingSenderId: "255536382678",
    appId: "1:255536382678:web:12a00bdccb21ba88d67f77",
    measurementId: "G-GQN1F4S95K"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage(); //the database where we store all our files 
  const firestore = firebase.firestore(); //collections where we store our files as objects with keys and values?? sorted by url and createdAt, displayed descending.
  const timesstamp = firebase.firestore.FieldValue.serverTimestamp; //the exact time when the file was created
  
  

  export { storage, fire as default, firestore, timesstamp};
