import {useEffect, useRef} from "react"

const ModalDialog = ({isOpen, children}) => {
    const ref = useRef()

    useEffect(() => {
        if (!isOpen) return

        const dialog = ref.current
        dialog.showModal()

        return(() => {
            dialog.close()
        })
    }, [isOpen]);

    return (
        <>
          <dialog ref={ref}>{children}</dialog>
        </>
    )
}

export {ModalDialog}