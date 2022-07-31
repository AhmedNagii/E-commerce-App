import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

function Photos() {
  const context = useContext(Context);

  const imagesElements = context.allPhotes.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });

  return <main className="photos">{imagesElements}</main>;
}

export default Photos;
