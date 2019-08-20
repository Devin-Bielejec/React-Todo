import React from "react";

const FormComponent = (props) => {
    return(
        <form>
            <input placeholder="Your favorite to do list task"
            onChange={props.addToDoHandler}
            ></input>
        </form>
    )
}

export default FormComponent;