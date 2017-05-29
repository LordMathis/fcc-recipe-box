import React, { Component } from 'react';
import './App.css';
import recipes from './recipes.json';
import RecipeBoxContainer from './containers/RecipeBoxContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe Box</h2>
        </div>
        <div>
          <RecipeBoxContainer recipes={recipes.recipes}/>
        </div>
      </div>
    );
  }
}

export default App;
