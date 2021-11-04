import React, { Component } from 'react'
import LoginPage from './LoginPage'
import SignUp from './SignUp'
import UsersTable from './UsersTable'

export class Selector extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showLogin : true,
             loggedIn : false,
             currentUser : {email: "", password : ""},
             users: [
                 {email: "testuser@test.com", password : "test"},
                 {email: "testuser2@test2.com", password : "test"},
                 {email: "testuser3@test3.com", password : "test"}
             ]
        }

        this.childSwitcher = this.childSwitcher.bind(this)
        this.signYouUp = this.signYouUp.bind(this)
        this.signYouIn = this.signYouIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.getUser = this.getUser.bind(this)
        this.hasUser = this.hasUser.bind(this)
    }

    childSwitcher(){
        const switchLogin = !this.state.showLogin
        
        this.setState({
            showLogin : switchLogin
        })
    }

    getUser(email){
        return this.state.users.find(user => user.email == email)
    }

    hasUser(email){
        return this.getUser(email) !== undefined
    }

    signYouUp(userToSignUp){
        if(!this.hasUser(userToSignUp.email)){
            let UpdatedUsers = [...this.state.users, userToSignUp]
            this.setState({showLogin: true,
                users : UpdatedUsers})
            alert("Hello! You have been registered with: " + userToSignUp.email + "You can log in now!")
       }
    }

    signYouIn(userToCheck){
        const savedUser = this.getUser(userToCheck.email)
        if(savedUser === undefined){
            alert("It seems you haven't registered yet...")
            return
        }
        if(savedUser.password !== userToCheck.password){
            alert("Wrong password")
            return
        }
        alert("Hello someone with the email: " + userToCheck.email + " You are logged in!")
        this.setState({
                loggedIn: true,
                currentUser: userToCheck
        }) 
    }

    logOut(){
        this.setState({
            loggedIn: false,
            currentUser: {email: "", password : ""}
        })
        alert("You have logged out!")
    }

    render() {
        const inlineCSS = "d-flex justify-content-center mt-5"
        if (!this.state.loggedIn){
            return (
                <div class={inlineCSS}>
                    {this.state.showLogin ? 
                    <LoginPage childSwitcher = {this.childSwitcher} 
                            signYouIn={this.signYouIn}/>
                    : 
                    <SignUp childSwitcher = {this.childSwitcher}
                            signYouUp = {this.signYouUp}/>}
                </div>
            )
        }else{
            return  <div class="m-5">
                        <UsersTable allUsersList = {this.state.users}/>
                        <button 
                            onClick={this.logOut}
                            class="btn btn-primary btn-lg">
                            Log out
                        </button>
                    </div>
        } 
    }
}

export default Selector
