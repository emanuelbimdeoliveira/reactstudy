import { useNavigate } from "react-router-dom"

import { useLocation } from 'react-router-dom'


export const useSearchPost = (query) => {
    const navigate = useNavigate();

    const searchPost = () => {
        navigate(`/search?q=${query}`);
    }

    return { searchPost };
}