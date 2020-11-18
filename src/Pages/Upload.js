import React, { useState } from "react";
import { firestore, storage, timesstamp } from "../config/fire";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import loadGif from '../loadingGIF.gif';
import firebase from 'firebase';



const Upload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [ifShownErr, setErrFlag] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [load, setLoad] = useState(false);
  


  const handleChange = (e) => {
    const selected = e.target.files[0];
    const allowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    if (selected && allowed.includes(selected.type)) {
      let reader= new FileReader();
      reader.onloadend = () => {
      setImage(selected);  
      setImagePreview(reader.result)
          }
          reader.readAsDataURL(selected);
    } else {
      alert('This file is not supported, please select an image.')
    }
  };  

  const handleUpload = () => {
    if (image === null) {
      setErrFlag(false);
      return;
    } else {
      setErrFlag(true);
    }

    const collectionRef = firestore.collection('images');
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    const displayName = firebase.auth().currentUser.displayName;



    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            const createdAt = timesstamp();
            collectionRef.add({ url, createdAt, displayName,/* description */ });
          })
          .then(alert("Thank you for uploading your picture!"));
      }
    );
  };

  console.log("image: ", image);
  console.log(url);

  return (
    <section className="hero" id="outer-container">
      <div id="page-wrap">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          
        />
      </div>
      <nav>
        <img
          className="logo-page slide-in-blurred-left"
          src={navLogo}
          alt={"logo"}
        />
      </nav>
      <div className="upload-container">
        <div className="upload-wrap">
          <h1 className="puff-in-bottom">Upload your picture!</h1>
           <label className="upload-input">
            Choose a file
            <input
              type="file"
              onChange={handleChange}
            />            
          </label> 

          <p className="file-error" hidden={ifShownErr}>
            File is not selected
          </p>
          <button className="upload-button" onClick={handleUpload}>
            Upload!
          </button>
          {/* <label className="input">
            Description
            <input
              type="text"
            />
            
          </label> */}
          <div className="img-container">
            <p>Preview</p>
            <div className="imagePreview"></div>
            <img className="img-wrap" src={imagePreview}/>
          </div>
          {/* <div className="spinner-contain">
          <img src={loadGif} alt={'spinner'}/>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Upload;
