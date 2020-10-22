import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';

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

    handleClick() {
        console.log("Tester")
    }

    render() {
        const loginBox = {
            border : "3px solid #ddd",
            backgroundColor : "#90EE90",
            padding : "50px"
        }

        return(
            <div style={loginBox}>
                <Form>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="username" 
                            placeholder="Enter Username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            required
                        />
                    </Form.Group>

                    <Form.Group controlID="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required
                        />
                    </Form.Group>
                </Form>
                    <button onClick={() => this.handleClick()} variant="btn btn-success" type="submit" id="loginButton">Button</button> 

            </div>
        )
    }
}

export default LoginSystem;