import React from "react";
import styled from "styled-components";

const ToDoItem = styled.li`
    &:hover{
        text-decoration: line-through;
    }
`
const ToDoComponent = (props) => {
    console.log(props.toDoItem.id);
    return (
        <ToDoItem id={props.toDoItem.id} completed={props.toDoItem.completed.toString()} onClick={props.removeToDo}>{props.toDoItem.task}</ToDoItem>
    )
}

export { ToDoComponent };