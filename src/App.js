import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
// import Layout from './components/Layout';
// import RecipeList from "./components/RecipeList";
// import RecipeInfo from "./components/RecipeInfo";
// import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    //declaring state to be updated
    this.state = {
      recipes: [], 
      isLoading: true
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes To Go</h1>
        </header>
      </div>
    );
  }
}

export default App;
