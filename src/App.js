import React, { Component } from "react";
import { recipes } from "./fakeList";
import RecipeList from "./components/RecipeList";
import RecipeInfo from "./components/RecipeInfo";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // recipes: [],
      recipes: recipes,
      url:
        "https://www.food2fork.com/api/search?key=2d3c3b859bd6007b3ad1b5d31f2886ec",
      isLoading: true
    };
  }

  //make ajax request
  getData = () => {
    axios({
      method: "GET",
      url: "https://www.food2fork.com/api/search",
      dataResponse: "json",
      params: {
        key: "2d3c3b859bd6007b3ad1b5d31f2886ec"
      }
    })
      .then(results => {
        //store ajax call info into a variable called results and limit the results (default is 30)
        results = results.data.recipes;
        results.length = 12;

        this.setState({
          recipes: results,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    // console.log(this.state.recipes);
    return (
      <div className="App">
        <header>
          <h1>Recipes To Go</h1>
        </header>
        <main>
          <RecipeList recipes={this.state.recipes} isLoading={this.state.isLoading} />
          <RecipeInfo />
          {/* {this.state.isLoading ? (
            <p>...Loading</p>
          ) : (
            this.state.recipes.map(individualRecipe => {
              return (
                <section key={individualRecipe.id}>
                  <h3>{individualRecipe.title}</h3>
                  <img
                    src={individualRecipe.image_url}
                    alt={individualRecipe.title}
                  ></img>
                </section>
              );
            })
          )} */}
        </main>
      </div>
    );
  }
}

export default App;
