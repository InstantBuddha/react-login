import React from 'react'

export default function UserCard(props) {
    return (
        <div class="border border-secondary m-1 d-flex flex-row">
            <img src="https://www.iconspedia.com/dload.php?up_id=132953" 
                class="p-1" />
            <div class="p-2" >{props.user.email}</div>
        </div>
    )
}
