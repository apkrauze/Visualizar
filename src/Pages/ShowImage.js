import React from "react";
import useFirestore from "../hooks/useFirestore";

const ShowImage = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-wrapper">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <div className="img-box" onClick={() => setSelectedImage(doc.url)}>
              <img src={doc.url} alt="uploaded image" className="img-contain" />
              <div className="img-overlay">
                <p className="text">Uploaded by: <b>@{doc.displayName}</b></p>
                <p className="text">Description: <b><i># {doc.description}</i></b></p>
              </div>
            </div>
            
          </div>
        ))}
    </div>
  );
};

export default ShowImage;
