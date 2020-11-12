import React, { useState } from "react";
import { firestore, storage, timesstamp } from "../config/fire";
import Sidebar from "../Sidebar";
import handleLogout from "./LoginPage";
import navLogo from "../nav-logo.png";
import loadGif from "../loadingGIF.gif";

const Upload = ({ handleLogout }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [ifShownErr, setErrFlag] = useState(true);


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      
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
          collectionRef.add({ url, createdAt});
          }).then(alert('Thank you for uploading your picture!'));
      }
    );
  };

  console.log("image: ", image);

  return (
    <section className="hero" id="outer-container">

      <div id="page-wrap">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          handleLogout={handleLogout}
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
          <h1>Upload your picture!</h1>
          <input className="upload-input" type="file" onChange={handleChange} />
          <p className="file-error" hidden={ifShownErr}>File is not selected</p>
          <button className="upload-button" onClick={handleUpload}>
            Upload!
          </button>
          <div className="img-container">
            <p>Preview</p>
            <img className="img-wrap" src={url} />
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
