import React, { useState } from "react";
import httpUser from "../../httpUser";
import { Form, Button } from "react-bootstrap";
export default function SignUp(props) {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const fieldChange = (c) =>
    setFields({ ...fields, [c.target.name]: c.target.value });
  const form = (name) => {
    return (
      <Form.Control
        type={name}
        name={name}
        onChange={fieldChange}
        placeholder={`Enter ${name}`}
        size="lg"
      />
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            {form("name")}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {form("email")}
            <Form.Text className="text-muted">
              <small>We'll never share your email with anyone else.</small>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {form("password")}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={async (c) => {
              c.preventDefault();
              const user = await httpUser.signUp(fields);
              setFields({ name: "", email: "", password: "" });
              if (user) {
                props.onSignUpSuccess(user);
                props.history.push("/");
              } else {
                alert("Sign up failed!");
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
