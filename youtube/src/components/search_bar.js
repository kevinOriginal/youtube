import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log(this.props.value);
    return (
      <div className="search-bar">
        <input
          value = {this.props.value}
          onChange = {(event) => this.onInputChange(event.target.value)} />
      </div>

    );
  }

  onInputChange(term) {
    this.props.onSearchTermChange(term);
    this.props.onChange(term);
  }

  //or handleInputChange - they are event handlers
}


export default SearchBar;
