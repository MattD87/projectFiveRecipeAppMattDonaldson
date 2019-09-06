import React, { Component } from "react";

class RecipeLayout extends Component {
  render() {
    const { title, image_url, source_url, recipe_id } = this.props.recipeNew;

    return (
        <div className="recipeCard" key={recipe_id}>
          <h3>{title}</h3>
          <img src={image_url} alt={title}></img>
          <div className="buttonContainer">
            <button>View Details</button>
            {/* <button><a href={source_url} target="_blank">Visit Source</a></button> */}
          </div>
        </div>
    );
  }
}
export default RecipeLayout;
