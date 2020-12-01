import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.js';

function ImageGallery({ data, openModal }) {
  return (
    <div>
      <ul className="ImageGallery">
        {data.map(e => {
          return (
            <ImageGalleryItem
              key={e.id}
              webformatURL={e.webformatURL}
              openModal={openModal}
              largeImageURL={e.largeImageURL}
            />
          );
        })}
      </ul>
    </div>
  );
}
ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
