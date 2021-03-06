import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Redirect,useHistory } from 'react-router-dom';
import {connect} from 'react-redux'

function Login(props) {
    let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
const handleLogin=()=>{
    props.dispatch({type:'LOGIN',payload:{email}})
    if(email!=""&&password!=""){
        return  history.push("/account");
    }
}

  return (
    <div className="Login">
        <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br/>
        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default connect()(Login)