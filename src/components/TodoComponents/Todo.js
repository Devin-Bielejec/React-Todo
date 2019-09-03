import React from "react";
import styled from "styled-components";

const ToDoItem = styled.li`
    &:hover{
        text-decoration: line-through;
    }

    font-size: 2rem;
    margin: 1% 0%;
    text-align: center;
    width: 100%;
    border: 1px solid lightgrey;
`
const ToDoComponent = (props) => {
    return (
        <ToDoItem id={props.toDoItem.id} onClick={props.toggleCompleted} style={{textDecoration:props.lineThrough}}>{props.toDoItem.task}</ToDoItem>
    )
}

export { ToDoComponent };