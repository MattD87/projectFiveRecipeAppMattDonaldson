import React, { Component } from "react";
import RecipeLayout from "./RecipeLayout";
import Search from "./Search";

class RecipeList extends Component {
  render() {
    const { recipes, isLoading } = this.props;
    return (
      <section className="recipes">
        <Search />
        <h2>Recipes List:</h2>
        <div className="recipeContainer">
          {/* Take out ! to make work with API */}
          {!isLoading ? (
            <p>...Loading</p>
          ) : (
            recipes.map(individualRecipe => {
              return (
                <RecipeLayout
                  key={individualRecipe.recipe_id}
                  recipeNew={individualRecipe}
                />
              );
            })
          )}
        </div>
      </section>
    );
  }
}
export default RecipeList;
