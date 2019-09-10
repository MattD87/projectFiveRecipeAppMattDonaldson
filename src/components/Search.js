import React, { Component } from "react";

class Search extends Component {
  render() {
    const { value, searchInput, searchSubmit } = this.props;
    return (
      <div className="searchContainer">
        <h4>Enter ingredients seperated by a comma</h4>
        <form className="searchBar" onSubmit={searchSubmit}>
          <label htmlFor="search" className="visuallyHidden">Search</label>
          <input
            type="text"
            placeholder="beef, carrots, onions"
            value={value}
            onChange={searchInput}
            id="search"
            name="search"
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
