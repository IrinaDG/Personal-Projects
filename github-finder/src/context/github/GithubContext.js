import { createContext, useReducer } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import gitHubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
     
    const initialState = {
         users: [],
         user: {},
         repos: [],
         loading: false
     }

     const [state, dispatch] = useReducer(gitHubReducer, initialState)


    return <GithubContext.Provider value = {{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext