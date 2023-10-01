import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    picture: '',
  };
  formSubmit = picture => {
    this.setState({ picture });
  };

  render() {
    return (
      <div>
        <Searchbar picImg={this.formSubmit} />
        <ImageGallery picsName={this.state.picture} />
      </div>
    );
  }
}
