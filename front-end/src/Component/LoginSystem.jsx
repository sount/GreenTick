import React, { Component } from 'react';
import axios from 'axios';

// Create a basic authentication with axios
class LoginSystem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username : "",
            password : ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        const { username, password } = this.state;

        axios
            .post("http://localhost:3000/login", {
                user : {
                    username : username,
                    password : password
                }
            },
        
            { withCredentials : true}
            )
            .then(response => {
                console.log("res from login", response);
            }
            )
            .catch(err => {
                console.log("There is a login Problem:", err);
            });

            event.preventDefault();
    }

    render() {
        return(
            <div>
                <form id="login" onSubmit={this.handleSubmit}>
                    <input 
                        type="username" 
                        name="username" 
                        placerholder="Username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        required
                    />

                    <input 
                        type="password"
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required
                    />
                    
                    <button type="submit" id="loginButton">Button</button>
                </form>
            </div>
        )
    }
}

export default LoginSystem;