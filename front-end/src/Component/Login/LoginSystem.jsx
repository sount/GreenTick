import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TrafficLight from 'react-trafficlight';

// Create a basic authentication with axios
const LoginSystem = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (event) => {
        if (event.target.name === "username")
            setUsername(event.target.value)
        else
            setPassword(event.target.value)
    }

    const handleSubmit = (event) => {

        let b = {"username":username, "password":password}
        axios
            .post("http://localhost:8080/login", b)
            .then(response => {
                console.log("res from login", response);
                if (JSON.stringify(response.data) === "{}") {
                    alert("Login or Password is not correct. Please try again.")

                } else {
                    history.push("/body")
                }
            }
            )
            .catch(err => {
                console.log("There is a login Problem:", err);


            });

            event.preventDefault();
    }

    let history = useHistory()

    const loginBox = {
        border : "3px solid #ddd",
        backgroundColor : "#90EE90",
        padding : "100px",
        position : "absolute",
        left : "50%",
        top : "50%",
        transform: 'translate(-50%, -50%)'
    }

    const [color, setColor] = useState({redOn : false, greenOn : false})

    useEffect(() => {
        let b = {"username":"dummy", "password":"dummy"}

        const timer = setTimeout( () => {
            console.log("Timeout is running")
        }, 10000)

        axios
            .post("http://localhost:8080/login", b)
            .then(response => {
                console.log("Check connection", response);

                if (JSON.stringify(response.data) === "{}") {
                    setColor({redOn : false, greenOn : true})
                    alert("Connection was successfull.")
                }
            }
            )
            .catch(err => {
                console.log("Connection problems", err);
                setColor({redOn : true, greenOn : false})
                alert("Connection was not successfull.")
            })
        return () => clearTimeout(timer)
    }, [color])
    
    return(
        <Container style={loginBox}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        name="username"
                        type="username" 
                        placeholder="Enter Username" 
                        value={username} 
                        onChange={handleChange} 
                    />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        name="password"
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Button variant="info" type="submit" id="loginButton" block>Submit</Button> 
            </Form>
            <div>
                <h2>Database Connection</h2>
                <TrafficLight RedOn={color.redOn} GreenOn={color.greenOn}/>
            </div>
            
        </Container>
    )
    
}

export default LoginSystem;