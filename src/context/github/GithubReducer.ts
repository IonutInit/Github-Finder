import { Users } from "../../types"

type GithubReducer = {
    users: Users[],
    loading: boolean
}

type Action = {
    type: "SET_LOADING" | "CLEAR_USERS"
}

type ActionWithPayload = {
    type: "GET_USERS",
    payload: Users[],
}

const githubReducer = (state: GithubReducer, action: Action | ActionWithPayload) => {
    switch(action.type) {
        case "GET_USERS":
            return {
                ...state, 
                users: action.payload,
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

    // if (action.type === 'GET_USERS') {
    //     return {...state, users: action.payload, loading: false}
    // }

    // if (action.type === "SET_LOADING") {
    //     return {...state, loading: true}
    // }
}

export default githubReducer