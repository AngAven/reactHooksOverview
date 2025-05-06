import {useState} from "react";

const Child = ({count}) => {
    const [prevCount, setPrevCount] = useState(count)
    const [trend, setTrend] = useState(null)

    if (prevCount != count) {
        setPrevCount(count)
        setTrend(count > prevCount ? 'increasing' : 'decreasing')
    }

    return (
        <>
            <h2>{count}</h2>
            {trend && <p>The count is {trend}</p>}
        </>
    )
}

export {Child}