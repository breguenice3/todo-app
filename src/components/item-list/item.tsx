import styled from "styled-components"
import './style.css'

interface Props {
    name: string;
    completed: boolean;
    bgcolor: string;
    lettercolor: string;
    itemid: number;
    todo: any;
    setTodo: any;
}

export default function Item({ name, completed, lettercolor, itemid, todo, setTodo }: Props) {

    const handleClick = () => {
        const updatedList = todo.map((item: any) => {
            if (item.id === itemid) {
                return { ...item, completed: true };
            }
            return item;
        });
        completed = true;
        setTodo(updatedList);
    };

    return (
        <ItemDiv>
            <div>
                <StyledButton onClick={handleClick} style={{ color: `${lettercolor}` }} className={(completed) ? 'disabled' : ''}>
                    complete
                </StyledButton>
                <p id={name} className={(completed) ? 'completed' : ''}>
                    {name}
                </p>
            </div>
            <StyledHR />
        </ItemDiv>
    )

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
@media screen and (max-width: 1024px){
    height: 60px;
}
`

const StyledButton = styled.button`
    width: 80px;
    height: 25px;
    text-align: center;
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