import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password : ""             
        }
        this.switchToSignUp = this.switchToSignUp.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    switchToSignUp(){
        this.props.childSwitcher()
    }
    
    handleChange(event){
        switch (event.target.type){
            case "email":
                this.setState({email: event.target.value.toLowerCase()})
                break  
            case "password":
                this.setState({password: event.target.value})        
                break
            default:
                console.log("ohh")          
        }
        
        
    }

    handleSubmit(event){
        this.props.signYouUp(this.state)
        event.preventDefault()
    }

    render() {
        //console.log(this.state)
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Register to wonderPage!
                        <br />
                        Your email: <br />
                        <input type="email" value={this.state.email} onChange={this.handleChange}/>
                        <br />
                        Choose a password: <br />
                        <input type="password" value={this.state.password} onChange={this.handleChange} />
                        <br />
                        <input type="submit" value="Register" />
                    </label>
                </form>
                <form onSubmit={this.switchToSignUp}>
                    <label>
                        Already registered? &nbsp;
                        <input type="submit" value="Log in"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default SignUp
