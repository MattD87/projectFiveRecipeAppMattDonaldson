import React, { Component } from "react";

class RecipeLayout extends Component {
  render() {
    const { title, image_url, recipe_id } = this.props.recipeNew;

    return (
        <div className="recipeCard" key={recipe_id}>
          <h3>{title}</h3>
          <img src={image_url} alt={title}></img>
          <div className="buttonContainer">
            <button>View Recipe</button>
          </div>
        </div>
    );
  }
}
export default RecipeLayout;
