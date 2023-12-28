import { useState } from 'react';

export default function useFetch(url: string, errMsg: string, config?: RequestInit) {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const tryFetch = async (modifyers?: { config?: RequestInit; url?: string }) => {
        try {
            setError('');
            setLoading(true);
            const res = await fetch(modifyers?.url || url, modifyers?.config || config);
            const data = await res.json();
            setData(data);
            return data;
        } catch (error: any) {
            const message = errMsg || error?.message || 'unexpected error';
            setError(message);
            throw Error(message);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, tryFetch, setData, setError, setLoading };
}
