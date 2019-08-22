import React from "react";

const FormComponent = (props) => {
    return(
        <form onSubmit={props.addToDo}>
            <input placeholder="Your favorite to do list task"
            onChange={props.onInputChange}></input>
            <button className="add" type="submit">Add</button>
            <button className="clear" type="button" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </form>
    )
}

export default FormComponent;