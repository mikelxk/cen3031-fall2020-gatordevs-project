import React, { useState } from "react";
import httpUser from "../../httpUser";
import { Form, Button } from "react-bootstrap";
export default function SignUp(props) {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              onChange={(c) => setFields({ ...fields, name: c.target.value })}
              placeholder="name"
              size="lg"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(c) => setFields({ ...fields, email: c.target.value })}
              size="lg"
            />
            <Form.Text className="text-muted">
              <small>We'll never share your email with anyone else.</small>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              size="lg"
              onChange={(c) =>
                setFields({ ...fields, password: c.target.value })
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              const user = httpUser.signUp(fields);
              setFields({ name: "", email: "", password: "" });
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
