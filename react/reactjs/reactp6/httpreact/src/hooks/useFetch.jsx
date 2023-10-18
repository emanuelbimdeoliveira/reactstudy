import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);

            const response = await fetch(url);
            const json = await response.json();
            setData(json);

            setLoading(false);
        }
        
        fetchRequest();
    }, [url, callFetch]);


    const httpConfig = (data, methodHttp) => {
        if (methodHttp === "POST") {
            setConfig({
                method: "POST", 
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });    
            setMethod(methodHttp)
        }
    }

    useEffect(() => {
        if (method === "POST") {
            const fetchRequestSend = async () => {
                let requestConfig = [url, config]
                const responseSend = await fetch(...requestConfig);
                
                setCallFetch(responseSend);
            }

            fetchRequestSend();      
        }
    }, [config, url, method]);

    return { data, httpConfig, loading }
}