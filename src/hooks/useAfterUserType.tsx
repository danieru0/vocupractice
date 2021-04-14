import { useState, useEffect } from 'react';

const useAfterUserType = (value: string) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setQuery(value);
        }, 500);

        return () => clearTimeout(timeOut);
    }, [value]);

    return query;
}

export default useAfterUserType;