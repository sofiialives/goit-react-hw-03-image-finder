import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escapeClick);
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.escapeClick)
  }
    bckgClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  escapeClick = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { data } = this.props;
    return (
      <div className={css.overlay} onClick={this.bckgClick}>
        <div className={css.modal}>
          <img src={data} alt='descr' className={css.imgModal}/>
        </div>
      </div>
    );
  }
}
