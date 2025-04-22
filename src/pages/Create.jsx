import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';

const PageTitle = styled.h2`
    font-size: ${props => props.$titleSize};
    color: ${props => props.$mainColor};
    width: 100%;
    text-align: center;
`

const CreateForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    gap: 3%;
`

const TitleInput = styled.input`
    width: 90%;
    height: 15%;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.$mainColor};
    outline: 2px solid #c694ff;
    background-color: #333;
    
    &:hover {
        outline: 3px solid #c694ff;
        background-color: #333;
    }

    &:focus {
        outline: 3px solid #c694ff;
        background-color: #333;
    }

    &::placeholder {
        color: #786c85;
    }
`

const DescInput = styled.textarea`
    min-width: 90%;
    max-width: 90%;
    min-height: 61%;
    max-height: 15%;
    font-size: 2rem;
    text-align: left;
    padding: 10px;
    color: ${props => props.$mainColor};
    outline: 2px solid #c694ff;
    background-color: #333;
    
    &:hover {
        outline: 3px solid #c694ff;
        background-color: #333;
    }

    &:focus {
        outline: 3px solid #c694ff;
        background-color: #333;
    }

    &::placeholder {
        color: #786c85;
    }   
`

const Btn = styled.input`
    width: 15%;
    height: 15%;
    border: 2px ${props => props.$clicked ? "inset" : "outset"} #c694ff;
    color: ${props => props.$mainColor};
    background-color: #4e434f;
    font-size: 2rem;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;


`

function Create({ form, setForm, titleSize, mainColor, formList, setFormList }) {
    const [clicked, setClicked] = useState(toString(false))
    const [higherId, setHigherId] = useState([])
    const mouseDown = () => setClicked(true)
    const mouseUp = () => setClicked(false)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const ids = formList.map(item => item.id)

        const maxId = ids.length > 0 ? Math.max(...ids) : 0

        const newTask = {
            id: maxId + 1,
            title: form.title,
            desc: form.desc
        }

        setFormList([
            ...formList, newTask
        ])

        setForm({
            id: '',
            title: '',
            desc: ''
        })
    }

    return (
        <>
            <PageTitle $titleSize={titleSize} $mainColor={mainColor}>Crie uma tarefa</PageTitle>

            <CreateForm>
                <TitleInput $mainColor={mainColor} type="text" name="title" id="title" placeholder="Título da tarefa" onChange={handleChange}/>
                <DescInput $mainColor={mainColor} name="desc" id="desc" placeholder="Descrição da tarefa" onChange={handleChange}/>
                <Btn $mainColor={mainColor} $clicked={clicked}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp} onMouseLeave={mouseUp}
                onClick={handleSubmit}
                type="submit" value="Criar"
                onChange={handleChange}/>
            </CreateForm>
            <Outlet />
        </>
    )
}

export default Create