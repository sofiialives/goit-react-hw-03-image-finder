import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    picture: '',
    pics: [],
    loading: false,
  };
  formSubmit = picture => {
    this.setState({ picture });
    this.fetchPicture(picture);
  };
  fetchPicture = img => {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${img}&page=1&key=39092859-16fe7b22871fd83438b6d2f7f&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(resp => resp.json())
      .then(info => this.setState({ pics: info.hits }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    return (
      <div>
        <Searchbar picImg={this.formSubmit} />
        <ImageGallery pics={this.state.pics} />
        {this.state.loading && <Loader/>}
      </div>
    );
  }
}
