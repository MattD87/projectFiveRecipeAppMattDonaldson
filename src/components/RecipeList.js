import React, { Component } from "react";
import RecipeLayout from "./RecipeLayout";
// import Search from "./Search";

class RecipeList extends Component {
  render() {
    const { recipes, isLoading, viewDetails } = this.props;
    return (
      <section className="recipes">
        <h2>Recipes:</h2>
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
