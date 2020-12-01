import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    modal: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
  };
  modal = e => {
    if (e.code === 'Escape' || e.target.nodeName !== 'IMG') {
      this.props.modalClose();
    }
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.modal);
    window.addEventListener('click', this.modal);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.modal);
    window.removeEventListener('click', this.modal);
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}


