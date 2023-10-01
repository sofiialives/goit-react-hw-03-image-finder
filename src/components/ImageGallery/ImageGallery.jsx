import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    pics: [],
    loading: false,
    modal: {
      isOpen: false,
      data: null,
    },
    page: 1,
    perPage: 12,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.picsName !== this.props.picsName) {
      console.log('The pic`s name was changed');
      this.setState({ loading: true });
      this.updatedPage();
    }
  }
  updatedPage = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.props.picsName}&page=${this.state.page}&key=39092859-16fe7b22871fd83438b6d2f7f&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState(prevState => ({
          pics: [...prevState.pics, ...data.hits],
        }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => this.setState({ loading: false }));
  };
  componentDidMount() {
    window.addEventListener('keydown', this.escapeClick);
  }
  escapeClick = evt => {
    if (evt.code === 'Escape') {
      this.closeModal();
    }
  };
  openModal = largeImageURL => {
    this.setState({
      modal: {
        isOpen: true,
        data: largeImageURL,
      },
    });
  };
  bckgClick = event => {
    if (event.currentTarget === event.target) {
      this.closeModal();
    }
  };
  closeModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: null,
      },
    });
  };
  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        loading: true,
      }),
      () => {
        this.updatedPage();
      }
    );
  };
  render() {
    const { pics, loading, modal } = this.state;

    return (
      <div>
        {loading && <Loader />}
        {pics && (
          <ul className={css.gallery}>
            {pics.map(pic => (
              <ImageGalleryItem
                key={pic.id}
                src={pic.webformatURL}
                user={pic.user}
                onClick={() => this.openModal(pic.largeImageURL)}
              />
            ))}
          </ul>
        )}
        {pics.length >= 12 && <Button pics={pics} loadMore={this.loadMore} />}
        {modal.isOpen && <Modal data={modal.data} bckgClick={this.bckgClick}/>}
      </div>
    );
  }
}
