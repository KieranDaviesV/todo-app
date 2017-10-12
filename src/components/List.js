import React from 'react';
import Entry from './Entry.js'
class List extends React.Component {
  constructor() {
    super()
    this.state =  {list:[]}
  }
  handleClick = (listAdd) => {
    if(this.props.title === 'Todo List'){
      this.props.eventHandler(listAdd)
    }else{
      this.props.eventHandler(listAdd)
    }
  }
  render(){
    let listItems;
    if(this.props.todoList || this.props.doneList){
     listItems = this.props.todoList.map(list => {
        return (
          <Entry clickEvent={this.handleClick.bind(this)} todoList={list} controller={this.props.title}/>
        );
      });
    }
    return(
      <div className="list-group">
        <h1 >{this.props.title}</h1>
        {listItems}
      </div>
    )
  }
}
export default List;
