import React from 'react';
import FormComponent from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentTask: "",
      toDo: [{id: 3}]    
    };
  }

  addToDoHandler = (event) => {
    event.preventDefault();
    const thisId = Date.now();
    const thisCompleted = false;
    this.setState({toDo: [{
      id: thisId,
      completed: thisCompleted,
      task: this.state.currentTask
    }]});
  };

  onInputChange = (event) => {
    this.setState({currentTask: event.target.value});
    
    console.log(this.state);
  };

  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>{this.state.toDo[0].id}</h2>
        <FormComponent onInputChange={this.onInputChange}addToDoHandler={this.addToDoHandler}/>
        {/* <ToDoList /> */}
      </div>
    );
  }
};

export default App;
