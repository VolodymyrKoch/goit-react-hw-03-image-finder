import axios from 'axios';

const FetchDataWithQuery = (query, page, APIkey) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
export default { FetchDataWithQuery };
