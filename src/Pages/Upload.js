import React, { useState } from 'react';
import { storage } from '../config/fire';



const Upload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
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
        <div> Share your pictures!
            <br/>
            <progress value={progress} max="100"/>          
            <br />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <br/>
            {url}
            <br/>
            <img src={url || "http://via.placeholder.com/300x400"}/>
        </div>
    )
}
export default Upload;