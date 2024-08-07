import { useEffect, useState, useRef } from 'react'
import Item from '../item-list/item'
import './style.css'
import styled from 'styled-components'

export default function Bgd() {

    const [theme, setTheme] = useState('white');
    const [themeLetter, setThemeLetter] = useState('black');

    const List = styled.div`
        height: 500px;
        width: 520px;
        background-color: ${theme};
        border-radius: 5px;
        box-shadow: 0 0 0.1em black;

        @media screen and (max-width: 1024px){
            height: 400px;
            width: 370px;
        }
    `

    const DivInput = styled.div`
        display: flex;
        align-items: center;
        gap: 20px;

            & input{
                background-color: ${theme};
                box-shadow: 0 0 0.1em black;
                color: ${themeLetter}
            }

            & button{
                background-color: ${theme};
                color: ${themeLetter};
            }
    `
    const ButtonFunc = styled.button`
    background-color: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`

    const todoInicial = useRef([
        {
            id: 1,
            name: "Jog around the park 3x",
            completed: false
        },
        {
            id: 2,
            name: "Complete online JavaScript course",
            completed: true
        },
        {
            id: 3,
            name: "10 minutos meditation",
            completed: false
        }
    ]);

    const [todo, setTodo] = useState(todoInicial.current);
    const [todoShow, setTodoShow] = useState(todo)

    useEffect(() => {
        setTodoShow(todo)
    }, [todo]);


    return (
        <div className='bg' id='bg'>
            <div className='container'>
                <div className='header-container'>
                    <h1>T O D O</h1>
                    <button id='button' className='theme' onClick={() => {
                        if (theme == 'white') {
                            setTheme('hsl(235, 24%, 19%)');
                            setThemeLetter('white');
                            document.getElementById('button')?.classList.add('theme2');
                            document.getElementById('button')?.classList.remove('theme');
                            document.getElementById('bg')?.classList.add('bg1');
                            document.getElementById('bg')?.classList.remove('bg');

                        } else {
                            setTheme('white');
                            setThemeLetter('black');
                            document.getElementById('button')?.classList.remove('theme2');
                            document.getElementById('button')?.classList.add('theme');
                            document.getElementById('bg')?.classList.add('bg');
                            document.getElementById('bg')?.classList.remove('bg1');
                        }
                    }}></button>
                </div>
                <DivInput>
                    <input type="text" name="" id="txt" placeholder='Create a new todo...' />
                    <button className='add' onClick={() => {
                        const txt: any = document.getElementById('txt');
                        if (txt.value !== "") {
                            const newTodo = {
                                id: todo.length + 1,
                                name: txt.value,
                                completed: false
                            };
                            setTodo([...todo, newTodo]);
                            todoInicial.current.push(newTodo);
                        }
                        txt.value = ""
                    }}>Add</button>
                </DivInput>
            </div>
            <List>
                <Itens>
                    {todoShow.map((item) => {
                        return (
                            <Item key={item.id} name={item.name} completed={item.completed} bgcolor={theme} lettercolor={themeLetter} itemid={item.id} todo={todo} setTodo={setTodo} />
                        )
                    })}
                </Itens>
                <Buttons>
                    <div>
                        <p>{todoShow.length} items left</p>
                    </div>
                    <div>
                        <ButtonFunc onClick={() => {
                            setTodoShow(todo);
                        }}>All</ButtonFunc>
                        <ButtonFunc onClick={() => {
                            const filtro = todo.filter((item) => {
                                return (!item.completed)
                            })
                            setTodoShow(filtro)
                        }}>Active</ButtonFunc>
                        <ButtonFunc onClick={() => {
                            const filtro2 = todo.filter((item) => {
                                return (item.completed)
                            })
                            setTodoShow(filtro2)
                        }}>Completed</ButtonFunc>
                    </div>
                    <div>
                        <ButtonFunc
                            onClick={() => {
                                const newClearList = todo.filter((item) => {
                                    return(!item.completed)
                                })
                                setTodo(newClearList)
                            }}
                        >Clear Completed</ButtonFunc>
                    </div>
                </Buttons>
            </List>
        </div>
    )
}


const Itens = styled.div`
    height: 95%;
    padding-top: 5px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 5px;

    & div{
        display: flex;
        gap: 15px;
        & p{
            color: gray;
        }
    }
`