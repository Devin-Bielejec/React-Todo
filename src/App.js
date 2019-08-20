import React from 'react';
import FormComponent from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDo: []
    };
  }

  addToDoHandler = (event) => {
    const thisTask = event.target.value;
    const thisId = Date.now();
    const thisCompleted = false;
    this.setState(
      {toDo: [...this.state.toDo, {task: thisTask, id: thisId, completed: thisCompleted}]}
      );
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <FormComponent />
        {/* <ToDoList /> */}
      </div>
    );
  }
};

export default App;
