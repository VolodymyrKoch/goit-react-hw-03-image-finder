import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
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
