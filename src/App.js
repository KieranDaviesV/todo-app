import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EntryList from './components/List.js'
import AddEntry from './components/Add.js'
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      todoList:[],
      doneList:[{
        title: "A todo App",
        date: "420"
      }]
    }
  }
  compontWillMount(){
    let date = new Date()
    this.setState({todoList:[{
      title: "Swaglord",
      date: date.getDate()
    }
  ]
});
  }
  handleAddTodo(todo){
    let todoList = this.state.todoList;
    // todos.push(todo);
    todoList.push(todo)
    this.setState({todoList: todoList})
    console.log(todoList);
  }
  handleComplete(todo){
    let doneList = this.state.doneList;
    doneList.push(todo)
    this.setState({doneList: doneList})
    console.log(doneList)
    let todoList = this.state.todoList;
    todoList.pop(todo)
  }
  handleDelete(todo){
    let doneList = this.state.doneList;
    doneList.pop(todo);
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h1>The OG TODO app</h1>
          <small>By kieran Davies</small>
        </div>
      <div className="container">
        <div className="jumbotron">
          <AddEntry addTodo={this.handleAddTodo.bind(this)}/>
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <EntryList todoList={this.state.todoList} eventHandler={this.handleComplete.bind(this)} title="Todo List"/>
            </Col>
            <Col xs={6} md={6}>
              <EntryList todoList={this.state.doneList} eventHandler={this.handleDelete.bind(this)} title="Completed List"/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
