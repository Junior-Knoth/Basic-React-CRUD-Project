import { useState, useEffect } from 'react'
import styled from 'styled-components'

const PageTitle = styled.h2`
    font-size: ${props => props.$titleSize};
    color: ${props => props.$mainColor};
    width: 100%;
    text-align: center;
`

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 5%;
    row-gap: 3rem;
    align-items: flex-start;
    width: 100%;
    margin: 4rem 0;
`

const ListItem = styled.div`
    color: ${props => props.$mainColor};
    width: 20%;
    height: 15rem;
    text-align: center;
    padding: 1rem;
    outline: 3px solid ${props => props.$mainColor};
    border-radius: 20px;
    display: grid;
    grid-template-areas: 
    "t t t i"
    "d d d d"
    "d d d d"
    "e e a a"
    ;
    grid-template-rows: 2.5rem 1fr 1fr 1.5rem;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    background-color: #333;
`

const Title = styled.h2`
    width: 100%;
    height: 100%;
    grid-area: t;
    text-align: left;
    font-size: ${props => props.$titleSize};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-break: loose;
    overflow: auto;
    scrollbar-width: none;
    text-overflow: ellipsis;
`

const Id = styled.h3`
    width: 100%;
    height: 100%;
    grid-area: i;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const Desc = styled.p`
    width: 100%;
    height: 100%;
    grid-area: d;
    text-align: left;
    line-break: loose;
`

function ListDisplay({ formList, mainColor, titleSize }) {
    return(
        <>
            <PageTitle $titleSize={titleSize} $mainColor={mainColor}>Lista de tarefas</PageTitle>

            <ListWrapper>
                {formList.map((item, index) => (
                    <ListItem $mainColor={mainColor} key={index}>
                        <Title>{item.title}</Title>
                        <Id>{item.id}</Id>
                        <Desc>{item.desc}</Desc>
                    </ListItem>
                ))}
            </ListWrapper>
        </>
    )
}

export default ListDisplay