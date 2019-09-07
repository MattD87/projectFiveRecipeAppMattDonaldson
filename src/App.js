import React, { Component } from "react";
import { recipes } from "./fakeList";
import RecipeList from "./components/RecipeList";
import RecipeInfo from "./components/RecipeInfo";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // recipes: [],
      recipes: recipes,
      url: "https://www.food2fork.com/api/search",
      defaultUrl: "https://www.food2fork.com/api/search",
      isLoading: true,
      displayList: true,
      id: 35384,
      searchTerms: "",
      query: "&q="
      
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
        //redo axios with new API key if first one fails
        axios({
          method: "GET",
          url: "https://www.food2fork.com/api/search",
          dataResponse: "json",
          params: {
            key: "2d3c3b859bd6007b3ad1b5d31f2886ec"
          }
        }).then(results => {
          //store ajax call info into a variable called results and limit the results (default is 30)
          results = results.data.recipes;
          results.length = 12;

          this.setState({
            recipes: results,
            isLoading: false
          });
        });
      });
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
          viewDetails={this.viewDetails}
        />
      );
    } else {
      return (
        <RecipeInfo id={this.state.id} handleDisplay={this.handleDisplay} />
      );
    }
  };

  handleDisplay = check => {
    this.setState({
      displayList: check
    });
  };

  viewDetails = (check, id) => {
    this.setState({
      displayList: check,
      id: id
    });
  };

  searchInput = event => {
    this.setState({
      searchTerms:event.target.value
    }, () => {
      console.log(this.state.searchTerms);
    })
  };

  /////////////////////////////
  // WORKING ON THIS SECTION //
  ////////////////////////////
  searchSubmit = e => {
    e.preventDefault();
    const { defaultUrl, query, searchTerms } = this.state;
    this.setState(() => {
      return {url:`${defaultUrl} ${query}${searchTerms}`}
    })
    console.log("search submit");
  };

  render() {
    return (
      <div className="App">
        <Header
          value={this.state.search}
          searchInput={this.searchInput}
          searchSubmit={this.searchSubmit}
        />
        <main>{this.showInfo()}</main>
      </div>
    );
  }
}

export default App;
