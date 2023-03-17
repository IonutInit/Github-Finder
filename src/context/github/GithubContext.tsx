import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { PropsWithChildren} from 'react'

import { GithubContextProps} from '../../types'

const GithubContext = createContext<GithubContextProps>({
    users: [],
    user: {},
    loading: false,
    repos: [],
    searchUsers: async () => {},
    clearUsers: () => {},
    getUser: async () => {},
    getUserRepos: async () => {},
})

const GITHUB_URL: string = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN: string = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({children}: PropsWithChildren<GithubContextProps>) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
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


    //Get single user
    const getUser = async (login: string) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404) {
            window.location.href = "/notfound"
        } else {
            const data = await response.json()
    
            dispatch({
                type: "GET_USER",
                payload: data,
            })
        }
    }

    //Get user repos
    const getUserRepos = async (login: string) => {
        setLoading()

        const params: URLSearchParams = new URLSearchParams({
            sort: "created",
            per_page: String(10),
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()
    
        dispatch({
            type: "GET_REPOS",
            payload: data,
        })
    }
    //Clear users from state
    const clearUsers = () => dispatch({type: "CLEAR_USERS"})


    //Set loading
    const setLoading = () => dispatch({type: "SET_LOADING"})

    return (
        <GithubContext.Provider value={{ 
            users: state.users, 
            user: state.user,
            loading: state.loading, 
            repos: state.repos,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos,
            }}>
            {children}
        </GithubContext.Provider>)
}

export default GithubContext