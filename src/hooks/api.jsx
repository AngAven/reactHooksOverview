import {useEffect, useState} from "react";

const Api = () => {
    const [resource, setResource] = useState('posts')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getJsonStyles = (isDark = false, maxHeight = 200) => {
        return {
            backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5',
            color: isDark ? '#e0e0e0' : '#333333',
            padding: '12px',
            borderRadius: '4px',
            border: `1px solid ${isDark ? '#444' : '#ddd'}`,
            fontFamily: 'monospace',
            fontSize: '14px',
            overflowX: 'auto',
            maxHeight: `${maxHeight}px`,
            minHeight: '200px',
        }
    }

    useEffect(() => {
        const fetchResource = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`)

                if (!response.ok) {
                    throw new Error(`Something went wrong: ${response.status}`)
                }

                const result = await response.json()

                setData(result)
            } catch (e) {
                console.log(e)
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        fetchResource()
    }, [resource])

    const showData = () => {
        switch (resource) {
            case 'posts':
                return (
                    data.map(item => {
                        return <li key={item.id}>Title: {item.title}</li>
                    })
                )
            case 'users':
                return (
                    data.map(item => {
                        return <li key={item.id}>Name: {item.name}</li>
                    })
                )
            case 'comments':
                return (
                    data.map(item => {
                        return <li key={item.id}>Body: {item.body}</li>
                    })
                )
            default:
                return null
        }
    }

    return (
        <>
            <h2>Example from Web Hooks Simplify</h2>
            <p>This example make an API request for Posts, Users or Comments, depends on the button pressed.</p>
            <br/>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('users')}>Users</button>
                <button onClick={() => setResource('comments')}>Comments</button>
            </div>
            <div>
                <h2>Source</h2>
                <p>{resource}</p>
            </div>
            <br/>
            <pre style={getJsonStyles(true)}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            <br/>
            <h2>Items: {resource}</h2>
            <div style={getJsonStyles(false, 500)}>
                {loading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}

                <ul>
                    {(data && !loading && !error) && showData()}
                </ul>
            </div>
        </>
    )
}

export {Api}