import React, { Component } from 'react';
// import '../../basesStyles';
// import PropTypes from 'prop-types';

// import { render } from '@testing-library/react';
// searchQuery=что_искать
// page=номер_страницы
// APIkey =твой_ключ=18953459-ccf1cbce1be1015139c395560

// const APIkey = '18953459-ccf1cbce1be1015139c395560';
// const fetchArticlesWithQuery = (searchQuery, page = 0) => {
//   // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => response.data.hits);
// };
export default class Searchbar extends Component {
  state = {
    term: '',
  };
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  hendeleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    console.log(this.state);
    const { term } = this.state;
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.hendeleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              name="term"
              value={term}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
