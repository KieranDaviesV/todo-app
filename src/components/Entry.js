import React from 'react';
import {Panel,Bootstrap, Grid, Row, Col,Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Entry extends React.Component {
  constructor(){
    super()
    this.state = {
      entry:{
        title:{},
        date: {}
      }
    }
  }
  handleClick = (e) => {
    e.preventDefault(e);
    let date = new Date();
    let today = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()

    if(this.props.controller === 'Todo List'){
      // entry.push(addedEntry)
      this.setState({entry:{
        title: this.props.todoList.title, 
        date: today
      }}, function(){
        console.log(this.state.entry)
        this.props.clickEvent(this.state.entry)
      })
    }else{
      this.setState({entry:{
        title: this.props.todoList.title,
        date: today
      }}, function(){
        console.log(this.state.entry)
        this.props.clickEvent(this.state.entry)
      })
    }
  }
  render(){
    if(this.props.todoList){
      if(this.props.controller === 'Todo List'){
        return (
          <li className="list-group-item">
            <Panel className="entryPanel">
              <Row className="show-grid">
                <Form inline onSubmit={this.handleClick} >
                  <FormGroup controlId="formInlineName">
                    <ControlLabel>{this.props.todoList.title}</ControlLabel><br/>
                    <ControlLabel>{this.props.todoList.date}</ControlLabel>
                    <Button type="submit">
                      Completed
                    </Button>
                  </FormGroup>
                </Form>
            </Row>
          </Panel>
        </li>
      );
      }else {
        return(
          <li className="list-group-item">
            <Panel className="entryPanel">
              <Row className="show-grid">
                <Form inline onSubmit={this.handleClick} >
                  <FormGroup controlId="formInlineName">
                    <ControlLabel>{this.props.todoList.title}</ControlLabel><br/>
                    <ControlLabel>{this.props.todoList.date}</ControlLabel>
                    <Button type="submit">
                      Remove
                    </Button>
                  </FormGroup>
                </Form>
            </Row>
          </Panel>
        </li>
      );
      }
    }else{
      return null
    }
}

  // Entry.propType = {
  //   todoList: React.propType.object
  // }
}
export default Entry;
