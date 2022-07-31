import React, { useState } from "react";

function Image({ className, img }) {
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      className={`${className} image-container`}
    >
      {isHoverd && <i className="ri-heart-line favorite"></i>}
      {isHoverd && <i className="ri-add-circle-line cart"></i>}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
