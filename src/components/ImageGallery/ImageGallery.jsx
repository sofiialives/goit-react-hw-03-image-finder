import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.picture !== this.props.picture)
      console.log('The pic`s name was changed');
    console.log('Previous pic`s name: ', prevProps.picture);
    console.log('Current pic`s name: ', this.props.picture);
  }
  render() {
    const { pics } = this.props; 
    return (
      <div>
        <h1>Pics</h1>
        <p>{this.props.picture}</p>
        <ul className="gallery">
          {pics.map((pic) => (
            <ImageGalleryItem key={pic.id} webformatURL={pic.webformatURL} />
          ))}
        </ul>
      </div>
    );
  }
}
