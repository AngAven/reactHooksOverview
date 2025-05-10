import {useEffect, useState} from "react";

const WindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        console.log('resize')
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    
    return (
        <>
            <h2>WindowWidth</h2>
            <p>window width: {windowWidth}</p>
        </>
    )
}

export {WindowWidth}