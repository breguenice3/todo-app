import { useEffect, useState, useRef } from 'react'
import Item from '../item-list/item'
import './style.css'
import styled from 'styled-components'

export default function Bgd() {

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

    useEffect(() => {
        setTodo(todoInicial.current);
    }, []);

    return (
        <div className='bg'>
            <div className='container'>
                <div className='header-container'>
                    <h1>T O D O</h1>
                    <button className='theme'></button>
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
                            
                        } else { 
                            console.log('errora');
                        }
                        txt.value = ""
                    }}>Add</button>
                </DivInput>
            </div>
            <List>
                <Itens>
                    {todo.map((item) => {
                        return (
                            <Item key={item.id} name={item.name}/>
                        )
                    })}
                </Itens>
                <Buttons>
                    <div>
                        <p>{todo.length} items left</p>
                    </div>
                    <div>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                    <div>
                        <button>Clear Completed</button>
                    </div>
                </Buttons>
            </List>
        </div>
    )
}

const DivInput = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const List = styled.div`
    height: 500px;
    width: 520px;
    background-color: white;
    border-radius: 5px;
`

const Itens = styled.div`
    height: 95%;
    padding-top: 15px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
