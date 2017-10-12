import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      newTodo:{}
    }
  }
  handleClick = (e) => {
    e.preventDefault();

    if(this.textInput.value === ''){
      alert("Cannot use null value");
    }else {
      let date = new Date()
      let today = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
      this.setState({newTodo:{
        title: this.textInput.value,
        date: today
      }}, function(){
        this.textInput.value = '';
        this.props.addTodo(this.state.newTodo);
        console.log(this.state.newTodo)
      });
    }
  }
  render(){
    return (
      <div>
        <Form inline onSubmit={this.handleClick} >
          <FormGroup controlId="formInlineName">
            <ControlLabel>Add todo</ControlLabel>
          <FormControl inputRef={input => this.textInput = input}
            type="text" placeholder="Add your todo"
          />
          <Button type="submit">
            Submit
          </Button>
          </FormGroup>

        </Form>
      </div>
    );
  }
}
export default Add;
