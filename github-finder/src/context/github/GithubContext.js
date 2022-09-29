import { createContext, useReducer } from "react";
import gitHubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
     const initialState = {
         users: [],
         loading: false
     }

     const [state, dispatch] = useReducer(gitHubReducer, initialState)

//Get initial users (for testing purposes)

    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
  
        const data = await response.json()
        dispatch({
            type:'GET_USERS',
            payload:data,
        })
  //Loading state      
        const setLoading = () => dispatch({
            type:'SET_LOADING'
            
        })
        console.log(data);
    }

    return <GithubContext.Provider value = {{
        users: state.users,
        loading: state.loading,
        fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext