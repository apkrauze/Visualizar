import React from "react";
import useFirestore from "../hooks/useFirestore";

const ShowImage = () => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-wrapper">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <div className="img-box">
              <img src={doc.url} alt="uploaded image" className="img-contain"/>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowImage;
