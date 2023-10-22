import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [itemId, setItemId] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);
            
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error)                
            }

            
            setLoading(false);
        }
        
        fetchRequest();
    }, [url, callFetch]);


    const httpConfig = (dataRequest, methodHttp) => {
        if (methodHttp === "POST") {
            setConfig({
                    method: "POST", 
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(dataRequest)
            });    
            setMethod(methodHttp)
        }
        if (methodHttp === "DELETE") {
            setConfig({
                method: "DELETE", 
                headers: {
                    "Content-type": "application/json"
                },
            });    
            setItemId(dataRequest)
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
        if (method === "DELETE") {
            const fetchRequestSend = async () => {
                let requestConfig = `${url}/${itemId}`;
                const responseSend = await fetch(requestConfig, config);
                
                setCallFetch(responseSend);
            }

            fetchRequestSend();      
        }
    }, [config, url, method]);


    return { data, httpConfig, loading }
}