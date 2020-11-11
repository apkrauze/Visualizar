import React, { useState } from 'react';
import { storage } from '../config/fire';
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";



const Upload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [ifShownErr, setErrFlag] = useState(true);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (image === null){
            setErrFlag(false);
            return;
        } else {
            setErrFlag(true);
        }
         
            
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);

                    });
            }
        )
    };

    console.log("image: ", image)

    return (
        <section className="hero">
            <nav>
                <h1 className="nav-h1 slide-in-blurred-left"><span className="nav-h1-span">V</span>isualizar</h1>
            </nav>
            <div className="link-container">
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            </div>
            <div> Share your pictures!
            <br />
                <progress value={progress} max="100" />
                <br/>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
                <p hidden={ifShownErr}>File is not selected</p>
                <br/>
                {url}
                <br/>
                <img src={url || "http://via.placeholder.com/300x400"} />
            </div>
        </section>

    )
}
export default Upload;