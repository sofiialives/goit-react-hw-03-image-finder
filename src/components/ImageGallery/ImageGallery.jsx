import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({pics, onImageClick}) => {
    return (
          <ul className={css.gallery}>
            {pics.map(pic => (
              <ImageGalleryItem
                key={pic.id}
                src={pic.webformatURL}
                newName={pic.user}
                onClick={() => onImageClick(pic.largeImageURL)}
              />
            ))}
          </ul>
    );
}