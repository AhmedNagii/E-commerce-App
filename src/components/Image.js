import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [isHoverd, setIsHoverd] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeItem } = useContext(Context);

  console.log(cartItems);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (isHoverd) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const addedToItem = cartItems.some(photo => photo.id === img.id);
    if (addedToItem) {
      return (
        <i
          onClick={() => removeItem(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (isHoverd) {
      return (
        <i
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      className={`${className} image-container`}
    >
      {heartIcon()}
      {cartIcon()}
      <img src={img.url} className="image-grid" alt="" />
    </div>
  );
}
Image.prototype = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
