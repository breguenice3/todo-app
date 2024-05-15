import { useState } from "react"
import styled from "styled-components"

export default function Bgd(bg: any) {

    // const [bg, setBg] = useState("light");

    return (
        <div>
            <StyledDiv>
            </StyledDiv>
        </div>
    )
}

const StyledDiv = styled.div`
    width: 100vw;
    height: 45vh;
    background-image: url(${require(`../body/bg-desktop-light.jpg`)});
    background-size: cover;
    background-repeat: no-repeat;
`