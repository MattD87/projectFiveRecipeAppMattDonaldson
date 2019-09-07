import React, { Component } from "react";
import Search from "./Search";

class Header extends Component {
  render() {
    const { value, searchInput, searchSubmit } = this.props;
    return (
      <div>
        <header>
          <h1>
            <i className="fas fa-pizza-slice"></i>
            Recipes To Go
            <i className="fas fa-carrot"></i>
          </h1>
          <Search
            value={value}
            searchInput={searchInput}
            searchSubmit={searchSubmit}
          />
        </header>
      </div>
    );
  }
}
export default Header;
