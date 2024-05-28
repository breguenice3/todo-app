import styled from "styled-components"
import { useState, useEffect, ReactEventHandler } from "react";
import './style.css'

interface Props {
    name: string;
    completed: boolean;
    bgcolor: string;
    lettercolor: string;
    list: any;
    itemid: number;
    todo: any;
    setTodo: any;
}

export default function Item({ name, completed, lettercolor, list, itemid, todo, setTodo }: Props) {

    console.log(itemid);

    const handleClick = () => {
        const updatedList = todo.map((item: any) => {
            if (item.id === itemid) {
                return { ...item, completed: true };
            }
            return item;
        });
        setTodo(updatedList);
    };

    if (completed) {
        return (
            <ItemDiv>
                <div>
                    <StyledButton>
                    </StyledButton>
                    <StyledP id={name} className="completed">
                        {name}
                    </StyledP>
                </div>
                <StyledHR />
            </ItemDiv>
        )
    } else {
        return (
            <ItemDiv>
                <div>
                    <StyledButton onClick={handleClick}>
                    </StyledButton>
                    <StyledP id={name}>
                        {name}
                    </StyledP>
                </div>
                <StyledHR />
            </ItemDiv >
        )
    }
}


const ItemDiv = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: column;
& div{
    display: flex;
    gap: 10px;
    padding: 15px;
    align-items: center;
}
`

const StyledP = styled.p`

`

const StyledButton = styled.button`
    border-radius: 100%;
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 1px solid hsla(236.6666666666666, 9.090909090909099%, 61.1764705882353%, 0.295);
    background-color: transparent;
    cursor: pointer;
`

const StyledHR = styled.hr`
    background-color: white;
    height: 1px;
    border: 1px solid gray;
`