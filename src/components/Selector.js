import React, { Component } from 'react'
import Content from './Content'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

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
        this.userChecker = this.userChecker.bind(this)
        this.signYouUp = this.signYouUp.bind(this)
        this.signYouIn = this.signYouIn.bind(this)
        this.logOut = this.logOut.bind(this)
        
    }

    childSwitcher(){
        const switchLogin = !this.state.showLogin
        
        this.setState({
            showLogin : switchLogin
        })
    }

    

    userChecker(personToCheck, passNeeded){
        const answer = this.state.users.filter(checker)
        function checker(user){
            if(user.email === personToCheck.email && passNeeded && user.password === personToCheck.password){
                return user
            }else if(user.email === personToCheck.email && !passNeeded){
                return [true]
            } 
        }
        return answer[0] ? answer[0] : false
    }

    signYouUp(userToSignUp){
        const haveUser = this.userChecker(userToSignUp, false) ? true : false
        console.log(haveUser)
        if(!haveUser){
            let UpdatedUsers = [...this.state.users, userToSignUp]
            this.setState({showLogin: true,
                users : UpdatedUsers})
            alert("Hello! You have been registered with: " + userToSignUp.email + "You can log in now!")

        }
        
    }

    signYouIn(userToCheck){
        const haveUser = this.userChecker(userToCheck, true) ? true : false
        console.log(haveUser)
        if(haveUser){
            alert("Hello someone with the email: " + userToCheck.email + " You are logged in!")
            this.setState({
                loggedIn: true,
                currentUser: userToCheck
            })
            console.log(this.state)
        }else{
            alert("Something went wrong!")
        }  
        
        
    }

    logOut(){
        this.setState({
            loggedIn: false,
            currentUser: {email: "", password : ""}
        })
        alert("You have logged out!")
    }
    

    render() {
        console.log(this.state)
        if (!this.state.loggedIn){
            return (
                <div>
                    {this.state.showLogin ? 
                    <LoginPage childSwitcher = {this.childSwitcher} signYouIn={this.signYouIn}/>
                    : 
                    <SignUp childSwitcher = {this.childSwitcher} signYouUp = {this.signYouUp}/>}
                </div>
            )
        }else{
            return <Content allUsersList = {this.state.users} logOut = {this.logOut}/>
        } 
    }
}

export default Selector
