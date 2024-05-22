import styled from "styled-components"
import { useState } from "react";

interface Props {
    name: string;
}



export default function Item({ name }: Props) {
    const [a, setA] = useState('black');
    const [line, setLine] = useState('none')
    return (
        <ItemDiv>
            <div>
                <StyledButton onClick={(obj) => {
                    setA('gray');
                    setLine('line-through')
                }
                }>
                </StyledButton>
                <p style={{ color: `${a}`, textDecoration: `${line}`}}>
                    {name}
                </p>
            </div>
            <hr />
        </ItemDiv>
    )
}

const ItemDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    align-items: center;
    & div{
        display: flex;
        gap: 5px;
        padding: 15px;
        align-items: center;
    }
`
const StyledButton = styled.button`
    border-radius: 100%;
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 1px solid hsla(236.6666666666666, 9.090909090909099%, 61.1764705882353%, 0.295);
    background-color: transparent;
`