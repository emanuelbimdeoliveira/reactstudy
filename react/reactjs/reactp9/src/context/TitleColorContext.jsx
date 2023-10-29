import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const changeColors = (state, action) => {
    switch (action.type) {
        case "BLUE": 
            return {...state, color: "blue"};
        case "RED": 
            return {...state, color: "red"};
        case "GREEN": 
            return {...state, color: "green"};
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(changeColors, { color: "#808"});
    return (
        <TitleColorContext.Provider value={ {...state, dispatch} }>
            {children}
        </TitleColorContext.Provider>
    )
}


