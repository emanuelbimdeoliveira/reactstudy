import { useLocation } from "react-router-dom"
// import { useMemo } from "react"
import { useSearchParams } from "react-router-dom";

export const useSearchPost = () => {
    const searchParams = useLocation();
    const [querySearch] = useSearchParams(searchParams);

    return querySearch; 
    // return useMemo(() => new URLSearchParams(querySearch), [querySearch])
}