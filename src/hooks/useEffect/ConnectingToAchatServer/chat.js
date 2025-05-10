const chatConnection = (serverUrl, roomId) => {
    return {
        connect() {
            return console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl)
        }
    }
}

export {chatConnection}