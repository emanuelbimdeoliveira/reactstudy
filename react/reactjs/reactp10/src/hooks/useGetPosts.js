import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import { collection, query, orderBy, onSnapshot, where} from "firebase/firestore";


export const useGetPosts = (docCollection, search) => {
    const [documents, setDocuments] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const getPost = async () => {
        setLoading(true);
        setError(null);

        const collectionRef = collection(db, docCollection);
        let querySearch;

        try {
            if (search) {
                querySearch = await query(collectionRef, where("tags", "array-contains", search), orderBy("title", "asc"));
                console.log(querySearch)
            } else {
                querySearch = await query(collectionRef, orderBy("title", "asc"));
            }
            
            await onSnapshot(querySearch, (querySnapshot) => {
                setDocuments(
                    querySnapshot.docs.map((item) => ({
                        id: item.id,
                        ...item.data()
                    })));
                });
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
        
        useEffect(() => {
            getPost();
        }, [collection, query, docCollection])    
        
        console.log(documents)
    return { getPost, documents, loading, error };
}