import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ShowImage = () => {
 const { docs } = useFirestore('images');
    
 
 
 return(
            <p>{ docs && docs.map(doc =>(
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded image" />
                </div>
            ))}</p>   
    )
}

export default ShowImage;