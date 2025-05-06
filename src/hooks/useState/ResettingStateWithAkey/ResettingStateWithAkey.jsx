import {useState} from "react";

const ResettingStateWithAkey = () => {
    const [version, setVersion] = useState(0)

    const handleReset = () => {
        setVersion(version + 1)
    }

    return (
        <>
            <h2>ResettingStateWithAkey</h2>
            <button onClick={handleReset}>Reset</button>
            <Form key={version} />
        </>
    )
}

const Form = () => {
    const [name, setName] = useState('Angel')

    return(
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </>
    )
}

export {ResettingStateWithAkey}