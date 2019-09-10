import React, { Component } from "react";
import { recipe } from "../fakeInfo";
import axios from "axios";

class RecipeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe,
      url: "https://www.food2fork.com/api/get"
    };
  }

  //make a new API call with specific recipe info
  getInfo = () => {
    axios({
      method: "GET",
      url: "https://www.food2fork.com/api/get",
      dataResponse: "json",
      params: {
        key: "07d7e44a4bc10ad558be2bdd5a88bbbc",
        rId: `${this.props.id}`
      }
    }).then(res => {
      res = res.data.recipe;

      this.setState({
        recipe: res
      });
    });
  };

  componentDidMount() {
   this.getInfo();
  }

  //render the info pulled form the API call
  render() {
    const { title, image_url, source_url, ingredients } = this.state.recipe;
    const { handleDisplay } = this.props;
    return (
      <section className="recipeInfo">
        <div className="imageContainer">
          <img src={image_url} alt={title}></img>
        </div>
        <div className="infoContainer">
          <h3>{title}</h3>
          <h4>Ingredients:</h4>
          <ul className="ingredientList">
            {ingredients.map((ing, index) => {
              return <li key={index}>{ing}</li>;
            })}
          </ul>
          <div className="buttonsContainer">
            <button>
              <a href={source_url} target="_blank rel=noopener">
                View Instructions
              </a>
            </button>
            <button onClick={() => handleDisplay(true)}>Back to Recipes</button>
          </div>
        </div>
      </section>
    );
  }
}
export default RecipeInfo;
