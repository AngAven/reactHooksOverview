import {Child} from "./Child.jsx";
import {useState} from "react";

const StoringInformationFromPreviousRenders = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h2>StoringInformationFromPreviousRenders</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <Child count={count}/>
        </>
    )
}

export {StoringInformationFromPreviousRenders}