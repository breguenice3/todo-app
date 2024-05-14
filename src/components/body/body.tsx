import styled from "styled-components"

const StyledDiv = styled.div`
    width: 100vw;
    height: 45vh;
    background-image: url(${require("../body/bg-desktop-light.jpg")});
    background-size: cover;
    background-repeat: no-repeat;
`

export default function Body() {
    return (
        <div>
            <StyledDiv>
            </StyledDiv>
        </div>
    )
}