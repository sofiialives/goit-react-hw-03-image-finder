import { Component } from 'react';
import css from './Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    picture: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.picture.trim() === '') {
        alert('What would you like to find?')
        return
    }
    this.props.picImg(this.state.picture);
    this.setState({ picture: '' });
  };
  changeName = evt => {
    this.setState({ picture: evt.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header className={css.searchbar} onSubmit={this.handleSubmit}>
        <form className="form">
          <button type="submit" className={css.barBtn}>
            <span className={css.buttonLabel}>&#128269;</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            value={this.state.picture}
            onChange={this.changeName}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
