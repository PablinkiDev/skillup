import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Error en la petición');
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            })
    }, [url])

    return { data, loading, error }

}