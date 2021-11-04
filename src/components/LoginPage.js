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
        const customCSS = {
            wrapper: "border border-secondary p-2 rounded bg-light",
            form: "",
            inputs: "form-control",
            texts: "form-text mt-2 mb-2",
            button: "btn btn-primary"
        }
        const Line = () => (<hr class="text-secondary"/>)
        return (
            <div class={customCSS.wrapper}>
                <h1>Login</h1>
                <Line />                
                <form onSubmit={this.handleSubmit} 
                    class={customCSS.form}>
                    <label class={customCSS.texts}>
                        Log in to wonderPage!
                        <br />
                        Your email: 
                        <input 
                            type="email" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            class={customCSS.inputs}/>
                        <br />
                        Password: 
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            class={customCSS.inputs}/>
                        <br />
                        <input 
                            type="submit" 
                            value="Log in" 
                            class={customCSS.button}/>
                    </label>
                    <Line /> 
                </form>
                <form onSubmit={this.switchToLogin}>
                    <label >
                        <div class={customCSS.texts}>Haven't registered yet? </div>
                        <input 
                            type="submit" 
                            value="Register" 
                            class={customCSS.button}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default LoginPage
