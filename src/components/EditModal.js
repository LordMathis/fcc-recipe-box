import React from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './EditModal.css';

const EditModal = (props) => (
  <div className="static-modal">
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Edit Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <Form horizontal>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Recipe Name</ControlLabel>
            <FormControl componentClass="input"
              value={props.editedRecipe.name}
              onChange={props.onChangeName}
            />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl componentClass="textarea"
              value={props.editedRecipe.ingredients.join(', ')}
              onChange={props.onChangeIng}
            />
          </FormGroup>
        </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => props.onClose()}>Close</Button>
        <Button onClick={() => props.onSave()} bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal>
  </div>
)

EditModal.defaultProps = {
  editedRecipe: {
    name: '',
    ingredients: [],
  }
};

export default EditModal;
