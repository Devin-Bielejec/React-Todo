import React from 'react';
import FormComponent from "./components/TodoComponents/TodoForm";
import { ToDoList } from "./components/TodoComponents/TodoList";
import styled from "styled-components";

const Body = styled.body`
  width: 30%;
  margin: 0 auto;
`
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentTask: "",
      toDo: []    
    };
  }

  clearCompleted = (event) => {
    console.log(this.state);
    this.setState(
      {
        toDo: this.state.toDo.filter(obj => obj.completed === false
        )
      }
    )
  }

  toggleCompleted = (event) => {
    const currentId = event.target.id;
    
    const currentElement = event.target;
    console.log(currentElement);

    //Toggle line-through and set value of completed for setting state below
    let completedValue = true;
    if (currentElement.style.textDecoration !== "line-through") {
      let completedValue = true;
    } else {
      let completedValue = false;
    }

    this.setState(function () {
      //Find object in state
      let currentToDoItem = this.state.toDo.filter( obj => obj.id.toString() === currentId );
      currentToDoItem[0].completed = completedValue;
      return this.state;
    })
  }

  addToDo = (event) => {
    console.log("here");
    event.preventDefault();
    const thisId = Date.now();
    const thisCompleted = false;

    const taskValue = document.querySelector("form input").value;
    this.setState({toDo: [...this.state.toDo, {
      id: thisId,
      completed: thisCompleted,
      task: taskValue
    }]});

    //clear the text field
    document.querySelector("form").reset();
    
  };

  render() {
    return (
      <Body>
        <h2>To Do List</h2>
        <FormComponent clearCompleted={this.clearCompleted}
        onInputChange={this.onInputChange}
        addToDo={this.addToDo}/>
        <ToDoList toDoList={this.state.toDo} toggleCompleted={this.toggleCompleted}/>
      </Body>
    );
  }
};

export default App;
