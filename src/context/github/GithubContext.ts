import { createContext, useState } from "react";

import { Users } from '../../types'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE.GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE.GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState<Users[]>([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_TOKEN}/users`, {
            headers: {
                Authorization: `token ${GITHUB_URL}`
            }
        })

        const data = await response.json()
    
        setUsers(data)
        setLoading(false)
    }

    return <GithubContext.Provider value={{
        users,
        loading
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext