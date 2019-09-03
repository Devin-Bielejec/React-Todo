import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
    height: 100%;
    padding: 5% 0%;
`

const Input = styled.input`
    width: 75%;
    margin: 0 auto;
`
const Buttons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin: 1% 0%;
`

const Button = styled.button`
    width: 50%;
    height: 100%;
    border-radius: 50px;
    font-size: 2rem;
    text-align: center;
    padding: 5%;
    margin: 5% auto;
`
const AddButton = styled(Button)`
    background: green;
`


const ClearButton = styled(Button)`
    background: red;
`
const FormComponent = (props) => {
    return(
        <Form onSubmit={props.addToDo}>
            <Input placeholder="Your favorite to do list task"
            onChange={props.onInputChange}></Input>
            <Buttons className="buttons">
                <AddButton className="add" type="submit">Add</AddButton>
                <ClearButton className="clear" type="button" onClick={props.clearCompleted}>
                    Clear
                </ClearButton>
            </Buttons>
        </Form>
    )
}

export default FormComponent;