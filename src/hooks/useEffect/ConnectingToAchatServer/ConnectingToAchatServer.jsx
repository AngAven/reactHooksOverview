import {chatConnection as chat} from "./chat.js"
import {useEffect, useState} from "react";

const ChatRoom = ({roomId}) => {
    const [serverUrl, setServerUrl] = useState('http://localhost:3000')

    useEffect(() => {
        const connection = chat(serverUrl, roomId)
        const connectAsync = async () => {
            await connection.connect()
        }
        connectAsync().then()

        return async () => {
            await connection.disconnect() // clean up code
        }
    }, [roomId, serverUrl])

    return (
        <>
            <h2>Connecting To A Chat Server (Mock)</h2>
            <label htmlFor="">
                Server URL:
                <input type="text" value={serverUrl} onChange={(e) => setServerUrl(e.target.value)}/>
            </label>
            <br/>
            <h2>Welcome to room: {roomId}</h2>
        </>
    )
}

const ChatWrapper = () => {
    const [roomId, setRoomId] = useState('general')
    const [show, setShow] = useState(false)

    return(
        <>
            <label htmlFor="">
                Choose the chat room: {' '}

                <select
                    name="chatSelection"
                    id="1"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button
                onClick={() => setShow(!show)}
            >
                {show ? 'Close chat' : 'Open chat'}
            </button>

            {show && <hr/>}
            {show && <ChatRoom roomId={roomId}/>}
        </>
    )
}

export {ChatWrapper}