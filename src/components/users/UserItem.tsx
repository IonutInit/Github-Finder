import { PropsWithChildren } from "react"

function UserItem({user}: PropsWithChildren<Users>) {
  return (
    <div>{user.login}</div>
  )
}

export default UserItem
