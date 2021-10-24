import React, { Component } from 'react'
import MessageDisplayer from './MessageDisplayer'

export class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            finalData: {
                email: "",
                password: ""
            },
            tempData: {
                email: "",
                pass1: "",
                pass2: "",
                password: "",
                agreed: false,
                displayMessage: false
            }
        }
        this.switchToSignUp = this.switchToSignUp.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.passwordChecker = this.passwordChecker.bind(this)
        this.messageDisplayer = this.messageDisplayer.bind(this)
    }

    switchToSignUp() {
        this.props.childSwitcher()
    }

    handleChange(event) {
        let copiedTempState = { ...this.state }

        switch (event.target.name) {
            case "email":
                copiedTempState.tempData.email = event.target.value
                break
            case "pass1":
                copiedTempState.tempData.pass1 = event.target.value
                break
            case "pass2":
                copiedTempState.tempData.pass2 = event.target.value
                break
            case "agreed":
                copiedTempState.tempData.agreed = !copiedTempState.tempData.agreed    
            default:
                console.log("ohh switch")
        }

        this.setState(copiedTempState)
        console.log(this.state)
    }

    handleSubmit(event) {
        let copiedTempState = { ...this.state }
        if(!copiedTempState.tempData.agreed){
            this.messageDisplayer("You haven't agreed to whatever!")
        }
        if(this.passwordChecker(copiedTempState.tempData.pass1, copiedTempState.tempData.pass2)
            &&
            copiedTempState.tempData.agreed){
                copiedTempState.finalData.password = copiedTempState.tempData.pass1
                copiedTempState.finalData.email = copiedTempState.tempData.email
                this.setState(copiedTempState)
                this.props.signYouUp(this.state.finalData)
        }
        
        console.log(this.state)        
        event.preventDefault()
    }

    passwordChecker(pass1, pass2) {
        const regex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
        if(regex.test(pass1)){
            if(pass1 === pass2){
                console.log("good passwords")
                return true
            }else{
                this.messageDisplayer("your passwords don't match!")
                return false
            }
                        
        }else{
            this.messageDisplayer("Your password is not strong enough")
            return false
        }
        
        
    }

    messageDisplayer(message) {
            let copiedTempState = { ...this.state }
            copiedTempState.tempData.displayMessage = message
            this.setState(copiedTempState)
            
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Register to wonderPage!
                        <br />
                        Your email: <br />
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange} />
                        <br />
                        Choose a password: <br />
                        <input
                            type="password"
                            name="pass1"
                            onChange={this.handleChange} />
                        <br />
                        Write it again: <br />
                        <input
                            type="password"
                            name="pass2"
                            onChange={this.handleChange} />
                        <br />
                        Do you agree to whatever?
                        <input
                            type="checkbox"
                            name="agreed"
                            onChange={this.handleChange} />
                        <br />
                        {this.state.tempData.displayMessage ? 
                        <MessageDisplayer message = {this.state.tempData.displayMessage} />
                        : ""}
                        <input
                            type="submit"
                            value="Register" />
                    </label>
                </form>
                
                <form onSubmit={this.switchToSignUp}>
                    <label>
                        Already registered? &nbsp;
                        <input type="submit" value="Log in" />
                    </label>
                </form>
                
            </div>
        )
    }
}

export default SignUp
