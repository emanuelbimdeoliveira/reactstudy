import { useState, useEffect, useReducer } from "react";

import { db } from "../firebase/config";
import { collection, addDoc, Timestamp, Firestore } from "firebase/firestore"


// data used in reducer hook
const initialState = {
    loading: false, 
    error: false
}

// function to dispatch
const addPostReducer = (state, action) => {
    switch (action.type) {
        case "LOADING": 
            return {loading: true, error: false};
        case "INSERTED": 
            return {loading: false, error: false};
        case "ERROR": 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const useAddPost = (docCollection) => {
    const [state, dispatch] = useReducer(addPostReducer, initialState)

    // avoid memory leak
    const [cancelled, setCancelled] = useState(false);
    const checkCancelledBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    }

    // function called during submit
    const addPost = async (postToAdd) => {
        checkCancelledBeforeDispatch({type: "LOADING", payload: null})
        
        try {
            const newPost = {...postToAdd, createdAt: Timestamp.now()}
            const insertedDocument = await addDoc(collection(db, docCollection), newPost);
            checkCancelledBeforeDispatch({type: "INSERTED", payload: insertedDocument})
        } catch (error) {
            checkCancelledBeforeDispatch({type: "ERROR", payload: error.message})
        }
    }
    
    // useEffect(() => {
        // setCancelled(true)
    // }, []);    

    return {addPost, state};
}