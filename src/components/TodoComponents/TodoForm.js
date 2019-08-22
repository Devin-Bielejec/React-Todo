import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
`
const Buttons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin: 1% 0%;
`

const AddButton = styled.button`
    width: 40%;
`


const ClearButton = styled.button`
    width: 40%;
`
const FormComponent = (props) => {
    return(
        <Form onSubmit={props.addToDo}>
            <input placeholder="Your favorite to do list task"
            onChange={props.onInputChange}></input>
            <Buttons className="buttons">
                <AddButton className="add" type="submit">Add</AddButton>
                <ClearButton className="clear" type="button" onClick={props.clearCompleted}>
                    Clear Completed
                </ClearButton>
            </Buttons>
        </Form>
    )
}

export default FormComponent;