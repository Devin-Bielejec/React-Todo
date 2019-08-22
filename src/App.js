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
    this.setState(
      {
        toDo: this.state.toDo.filter(obj => obj.completed === false
        )
      }
    )
  }

  removeToDo = (event) => {
    //Shows the item as strucken through
    event.target.style.textDecoration = "line-through";

    //Find object in state
    let currentToDoItem = this.state.toDo.filter( obj => obj.id.toString() === event.target.id );
    currentToDoItem.completed = true;

    this.setState(function () {
      let currentState = this.state.toDo;

      
      
      return stateObject;
    })
  }

  addToDo = (event) => {
    event.preventDefault();
    const thisId = Date.now();
    const thisCompleted = false;

    this.setState({toDo: [...this.state.toDo, {
      id: thisId,
      completed: thisCompleted,
      task: this.state.currentTask
    }]});

    //clear the text field
    document.querySelector("form").reset();
    
  };

  onInputChange = (event) => {
    this.setState({currentTask: event.target.value});
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
        <ToDoList toDoList={this.state.toDo} removeToDo={this.removeToDo}/>
      </div>
    );
  }
};

export default App;
