import React, { useState } from 'react';
import { storage } from '../config/fire';



const Upload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);




    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']

    const handleChange = e => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) { //first file selected, and if it is png or jpeg.
            setImage(selected);
            setError('');
        } else {
            setImage(null);
            setError('Please select an image file (png, jpg, or gif)');

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
                setError(error)
                
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url)

                    });
            }
        )
    };

    console.log("image: ", image)

    return (
        <div> Share your pictures!
            <br />
            <progress value={progress} max="100" />
            <br />
            <input type="file" onChange={handleChange} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {image && <div className="correct">{image.name} </div>}
            </div>
            <button onClick={handleUpload}>Upload</button>
            <br />
            {url}
            <br />
            <img src={url || "http://via.placeholder.com/300x400"} alt="placeholder" />
        </div>
    )
}
export default Upload;