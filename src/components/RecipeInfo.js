import React, { Component } from "react";
import { recipe } from "../fakeInfo";

class RecipeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // recipe: {},
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=2d3c3b859bd6007b3ad1b5d31f2886ec&rId=${this.props.id}`
    };
  }
  render() {
    const { title, image_url, ingredients } = this.state.recipe;
    return (
      <section className="recipeInfo">
        <div className="imageContainer">
          <img src={image_url} alt={title}></img>
        </div>
        <div className="infoContainer">
          <h3>{title}</h3>
          <h4>Ingredients:</h4>
          <ul className="ingredientList">
            {ingredients.map((ing, index) => {
              return (
                <li key={index}>
                {ing}
                </li>
              );
            })}
          </ul>
          <div className="buttonContainer">
            <button>Back to Recipes</button>
            <button>Export to Shopping List</button>
          </div>
        </div>
      </section>
    );
  }
}
export default RecipeInfo;
