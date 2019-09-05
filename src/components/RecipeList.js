import React, { Component } from "react";
import RecipeLayout from "./RecipeLayout";
import Search from "./Search";

class RecipeList extends Component {
  render() {
    const { recipes, isLoading } = this.props;
    return (
      <section className="recipes">
        <Search />
        {/* <div className="recipesContainer"> */}
        <h2>Recipes List:</h2>
        <div className="recipeCards">
          {/* Take out ! to make work with API */}
          {!isLoading ? (
            <p>...Loading</p>
          ) : (
            recipes.map(individualRecipe => {
              return (
                <div className="cards" key={individualRecipe.recipe_id}>
                  <h3>{individualRecipe.title}</h3>
                  <img
                    src={individualRecipe.image_url}
                    alt={individualRecipe.title}
                  ></img>
                </div>
              );
            })
          )}
        </div>
        {/* </div> */}
        <RecipeLayout />
      </section>
    );
  }
}
export default RecipeList;
