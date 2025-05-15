import {useEffect, useRef, useState} from "react";
import {FadeAnimation} from "./animation.js";

const Welcome = () => {
    const ref = useRef(null)

    useEffect(() => {
        const animation = new FadeAnimation(ref.current)
        console.log('ref.current', ref.current)
        animation.start(1000)

        return (() => {
            animation.stop()
        })
    }, []);

    console.log('ref.current', ref)


    const styles = {
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)'
    }

    return (
        <>
            <h1
                ref={ref}
                style={styles}
            >Welcome</h1>
        </>
    )
}

const BoxAnimation = () => {
    const ref = useRef(null)
    let position = 0
    let animationId = null
    const windowWidth = document.documentElement.clientWidth

    const moveBox = () => {
        const node = ref.current
        if (!node) {
            return
        }

        position += 2
        node.style.transform = `translateX(${position}px)`

        if (position < windowWidth) {
            animationId = requestAnimationFrame(moveBox)
        }
    }

    useEffect(() => {
        moveBox()

        return () => cancelAnimationFrame(animationId);
    }, []);


    const boxStyle = {
        width: '50px',
        height: '50px',
        background: 'red',
        position: 'absolute'
    }



    return (
        <>
            <div id={'box'} style={boxStyle} ref={ref}></div>
        </>
    )
}


const WrapperAnimation = () => {
    const [show, setShow] = useState(false)
    const [showBox, setShowBox] = useState(false)

    return (
        <>
            <h2>Wrapper Animations</h2>
            <br/>
            <button
                onClick={() => setShow(!show)}
            >{show ? 'Remove Welcome' : 'Show Welcome'}</button>
            <hr/>
            {show && <Welcome/>}

            <br/>
            <button
                onClick={() => setShowBox(!showBox)}
            >{showBox ? 'Remove Box' : 'Show box'}</button>
            {showBox && <BoxAnimation/>}
        </>
    )
}

export {WrapperAnimation}