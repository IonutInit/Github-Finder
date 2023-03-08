import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { PropsWithChildren} from 'react'

import { GithubContextProps} from '../../types'

const GithubContext = createContext<GithubContextProps>({
    users: [],
    loading: false,
    searchUsers: async () => {},
    clearUsers: () => {},
})

const GITHUB_URL: string = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN: string = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({children}: PropsWithChildren<GithubContextProps>) => {
    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Get search results
    const searchUsers = async (text: string) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })        

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json()
    
        dispatch({
            type: "GET_USERS",
            payload: items,
        })
    }

    //Clear users from state
    const clearUsers = () => dispatch({type: "CLEAR_USERS"})


    //Set loading
    const setLoading = () => dispatch({type: "SET_LOADING"})

    return (
        <GithubContext.Provider value={{ 
            users: state.users, 
            loading: state.loading, 
            searchUsers,
            clearUsers,
            }}>
            {children}
        </GithubContext.Provider>)
}

export default GithubContext