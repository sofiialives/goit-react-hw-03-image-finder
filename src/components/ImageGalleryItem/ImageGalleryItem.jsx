import { Component } from 'react';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
  render() {
    const { src, newName, onClick} = this.props;
    return (
      <li className={css.item} onClick={onClick}>
        <img src={src} alt={newName} width="300" className={css.image}/>
      </li>
    );
  }
}
