import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
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

        let b = {"username":username, "password":password}

        axios
            .post("http://localhost:8080/login", b)
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
        const loginBox = {
            border : "3px solid #ddd",
            backgroundColor : "#90EE90",
            padding : "50px"
        }

        return(
            <div style={loginBox}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            name="username"
                            type="username" 
                            placeholder="Enter Username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                        />
                    </Form.Group>
                    <Button variant="info" type="submit" id="loginButton" block>Submit</Button> 
                </Form>
                    

            </div>
        )
    }
}

export default LoginSystem;