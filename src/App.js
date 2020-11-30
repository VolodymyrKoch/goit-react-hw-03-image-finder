import React, { Component } from 'react';
import './basesStyles.css';
// import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar.js';
import ImageGallery from './components/ImageGallery/ImageGallery.js';
import AxiosQuery from './Shared/AxiosQuery.js';
import Button from './components/Button/Button.js';

// import { render } from '@testing-library/react';

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// Your API key: 18953459-ccf1cbce1be1015139c395560

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
class App extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    largeImageURL: null,
    APIkey: '18953459-ccf1cbce1be1015139c395560',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }
  }
  hendleSearch = queryOn => {
    this.setState({
      query: queryOn,
    });
  };
  // setLargeImageURL = url => {
  //   // this.setState; // метод який передає значення в state.largeImageURL
  // };

  // fetchArticles = () => {
  //   const { query, page, APIkey } = this.state;
  //   console.log(page);
  // axios
  //   .get(
  //     `https://pixabay.com/api/?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`,
  //   )
  fetchData = () => {
    const { query, page, APIkey } = this.state;
    AxiosQuery.FetchDataWithQuery(query, page, APIkey)

      .then(data =>
        this.setState(prevState => ({
          data: [...prevState.data, ...data],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { data, loading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.hendleSearch} />
        {error && <p>ERROR</p>}
        {loading && <p>Loading...</p>}
        {loading ? <p>Loading...</p> : <ImageGallery data={data} />}
        {data.length > 0 && <Button handleClick={this.fetchData} />}
      </div>
    );
  }
}

export default App;
