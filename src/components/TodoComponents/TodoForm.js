import React from "react";

const FormComponent = (props) => {
    return(
        <form onSubmit={props.addToDoHandler} >
            <input placeholder="Your favorite to do list task"
            onChange={props.onInputChange}></input>
            <button className="add" type="submit">Add</button>
            <button className="clear" >Clear Completed</button>
        </form>
    )
}

export default FormComponent;