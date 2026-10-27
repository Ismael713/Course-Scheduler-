import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true);
        setError(null);
        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error: ${resp.status}`)
                }
                return resp.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [url])
    return { data, isPending, error }
}
export default useFetch