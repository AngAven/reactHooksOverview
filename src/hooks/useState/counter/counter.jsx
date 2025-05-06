import {useState} from "react";

const countInitial = () => {
    console.log('Counter 3, calls this function every component render this may cause *performance issue*')
    return 3
}

const Counter = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(countInitial())
    const [count4, setCount4] = useState(() => {
        console.log('Count 4 - just run this function at first ')
        return 4
    })
    const [state, setState] = useState({count: 10, theme: 'blue'})
    const count5 = state.count
    const theme5 = state.theme

    const decrementCount2 = () => {
        console.log('Decrement function Counter 2')
        setCount2(prevCount2 => prevCount2 - 1)
        setCount2(prevCount2 => prevCount2 - 1)
    }

    const addCount2 = () => {
        console.log('add function Counter 2')
        setCount2(prevCount2 => prevCount2 + 1)
        setCount2(prevCount2 => prevCount2 + 1)
    }

    const decrementCount3 = () => {
        setCount3(prevcount3 => prevcount3 - 1)
    }

    const addCount3 = () => {
        setCount3(prevcount3 => prevcount3 + 1)
    }

    const decrementCount4 = () => {
        setCount4(prevCount4 => prevCount4 - 1)
    }

    const addCount4 = () => {
        setCount4(prevCount4 => prevCount4 + 1)
    }

    const decrementCount5 = () => {
        setState(prevState => {
            return {count: prevState.count + 1} // override all state
        })
    }

    const addCount5 = () => {
        setState(prevState => {
            return {count: prevState.count + 1} // override all state
        })
    }

    const decrementCount5Spread = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count - 1}
        })
    }

    const addCount5Spread = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count + 1}
        })
    }


    return (
        <div className="counter-container">
            <div className="counter-section">
                <div className="counter-header">
                    <h3 className="counter-title">Counter 1</h3>
                    <p className="counter-description">Method: change the value calling setCount inline the button</p>
                    <code className="code-block">
                        {`setCount((count) => count + 1)`}
                    </code>
                </div>
                <div className="counter-display-container">
                    <p className="counter-display">{count1}</p>
                </div>
                <div className="counter-buttons">
                    <button
                        className="increment-button"
                        onClick={() => setCount1(prevCount1 => prevCount1 + 1)}
                    >
                        +
                    </button>
                    <button
                        className="decrement-button"
                        onClick={() => setCount1(prevCount1 => prevCount1 - 1)}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="counter-section">
                <div className="counter-header">
                    <h3 className="counter-title">Counter 2</h3>
                    <p className="counter-description">Counter 2 - calls twice setCount() inside function</p>
                    <code className="code-block">
                        {`decrementCount2(){`}
                        <br/>
                        {'setCount((prevCount) => prevCount +- 1)'}
                        <br/>
                        {'setCount((prevCount) => prevCount +- 1)'}
                        <br/>
                        {'}'}
                    </code>
                </div>
                <div className="counter-display-container">
                    <p className="counter-display">{count2}</p>
                </div>
                <div className="counter-buttons">
                    <button
                        className="increment-button"
                        onClick={() => addCount2()}
                    >
                        +
                    </button>
                    <button
                        className="decrement-button"
                        onClick={() => decrementCount2()}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="counter-section">
                <div className="counter-header">
                    <h3 className="counter-title">Counter 3</h3>
                    <p className="counter-description">Initialize useState(fn()) with a function (bad passing) </p>
                    <code className="code-block">
                        {`useState(countInitial())`}
                    </code>
                </div>
                <div className="counter-display-container">
                    <p className="counter-display">{count3}</p>
                </div>
                <div className="counter-buttons">
                    <button
                        className="increment-button"
                        onClick={() => addCount3()}
                    >
                        +
                    </button>
                    <button
                        className="decrement-button"
                        onClick={() => decrementCount3()}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="counter-section">
                <div className="counter-header">
                    <h3 className="counter-title">Counter 4</h3>
                    <p className="counter-description">Initialize useState(() ={'>'} fn()) with a function (well
                        passing) </p>
                    <code className="code-block">
                        {`decrementCount2(){setCount4(prevCount4 => prevCount4 +- 1)}`}
                    </code>
                </div>
                <div className="counter-display-container">
                    <p className="counter-display">{count4}</p>
                </div>
                <div className="counter-buttons">
                    <button
                        className="increment-button"
                        onClick={() => addCount4()}
                    >
                        +
                    </button>
                    <button
                        className="decrement-button"
                        onClick={() => decrementCount4()}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="counter-section">
                <div className="counter-header">
                    <h3 className="counter-title">Counter 5</h3>
                    <p className="counter-description">Working with objects: override state if just changed count, we have to spread out  </p>
                    <code className="code-block">
                        {` `}
                    </code>
                </div>
                <div className="state-display-container">
                    <pre className="state-display">
                            {JSON.stringify(state, null, 2)}
                    </pre>
                    <p className="state-property">
                        Count: {count5}
                    </p>
                    <p className="state-property">
                        Theme: {theme5}
                    </p>
                </div>
                <div className="counter-buttons-group">
                    <span className="button-group-label">Counter 5: override state</span>
                    <button
                        className="increment-button"
                        onClick={() => addCount5()}
                    >
                        +
                    </button>
                    <button
                        className="decrement-button"
                        onClick={() => decrementCount5()}
                    >
                        -
                    </button>
                </div>
                <div className="counter-buttons-group">
                    <span className="button-group-label">Counter 5 update the state</span>
                    <button
                        className="increment-button"
                        onClick={() => addCount5Spread()}
                    >
                        +
                    </button>
                    <button
                        className="decrement-button"
                        onClick={() => decrementCount5Spread()}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}

export {Counter}
