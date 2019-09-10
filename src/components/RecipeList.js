import React, { Component } from "react";
import RecipeLayout from "./RecipeLayout";

class RecipeList extends Component {
  render() {
    const { recipes, isLoading, viewDetails } = this.props;
    return (
      <section className="recipes">
        <h2>Recipes:</h2>
        <div className="recipeContainer">
          {/*Ternary operator to check if API call has returned data, if not show loading}
          {/* Take out ! to make work with API, add ! before isLoading if working with fake data */}
          {!isLoading ? (
            <p>...Loading</p>
          ) : (
            recipes.map(individualRecipe => {
              return (
                <RecipeLayout
                  key={individualRecipe.recipe_id}
                  recipeNew={individualRecipe}
                  viewDetails={() =>
                    viewDetails(false, individualRecipe.recipe_id)
                  }
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
