import React, { Component } from "react";

class Search extends Component {
  render() {
    const { value, searchInput, searchSubmit } = this.props;
    return (
      <div className="searchContainer">
        <h4>Enter ingredients seperated by a comma</h4>
        <form className="searchBar" onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="beef, carrots, onions"
            value={value}
            onChange={searchInput}
          />
          <button className="search">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
