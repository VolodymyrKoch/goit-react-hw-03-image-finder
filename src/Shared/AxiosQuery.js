import axios from 'axios';
import PropTypes from 'prop-types';

const FetchDataWithQuery = (query, page, APIkey) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

FetchDataWithQuery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  APIkey: PropTypes.string.isRequired,
};

export default { FetchDataWithQuery };
