import React, { Component } from 'react'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

export class Selector extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showLogin : true,
             users: [
                 {email: "testuser@test.com", password : "test"}
             ]
        }

        this.childSwitcher = this.childSwitcher.bind(this)
        this.userChecker = this.userChecker.bind(this)
        this.signYouUp = this.signYouUp.bind(this)
        this.signYouIn = this.signYouIn.bind(this)
        
    }

    childSwitcher(){
        const switchLogin = !this.state.showLogin
        //teszt a wehaveuserre, csak mailcímet néz
        //console.log(this.userChecker({email: "testuser@test.com", password : "test"}))
        //console.log(this.userChecker({email: "testuser@test.com", password : "te"}))
        //console.log(this.userChecker({email: "testu@test.com", password : "test"}))
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
        haveUser ? 
        alert("Hello someone with the email: " + userToCheck.email + " You are logged in!")
        :
        alert("Something went wrong!")
    }
    

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.showLogin ? 
                <LoginPage childSwitcher = {this.childSwitcher} signYouIn={this.signYouIn}/>
                : 
                <SignUp childSwitcher = {this.childSwitcher} signYouUp = {this.signYouUp}/>}
            </div>
        )
    }
}

export default Selector
