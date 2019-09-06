import React, { Component } from "react";
import { recipes } from "./fakeList";
import RecipeList from "./components/RecipeList";
import RecipeInfo from "./components/RecipeInfo";
// import Search from "./components/Search";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // recipes: [],
      recipes: recipes,
      url: "https://www.food2fork.com/api/search",
      isLoading: true,
      id: 35384,
      displayList: true,
      // case: "list"
    };
  }

  // make ajax request
  getData = () => {
    axios({
      method: "GET",
      url: "https://www.food2fork.com/api/search",
      dataResponse: "json",
      params: {
        key: "07d7e44a4bc10ad558be2bdd5a88bbbc"
      }
    }).then(results => {
      //store ajax call info into a variable called results and limit the results (default is 30)
      results = results.data.recipes;
      results.length = 12;

      this.setState({
        recipes: results,
        isLoading: false
      });
    }).catch((error)=> {
      console.log(error);
      //redo axios
    })
  };

  // componentDidMount() {
  //   this.getData();
  // }

  showInfo = () => {    
    if (this.state.displayList === true) {
      return (
        <RecipeList
        recipes={this.state.recipes}
        isLoading={this.state.isLoading}
        />
        );
      } else {
        return <RecipeInfo id={this.state.id} />;
      };
  };

  handleDisplay = (check) => {
    this.setState({
      displayList:check
    })
  }
// ----------------------------------------------------------------
    // switch (info) {
    //   case "list":
    //     return (
    //       <RecipeList
    //         recipes={this.state.recipes}
    //         isLoading={this.state.isLoading}
    //       />
    //     );
    //   case "info":
    //     return <RecipeInfo id={this.state.id} />;
    // }
  // ----------------------------------------------------------------
  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes To Go</h1>
          {/* <Search /> */}
        </header>
        <main>{this.showInfo()}</main>
      </div>
    );
  }
}

export default App;
