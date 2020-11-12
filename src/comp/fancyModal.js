import React from 'react';

const FancyModal = ({ selectedImage }) => {

    return (
        <div className ="backdrop">
            <img src={selectedImage} alt="on click image will be enlarged"></img>
        </div>
    )

}

export default FancyModal;