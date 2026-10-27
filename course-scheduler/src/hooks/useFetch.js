import {useState, useEffect} from 'react'

function useFetch(endpoint)
{
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>
    {
        const controller = new AbortController();

        setIsPending(true);
        setError(null);

        const url = `${import.meta.env.VITE_API_BASE_URL}${endpoint}`;

        fetch(url)
            .then(resp =>
            {
                if (!resp.ok)
                {
                    throw new Error(`HTTP error: ${resp.status}`)
                }
                return resp.json()
            })
            .then(data =>
            {
                setData(data)
                setIsPending(false)
            })
            .catch(err =>
            {
                setError(err.message)
                setIsPending(false)
            })
        return () => controller.abort();
    }, [endpoint])
    return {data, isPending, error}
}

export default useFetch