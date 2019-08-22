import React from 'react';
import FormComponent from "./components/TodoComponents/TodoForm";
import { ToDoList } from "./components/TodoComponents/TodoList";

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
    console.log(this.state);
  }

  toggleCompleted = (event) => {
    const currentId = event.target.id;
    
    //Toggle line-through and set value of completed for setting state below
    let completedValue = true;
    if (event.target.style.textDecoration !== "line-through") {
      let completedValue = true;
      event.target.style.textDecoration = "line-through";
    } else {
      let completedValue = true;
      event.target.style.textDecoration = "none";
    }

    this.setState(function () {
      //Find object in state
      let currentToDoItem = this.state.toDo.filter( obj => obj.id.toString() === currentId );
      currentToDoItem[0].completed = completedValue;
      return this.state;
    })
  }

  addToDo = (event) => {
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

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <FormComponent clearCompleted={this.clearCompleted}
        onInputChange={this.onInputChange}
        addToDo={this.addToDo}/>
        <ToDoList toDoList={this.state.toDo} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
};

export default App;
