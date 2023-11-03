import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import { db } from "../firebase/config";

import { useEffect, useState } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // cleanUP
    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth();

    const ifIsCancelled = () => {
        if (cancelled) {
            return;
        }
    }
    
    const createUser = async (data) => {
        ifIsCancelled();
        
        setLoading(true);
        setError(null);
        
        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);    
            await updateProfile(user, {displayName: data.userName})
            
        } catch (error) {
            if (error.message.includes("Password")) {
                setError("A Senha dever ter no mínimo 6 caracteres.")
            } else if (error.message.includes("already")) {
                setError("Usuário já cadastrado.")
            }
        }
        
        setLoading(false);
        return {user};
    }

    const logOut = (userToLogOut) => {
        ifIsCancelled();

        signOut(userToLogOut);
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {auth, createUser, logOut, error, loading}
}