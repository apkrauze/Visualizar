import React from 'react';
import useFirestore from './Pages/useFirestore'

const ImageDisplay = () => {

    const { docs } = useFirestore('images');
    console.log(docs);
    

    return(//use different className for img perhaps.
        <div className="img-display">
            { docs && docs.map(doc => (
              <div className="img-wrap" key={doc.id}> 
                <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageDisplay;
