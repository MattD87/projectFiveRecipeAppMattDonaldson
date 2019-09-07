import React, { Component } from "react";
import Search from "./Search";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            <i class="fas fa-pizza-slice"></i>
            Recipes To Go
            <i class="fas fa-carrot"></i>
          </h1>
          <Search />
        </header>
      </div>
    );
  }
}
export default Header;
