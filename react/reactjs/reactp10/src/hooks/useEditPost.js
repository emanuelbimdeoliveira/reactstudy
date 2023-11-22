import { useState, useEffect, useReducer } from "react";

import { db } from "../firebase/config";
import { collection, doc, updateDoc } from "firebase/firestore"


// data used in reducer hook
const initialState = {
    loading: false, 
    error: false
}

// function to dispatch
const editPostReducer = (state, action) => {
    switch (action.type) {
        case "LOADING": 
            return {loading: true, error: false};
        case "EDITED": 
            return {loading: false, error: false};
        case "ERROR": 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const useEditPost = (docCollection, idPost) => {
    const [state, dispatch] = useReducer(editPostReducer, initialState)

    // avoid memory leak
    const [cancelled, setCancelled] = useState(false);
    const checkCancelledBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    }

    // function called during submit
    const editPost = async (postToEdit) => {
        checkCancelledBeforeDispatch({type: "LOADING", payload: null})
        
        try {
            const updatedPost = await updateDoc(doc(db, docCollection, idPost), postToEdit);
            console.log(updatedPost)
        } catch (error) {
            checkCancelledBeforeDispatch({type: "ERROR", payload: error.message})
        }
    }
    
    // useEffect(() => {
        // setCancelled(true)
    // }, []);    

    return {editPost, state};
}