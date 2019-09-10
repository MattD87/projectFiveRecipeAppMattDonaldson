import React, { Component } from "react";

class RecipeLayout extends Component {
  render() {
    const { title, image_url, recipe_id } = this.props.recipeNew;
    const { viewDetails } = this.props;

    return (
      <div className="recipeCard" key={recipe_id}>
        <h3>{title}</h3>
        <img src={image_url} alt={title}></img>
        <div className="buttonContainer">
          <button onClick={viewDetails}>View Details</button>
        </div>
      </div>
    );
  }
}
export default RecipeLayout;
