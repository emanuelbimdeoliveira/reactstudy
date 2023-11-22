import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import { collection, query, orderBy, onSnapshot, where, getDoc, doc} from "firebase/firestore";


export const useGetPosts = (docCollection, search, uid, postId) => {
    const [documents, setDocuments] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const getPost = async () => {
        setLoading(true);
        setError(null);
        
        const collectionRef = collection(db, docCollection);
        let querySearch;
        let docSearch;
        
        try {
            if (search) {
                querySearch = await query(collectionRef, where("title", "==", search), orderBy("title", "asc"));
            } else if (uid) {
                querySearch = await query(collectionRef, where("userId", "==", uid), orderBy("title", "asc"));
            } else if (postId) {
                const docRef = await doc(db, docCollection, postId);
                docSearch = await getDoc(docRef);
                setDocuments(docSearch.data());
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
        
    return { getPost, documents, loading, error };
}