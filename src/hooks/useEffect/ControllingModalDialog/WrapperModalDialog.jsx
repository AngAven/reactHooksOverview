import {ModalDialog} from "./ModalDialog.jsx";
import {useState} from "react";

const WrapperModalDialog = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <h2>Controlling Modal Dialog</h2>

            <button
                onClick={() => setShow(true)}
            >Open Dialog</button>

            <ModalDialog isOpen={show}>
                Hello there!

                <br/>
                <button
                    onClick={() => setShow(false)}
                >Close</button>
            </ModalDialog>
            
        </>
    )
}

export {WrapperModalDialog}