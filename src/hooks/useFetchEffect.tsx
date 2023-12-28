import { useEffect } from 'react';
import useFetch from './useFetch';

export default function useFetchEffect(url: string, errMsg: string, config?: RequestInit) {
    const { data, error, loading, tryFetch, setData, setError, setLoading } = useFetch(url, errMsg, config);
    useEffect(() => {
        if (!url) {
            return;
        }
        const abortController = new AbortController();
        tryFetch();
        return abortController.abort();
    }, [url]);

    return { data, error, loading, setData, setError, setLoading };
}
