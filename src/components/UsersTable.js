import React from 'react'
import UserCard from './UserCard'

export default function UsersTable(props) {
    const inlineCSS = {
        container: "d-flex flex-column m-5 text-center",
        image: "p-3",
        h1: "p-2",
        userCard: "border border-secondary m-1"
    }
    const userList = props.allUsersList.map( user => <UserCard
                                                        key = {user.email}
                                                        user = {user}
                                                        class = {inlineCSS.userCard}  />)
        return (
            <div class={inlineCSS.container}>
                <h1 class={inlineCSS.h1}>
                    Now you can see them all!
                </h1>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/1-month-old_kitten_33.jpg/640px-1-month-old_kitten_33.jpg" 
                    class={inlineCSS.image}/>
                <h1 class={inlineCSS.h1}>
                    Our users:
                </h1>
                <div>
                    {userList}
                </div>
            </div>
        )
}
