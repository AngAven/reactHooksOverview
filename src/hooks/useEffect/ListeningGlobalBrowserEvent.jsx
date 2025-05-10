import {useEffect, useState} from "react";

const ListeningGlobalBrowserEvent = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('pointermove', handleMove)

        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, [])

    const styles = {
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        height: '40px',
        width: '40px',
        border: 'solid red 1px'
    }

    return (
        <>
            <h2>Listening Global Browser Event (pointermove)</h2>
            <br/>
            <div
                style={styles}
            />

        </>
    )
}

export {ListeningGlobalBrowserEvent}