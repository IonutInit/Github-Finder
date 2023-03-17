import { Users, User, Repos, GithubReducer} from "../../types"

type Action = {
    type: "SET_LOADING" | "CLEAR_USERS"
}

type ActionWithPayload = {
    type: "GET_USERS" | "GET_USER",
    payload: Users[] 
}

type GetSingleUser = {
    type: "GET_USER",
    payload: User[],
    loading: boolean,
}

type GetRepos = {
    type: "GET_REPOS",
    payload: Repos,
}

const githubReducer = (state: GithubReducer, action: Action | ActionWithPayload | GetSingleUser | GetRepos) => {
    switch(action.type) {
        case "GET_USERS":
            return {
                ...state, 
                users: action.payload,
                loading: false,
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case "GET_REPOS":
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users: [],
            }
        default:
            return state
    }
}

export default githubReducer