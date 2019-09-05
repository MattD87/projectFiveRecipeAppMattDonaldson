import React, { Component } from 'react'
import RecipeLayout from './RecipeLayout';
import Search from './Search';

class RecipeList extends Component {
  render() {
    return (
      <div>
        <p>Hello from Recipe List</p>
        <Search />
        <RecipeLayout />
      </div>
    )
  }
}
export default RecipeList;
