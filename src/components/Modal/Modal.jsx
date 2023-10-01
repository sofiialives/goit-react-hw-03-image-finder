import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { bckgClick, data } = this.props;
    return (
      <div className={css.overlay} onClick={bckgClick}>
        <div className={css.modal}>
          <img src={data} className={css.imgModal}/>
        </div>
      </div>
    );
  }
}
