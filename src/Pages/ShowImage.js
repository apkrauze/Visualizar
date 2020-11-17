import React from "react";
import useFirestore from "../hooks/useFirestore";
import firebase from 'firebase';

const ShowImage = ({collection, setSelectedImage}) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-wrapper">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} >
            <div className="img-box" onClick={() => setSelectedImage(doc.url)}>
              <img src={doc.url} alt="uploaded image" className="img-contain"/>              
            </div> 
          </div>
        ))}
    </div>
  );
};

export default ShowImage;
