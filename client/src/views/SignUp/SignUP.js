import React, { useState } from "react";
import httpUser from "../../httpUser";
import { Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const getUser = () => {
    return { email: { email }, pwd: { pwd } };
  };
  //TO DO: resolve form
  return (
    <div className="App">
      <header className="App-header">
        <Form>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="name"
              size="lg"
              onChange={(c) => {
                setName(c.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              size="lg"
              onChange={(c) => {
                setEmail(c.target.value);
              }}
            />
            <Form.Text className="text-muted">
              <small>We'll never share your email with anyone else.</small>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              size="lg"
              onChange={(c) => {
                setPwd(c.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              const user = httpUser.SignUp(getUser());
              if (user) {
                props.onSignUpSuccess(user);
                props.history.push("/");
              }
            }}
          >
            Sign Up
          </Button>
        </Form>
        <hr color="white"></hr>
      </header>
    </div>
  );
}
