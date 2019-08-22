// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { ToDoComponent } from "./Todo";

const ToDoList = (props) => {
    console.log(`The following to do list is being rendered`, props.toDoList);
    return(
        <ul>
            {props.toDoList.map( toDoItem => {
                let lineThrough = "line-through";
                toDoItem.completed === true ? lineThrough = "line-through" : lineThrough = "none";
                return (<ToDoComponent toDoItem={toDoItem} toggleCompleted={props.toggleCompleted} lineThrough={lineThrough}/>)
            })}
        </ul>
    )
}

export { ToDoList };