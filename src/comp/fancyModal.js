import React from 'react';

const FancyModal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (e) => {
        setSelectedImage(null)
    }

    return (
        <div className ="backdrop" onClick={handleClick} >
            <img src={selectedImage} alt="on click image will be large"></img>
        </div>
    )

}

export default FancyModal;