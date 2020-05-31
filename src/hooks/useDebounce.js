import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [delay, value]);

    return debounce;
}
