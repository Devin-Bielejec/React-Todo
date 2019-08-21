// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { ToDoComponent } from "./Todo";

const ToDoList = (props) => {
    return(
        <ul>
            {props.toDoList.map( toDoItem => {
                return (<ToDoComponent toDoItem={toDoItem}/>)
            })}
        </ul>
    )
}

export { ToDoList };