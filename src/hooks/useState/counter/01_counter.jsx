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
        <div
            className="max-w-md mx-auto my-8 p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
            <div className="space-y-6">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Counter 1</h3>
                    <p className="text-gray-600 mb-2">Method: change the value calling setCount inline the button</p>
                    <code
                        className="block p-3 bg-gray-100 rounded-lg text-sm font-mono text-indigo-600 overflow-x-auto">
                        {`setCount((count) => count + 1)`}
                    </code>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-5xl font-bold text-indigo-600 py-4 px-8 rounded-lg bg-indigo-50">{count1}</p>
                </div>
                <div className="flex justify-center space-x-6">
                    <button
                        className="w-16 h-16 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => setCount1(prevCount1 => prevCount1 + 1)}
                    >
                        +
                    </button>
                    <button
                        className="w-16 h-16 bg-pink-500 text-white text-xl font-semibold rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => setCount1(prevCount1 => prevCount1 - 1)}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="space-y-6">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Counter 2</h3>
                    <p className="text-gray-600 mb-2">Counter 2 - calls twice setCount() inside function</p>
                    <code
                        className="block p-3 bg-gray-100 rounded-lg text-sm font-mono text-indigo-600 overflow-x-auto">
                        {`decrementCount2(){`}
                        <br/>
                        {'setCount((prevCount) => prevCount +- 1)'}
                        <br/>
                        {'setCount((prevCount) => prevCount +- 1)'}
                        <br/>
                        {'}'}
                    </code>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-5xl font-bold text-indigo-600 py-4 px-8 rounded-lg bg-indigo-50">{count2}</p>
                </div>
                <div className="flex justify-center space-x-6">
                    <button
                        className="w-16 h-16 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => addCount2()}
                    >
                        +
                    </button>
                    <button
                        className="w-16 h-16 bg-pink-500 text-white text-xl font-semibold rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => decrementCount2()}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="space-y-6">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Counter 3</h3>
                    <p className="text-gray-600 mb-2">Initialize useState(fn()) with a function (bad passing) </p>
                    <code
                        className="block p-3 bg-gray-100 rounded-lg text-sm font-mono text-indigo-600 overflow-x-auto">
                        {`useState(countInitial())`}
                    </code>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-5xl font-bold text-indigo-600 py-4 px-8 rounded-lg bg-indigo-50">{count3}</p>
                </div>
                <div className="flex justify-center space-x-6">
                    <button
                        className="w-16 h-16 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => addCount3()}
                    >
                        +
                    </button>
                    <button
                        className="w-16 h-16 bg-pink-500 text-white text-xl font-semibold rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => decrementCount3()}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="space-y-6">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Counter 4</h3>
                    <p className="text-gray-600 mb-2">Initialize useState(() => fn()) with a function (well
                        passing) </p>
                    <code
                        className="block p-3 bg-gray-100 rounded-lg text-sm font-mono text-indigo-600 overflow-x-auto">
                        {`decrementCount2(){setCount4(prevCount4 => prevCount4 +- 1)}`}
                    </code>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-5xl font-bold text-indigo-600 py-4 px-8 rounded-lg bg-indigo-50">{count4}</p>
                </div>
                <div className="flex justify-center space-x-6">
                    <button
                        className="w-16 h-16 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => addCount4()}
                    >
                        +
                    </button>
                    <button
                        className="w-16 h-16 bg-pink-500 text-white text-xl font-semibold rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => decrementCount4()}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="space-y-6">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Counter 5</h3>
                    <p className="text-gray-600 mb-2">Working with objects: override state if just changed count, we have to spread out  </p>
                    <code
                        className="block p-3 bg-gray-100 rounded-lg text-sm font-mono text-indigo-600 overflow-x-auto">
                        {` `}
                    </code>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <pre className="text-5xl font-bold text-indigo-600 py-4 px-8 rounded-lg bg-indigo-50">
                            {JSON.stringify(state, null, 2)}
                    </pre>
                    <p>
                        Count: {count5}
                    </p>
                    <p>
                        Theme: {theme5}
                    </p>
                </div>
                <div className="flex justify-center space-x-6">
                    <span>Counter 5: override state</span>
                    <button
                        className="w-16 h-16 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => addCount5()}
                    >
                        +
                    </button>
                    <button
                        className="w-16 h-16 bg-pink-500 text-white text-xl font-semibold rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => decrementCount5()}
                    >
                        -
                    </button>
                </div>
                <div className="flex justify-center space-x-6">
                    <span>Counter 5 update the state</span>
                    <button
                        className="w-16 h-16 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        onClick={() => addCount5Spread()}
                    >
                        +
                    </button>
                    <button
                        className="w-16 h-16 bg-pink-500 text-white text-xl font-semibold rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
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
