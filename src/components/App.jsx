import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchImages } from 'services/Api';

export class App extends Component {
  state = {
    picture: '',
    pics: [],
    loading: false,
    modal: {
      isOpen: false,
      data: null,
    },
    page: 1,
    perPage: 12,
  };
  formSubmit = picture => {
    this.setState({ picture, page: 1, pics: [] });
  };
  componentDidUpdate(_, prevState) {
    const { page, picture } = this.state;
    if (prevState.picture !== picture || prevState.page !== page) {
      this.getImages();
    }
  }

  getImages = () => {
    const { page, picture } = this.state;
    this.setState({ loading: true });
    fetchImages(picture, page)
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

  openModal = largeImageURL => {
    this.setState({
      modal: {
        isOpen: true,
        data: largeImageURL,
      },
    });
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
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { loading, modal, pics } = this.state;
    return (
      <div>
        <Searchbar picImg={this.formSubmit} />
        <ImageGallery pics={pics} onImageClick={this.openModal} />
        {loading && <Loader />}
        {modal.isOpen && (
          <Modal data={modal.data} onClose={this.closeModal} alt="descr" />
        )}
        {pics.length >= 12 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
