import React from 'react';
import FormComponent from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentTask: "",
      toDo: []
    };
  }

  addToDoHandler = (event) => {
    console.log('hi');
    event.preventDefault();
    console.log(event);    
    const thisId = Date.now();
    const thisCompleted = false;
    this.setState(
      {toDo: [...this.state.toDo, {task: this.state.currentTask, id: thisId, completed: thisCompleted}]}
      );
    console.log("The state is", this.state);
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
        <h2>Welcome to your Todo App!</h2>
        <FormComponent onInputChange={this.onInputChange}addToDoHandler={this.addToDoHandler}/>
        {/* <ToDoList /> */}
      </div>
    );
  }
};

export default App;
