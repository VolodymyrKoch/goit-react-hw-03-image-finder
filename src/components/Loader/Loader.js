import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// ('Компонент спінера, відображається поки йде завантаження зображень.');
// Використовуй будь-який готовий компонент, наприклад: https://github.com/mhnpd/react-loader-spinner

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
