import React from 'react';
// import PropTypes from 'prop-types'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.js';
// imort styles from "../ImageGallery/ImageGallery.module.css";

function ImageGallery({ data }) {
  console.log(data);
  return (
    <div>
      <ul className="ImageGallery">
        {data.map(e => {
          return <ImageGalleryItem key={e.id} webformatURL={e.webformatURL} />;
        })}
      </ul>
    </div>
  );
}

export default ImageGallery;
