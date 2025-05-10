import {useEffect, useState} from "react";

const Api = () => {
    const [resource, setResource] = useState('posts')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

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
        // Reset to page 1 when resource changes
        setCurrentPage(1)

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

    // Get current items for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Go to next page
    const nextPage = () => {
        if (data && currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Go to previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const showData = () => {
        switch (resource) {
            case 'posts':
                return (
                    currentItems.map(item => {
                        return <li key={item.id}>Title: {item.title}</li>
                    })
                )
            case 'users':
                return (
                    currentItems.map(item => {
                        return <li key={item.id}>Name: {item.name}</li>
                    })
                )
            case 'comments':
                return (
                    currentItems.map(item => {
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

                {data && !loading && !error && (
                    <div style={{ marginTop: '20px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            Showing items {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of {data.length}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
                            <button 
                                onClick={prevPage} 
                                disabled={currentPage === 1}
                                style={{ 
                                    padding: '5px 10px', 
                                    backgroundColor: currentPage === 1 ? '#ccc' : '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Previous
                            </button>

                            <div style={{ display: 'flex', gap: '5px' }}>
                                {data && Array.from({ length: Math.min(5, Math.ceil(data.length / itemsPerPage)) }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => paginate(i + 1)}
                                        style={{
                                            padding: '5px 10px',
                                            backgroundColor: currentPage === i + 1 ? '#007bff' : '#f0f0f0',
                                            color: currentPage === i + 1 ? 'white' : 'black',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                {data && Math.ceil(data.length / itemsPerPage) > 5 && (
                                    <span style={{ alignSelf: 'center' }}>...</span>
                                )}
                            </div>

                            <button 
                                onClick={nextPage} 
                                disabled={data && currentPage === Math.ceil(data.length / itemsPerPage)}
                                style={{ 
                                    padding: '5px 10px', 
                                    backgroundColor: data && currentPage === Math.ceil(data.length / itemsPerPage) ? '#ccc' : '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: data && currentPage === Math.ceil(data.length / itemsPerPage) ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Next
                            </button>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            Page {currentPage} of {data ? Math.ceil(data.length / itemsPerPage) : 0}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export {Api}
