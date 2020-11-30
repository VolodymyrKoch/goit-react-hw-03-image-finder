import React from 'react';
// import PropTypes from 'prop-types'
// imort styles from "../ImageGallery/ImageGallery.module.css";
function ImageGalleryItem({webformatURL}){
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}


export default ImageGalleryItem;
