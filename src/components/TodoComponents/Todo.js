import React from "react";

const ToDoComponent = (props) => {
    return (
        <li key={props.toDoItem.id} completed={props.toDoItem.completed.toString()}>{props.toDoItem.task}</li>
    )
}

export { ToDoComponent };