import React, { Component } from 'react'

export class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password : ""             
        }
        this.switchToLogin = this.switchToLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    switchToLogin(){
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
        this.props.signYouIn(this.state)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Log in to wonderPage!
                        <br />
                        Your email: &nbsp; <input type="email" value={this.state.email} onChange={this.handleChange} />
                        <br />
                        Password: &nbsp; &nbsp; <input type="password" value={this.state.password} onChange={this.handleChange} />
                        <br />
                        <input type="submit" value="Log in" />
                    </label>
                </form>
                <form onSubmit={this.switchToLogin}>
                    <label>
                        Haven't registered yet? &nbsp;
                        <input type="submit" value="Register"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default LoginPage
