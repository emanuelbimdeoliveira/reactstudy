import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);

    setConfig()

    useEffect(() => {
        const fetchRequest = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        
        fetchRequest();
    }, [url]);
    return { data, config }
}