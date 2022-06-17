import { useCallback, useEffect, useState } from "react";

export const useAsync = (asyncFunction, args) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = useCallback(
        () => {
            setLoading(true);
            setResponse(null);
            setError(null);
            return asyncFunction(...args)
                .then((response) => {
                    setResponse(response);
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        [asyncFunction, ...args]
    );

    useEffect(() => {
        execute();
    }, []);


    return { response, error, loading };
};