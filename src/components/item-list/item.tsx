import styled from "styled-components"

interface Props {
    name: string;
}

export default function Item({ name }: Props) {
    return (
        <ItemDiv>
            <div>
                <button>
                    complete
                </button>
                <p>
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
    & div{
        display: flex;
        gap: 5px;
        padding: 15px;
        align-items: flex-start;
    }
`