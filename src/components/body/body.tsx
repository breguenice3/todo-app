import Item from '../item-list/item'
import './style.css'
import styled from 'styled-components'

export default function Bgd() {

    const todo = [
        {
            name: "Jog around the park 3x",
            completed: false
        },
        {
            name: "Complete online JavaScript course",
            completed: true
        },
        {
            name: "10 minutos meditation",
            completed: false
        }
    ]

    return (
        <div className='bg'>
            <div className='container'>
                <div className='header-container'>
                    <h1>T O D O</h1>
                    <button className='theme'></button>
                </div>
                <DivInput>
                    <input type="text" name="" id="" placeholder='Create a new todo...' />
                    <button className='add'>Add</button>
                </DivInput>
            </div>
            <List>
                <Itens>
                    {todo.map((item) => {
                        return (
                            <Item name={item.name} />
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
    border-radius: 15px;
`

const Itens = styled.div`
    height: 95%;
    padding-top: 15px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`