import React, {Component} from 'react';
import RecipeBox from '../components/RecipeBox';
import EditModal from '../components/EditModal';

const RecipeBoxContainer = class RecipeBoxContainer extends Component {
  constructor(props) {
    super(props);

    let recipes = JSON.parse(localStorage.getItem('recipes') || JSON.stringify(this.props.recipes));

    this.state = {
      showModal: false,
      recipes: recipes,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);

  }

  handleEdit = (i) => {
    this.setState({
      showModal: true,
      editedRecipe: JSON.parse(JSON.stringify(this.state.recipes[i])),
      editedIndex: i,
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false,
      editedRecipe: {
        name: '',
        ingredients: '',
      },
      editedIndex: -1,
    });
  }

  handleSave = () => {
    let recipes = this.state.recipes;

    if (this.state.editedIndex >= this.state.recipes.length) {
      recipes.push(this.state.editedRecipe);
    } else {
      recipes[this.state.editedIndex] = this.state.editedRecipe;
    }

    this.setState({
      showModal: false,
      recipes: recipes,
      editedRecipe: {
        name: '',
        ingredients: '',
      },
      editedIndex: -1
    }, () => this.persist());
  }

  handleChangeName = (event) => {
    let value = event.target.value;
    let newRecipe = this.state.editedRecipe;
    newRecipe.name = value;

    this.setState({
      editedRecipe: newRecipe
    });
  }

  handleChangeIng = (event) => {
    let value = event.target.value;
    let newRecipe = this.state.editedRecipe;
    newRecipe.ingredients = value;

    this.setState({
      editedRecipe: newRecipe
    });
  }

  handleAddRecipe = () => {
    this.setState({
      editedRecipe: {
        name: '',
        ingredients: '',
      },
      editedIndex: this.state.recipes.length,
      showModal: true,
    })
  }

  handleDelete = (i) => {
    console.log(i);
    let recipes = this.state.recipes;
    recipes.splice(i,1);
    console.log(JSON.stringify(recipes));

    this.setState({
      recipes: recipes
    });
  }

  persist = () => {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  render = () => {
    return (
      <div>

        <RecipeBox recipes={this.state.recipes}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          onAddRecipe={this.handleAddRecipe} />

        <EditModal show={this.state.showModal}
          onClose={this.handleClose}
          editedRecipe={this.state.editedRecipe}
          onChangeName={this.handleChangeName}
          onChangeIng={this.handleChangeIng}
          onSave={this.handleSave} />

      </div>
    );
  }
}

export default RecipeBoxContainer;
