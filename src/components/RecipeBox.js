import React, {Component} from 'react';
import {Button, ButtonToolbar, Col, Panel} from 'react-bootstrap';
import './RecipeBox.css';

const Recipe = (props) => (
  <Panel header={props.name}>
    <ul>
      {props.ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
      })}
    </ul>
    <div className="Recipe-footer">
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={() => props.onEdit(props.id)}>Edit</Button>
        <Button bsStyle="danger" onClick={() => props.onDelete(props.id)}>Delete</Button>
      </ButtonToolbar>
    </div>
  </Panel>
)

class RecipeBox extends Component {
    render () {

      let i = 0;
      let recipes = this.props.recipes.map((recipe) => {
        return (
          <Recipe key={i}
                  id={i++}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  onEdit={this.props.onEdit}
                  onDelete={this.props.onDelete} />
        );
      });

      return (
        <div className='RecipeBox'>
          <Col xs={6} xsOffset={3}>
            {recipes}
          <Button className="RecipeBox-AddBtn" bsStyle="success" onClick={() => this.props.onAddRecipe()}>Add Recipe</Button>
          </Col>
        </div>
      );
    }
}

export default RecipeBox;
