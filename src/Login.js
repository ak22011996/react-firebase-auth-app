import React , { Component } from "react";
import fire from "./config/fire";
import login from './login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            alert('Login Succesfully')
        }).catch((err) => {
            alert('Enter Correct Details')
        })
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            alert('Signup Succesfully')
        }).catch((err) => {
            alert('Enter Correct Details')

        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return ( < div >
            < div class = "login-box" >
            < h2 > Login < /h2> < form >
            < div class = "user-box" >
            < input type = "email"
            id = "email"
            name = "email"
            placeholder = "enter email address"
            onChange = {
                this.handleChange
            }
            value = {
                this.state.email
            }
            /> < label > Username < /label> < /div>

            < div class = "user-box" >
            < input name = "password"
            type = "password"
            onChange = {
                this.handleChange
            }
            id = "password"
            placeholder = "enter password"
            value = {
                this.state.password
            }
            /> < label > Password < /label> < /div> < button onClick = {
                this.login
            } > Login < /button> < button onClick = {
                this.signup
            } > Signup < /button> < /form> < /div>


            < /div>
        )
    }
}
export default Login;