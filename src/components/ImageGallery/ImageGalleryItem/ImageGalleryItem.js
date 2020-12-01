import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ImageGalleryItem extends Component {

  static propTypes = { onClick: PropTypes.func };

  newModal = e => {
    
    this.props.openModal(this.props.largeImageURL);
    console.log(this.props.largeImageURL);
  };
  render() {
    return (
      <>
        <li className="ImageGallery" onClick={this.newModal}>
          <img
            alt=""
            key={this.props.largeImageURL}
            src={this.props.webformatURL}
            className="ImageGalleryItem-image"
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
