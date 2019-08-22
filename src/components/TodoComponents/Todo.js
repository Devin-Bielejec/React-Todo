import React from "react";
import styled from "styled-components";

const ToDoItem = styled.li`
    &:hover{
        text-decoration: line-through;
    }
`
const ToDoComponent = (props) => {
    return (
        <ToDoItem key={props.toDoItem.id} completed={props.toDoItem.completed.toString()}>{props.toDoItem.task}</ToDoItem>
    )
}

export { ToDoComponent };