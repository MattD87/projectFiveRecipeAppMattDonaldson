import React, { Component } from "react";
import { recipes } from "./fakeList";
import RecipeList from "./components/RecipeList";
import RecipeInfo from "./components/RecipeInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: recipes,
      url:
        "https://www.food2fork.com/api/search?key=07d7e44a4bc10ad558be2bdd5a88bbbc",
      defaultUrl:
        "https://www.food2fork.com/api/search?key=07d7e44a4bc10ad558be2bdd5a88bbbc",
      isLoading: true,
      displayList: true,
      id: 35384,
      searchTerms: "",
      query: "&q=",
      key: "2d3c3b859bd6007b3ad1b5d31f2886ec"
    };
  }

  // make ajax request
  getData = url => {
    axios({
      method: "GET",
      url: url,
      dataResponse: "json"
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
        //redo axios with new API key if first one fails and log error
        console.log(error);
        axios({
          method: "GET",
          url: "https://www.food2fork.com/api/search",
          dataResponse: "json",
          params: {
            key: "2d3c3b859bd6007b3ad1b5d31f2886ec"
          }
        }).then(results => {
          //store ajax call info into a variable and limit the results (default is 30)
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
  //   this.getData(this.state.url);
  // }

  //function to show recipe list or recipe info if there is no list data
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

  //function to show recipe list if populated, called in recipeInfo
  handleDisplay = check => {
    this.setState({
      displayList: check
    });
  };

  //function to show recipe details if 'view details' is clicked, called in recipeLayout
  viewDetails = (check, id) => {
    this.setState({
      displayList: check,
      id: id
    });
  };

  //function to store search input data, called in Search
  searchInput = event => {
    this.setState({
      searchTerms: event.target.value
    });
  };

  //function to handle form submit and show results, called in Search
  searchSubmit = e => {
    e.preventDefault();
    const { defaultUrl, query, searchTerms } = this.state;
    this.setState(
      () => {
        return {
          url: `${defaultUrl}${query}${searchTerms}`,
          searchTerms: ""
        };
      },
      () => {
        this.getData(this.state.url);
      }
    );
  };

  //render for the App
  render() {
    return (
      <div className="App">
        <Header
          value={this.state.search}
          searchInput={this.searchInput}
          searchSubmit={this.searchSubmit}
        />
        <div className="wrapper">
          <main>{this.showInfo()}</main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
