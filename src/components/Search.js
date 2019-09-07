import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="searchContainer">
        <h4>Enter ingredients seperated by a comma</h4>
        <form className="searchBar">
          <input type="text" placeholder="beef, carrots, onions" />
          <button className="search">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
