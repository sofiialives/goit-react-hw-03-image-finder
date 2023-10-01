import { Component } from 'react';

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
      <header className="searchbar" onSubmit={this.handleSubmit}>
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
