 import firebase from 'firebase';
 
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

  export default fire;