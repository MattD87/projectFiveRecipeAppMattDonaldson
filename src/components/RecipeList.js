import React, { Component } from "react";
import RecipeLayout from "./RecipeLayout";

class RecipeList extends Component {
  render() {
    const { recipes, isLoading, viewDetails, noResult } = this.props;
    return (
      <section className="recipes">
        <h2>Recipes:</h2>
        <div className="recipeContainer">
          {/*Ternary operator to check if API call has returned data, if not show loading*/}
          {noResult && <p>{noResult}</p>}
          {isLoading ? (
            <p>Loading...</p>
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
