import {useState} from "react";

const createInitialTodos = () => {
    console.log('Passing state directly, this execute every re-render this function')
    const initialTodos = []

    for (let i = 0; i < 10; i++){
        initialTodos.push({
            id: i,
            text: 'Item' + (i + 1)
        })
    }

    return initialTodos
}

const PassingInitialState = () => {
    const [todos, setTodos] = useState(createInitialTodos())
    const [text, setText] = useState()

    return (
        <>
            PassingInitialState
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button
                onClick={() => {
                    setText('')
                    setTodos([{
                        id: todos.length,
                        text: text,
                    }, ...todos])
                }}
            >Add
            </button>

            <ul>
                {todos.map(item => {
                    return <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </>
    )
}

export {PassingInitialState}