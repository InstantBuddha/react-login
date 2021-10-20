import React from 'react'
import UserCard from './UserCard'

export default function UsersTable(props) {
    const userList = props.allUsersList.map( user => <UserCard user = {user}/>)
        return (
            <div>
                <h1>Now you can see them all!</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/1-month-old_kitten_33.jpg/640px-1-month-old_kitten_33.jpg" />
                <h1>Our users:</h1>
                <div>
                    {userList}
                </div>
            </div>
        )
}
