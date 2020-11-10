import React, { useState } from 'react';


const Upload = () => {
    const [image, setImage] = useState(null);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);

        }
    };

    const handleUpload = () => {};

    console.log("image: ", image)

    return (
        <div>
            Share your pictures!
            <br/>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
export default Upload;