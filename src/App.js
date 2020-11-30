import React, { Component } from 'react';
import './basesStyles.css';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar.js';
import ImageGallery from './components/ImageGallery/ImageGallery.js';

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
    console.log(1);
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
  }
  hendleSearch = queryOn => {
    this.setState({
      query: queryOn,
    });
    console.log(this.state.query);
  };
  // setLargeImageURL = url => {
  //   // this.setState; // метод який передає значення в state.largeImageURL
  // };
  fetchArticles = () => {
    const { query, page, APIkey } = this.state;
    console.log(page);
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState({
          data: response.data.hits,
        });
        // console.log(this.state.query);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  // onSubmitForm = (querySearch) => {
  //   this.setState({
  //     query: querySearch,
  //   });
  // };
  // componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   axios
  //     .get(
  //       'https://pixabay.com/api/?q=dogs&page=1&key=18953459-ccf1cbce1be1015139c395560&image_type=photo&orientation=horizontal&per_page=12',
  //     )
  //     .then(response => {
  //       // window.scrollTo({    --- викликати цей метод в зені(спрацьовує плавне прокручування вниз при загрузці додоаткової порції фоток) (це кнопкаlead more)
  //       //   top: document.documentElement.scrollHeight,    -  це краще зробити в componentDidUbdate по умові при оновлені state виклич цей код
  //       //   behavior: 'smooth',
  //       // });

  //       this.setState({
  //         articles: response.data.hits,
  //         loading: false,
  //       });
  //     });
  // }

  //
  // }
  // fetchArticles = () => {
  //   const { searchQuery, page } = this.state;
  //   this.setState({ loading: true });
  //   articlesApi
  //     .fetchArticlesWithQuery(searchQuery, page)
  //     .then(articles =>
  //       this.setState(prevState => ({
  //         articles: [...prevState.articles, ...articles],
  //         page: prevState.page + 1,
  //       })),
  //     )
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ loading: false }));
  // };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.hendleSearch} />
        <ImageGallery data={data} />
      </div>
    );
  }
}

export default App;
