import React, { Component } from 'react'
import UserCard from './UserCard'

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             usersToDisplay : this.props.allUsersList
        }
        this.logOut = this.logOut.bind(this)
    }

    logOut(){
        this.props.logOut()
    }
    
    render() {
        //console.log(this.state.usersToDisplay)
        const userList = this.state.usersToDisplay.map( user => <UserCard user = {user}/>)
        return (
            <div>
                <h1>Now you can see them all!</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/1-month-old_kitten_33.jpg/640px-1-month-old_kitten_33.jpg" />
                <h1>Our users:</h1>
                <div>
                    {userList}
                </div>
                <button onClick={this.logOut}>Log out</button>
            </div>
        )
    }
}

export default Content
