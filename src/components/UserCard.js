import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <img src="https://www.iconspedia.com/dload.php?up_id=132953" />
            <div>{props.user.email}</div>
        </div>
    )
}
