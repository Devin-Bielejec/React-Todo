import React from "react";
import styled from "styled-components";

const ToDoItem = styled.li`
    &:hover{
        text-decoration: line-through;
    }
`
const ToDoComponent = (props) => {
    return (
        <ToDoItem id={props.toDoItem.id} onClick={props.toggleCompleted}>{props.toDoItem.task}</ToDoItem>
    )
}

export { ToDoComponent };