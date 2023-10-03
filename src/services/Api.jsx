export const fetchImages = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=39092859-16fe7b22871fd83438b6d2f7f&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => resp.json());
};