import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Home/Home.css";
function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  //TO DO: resolve form
  return (
    <div className="App">
      <header className="App-header">
        <Form>
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
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(c) => {
              if (!c.isDefaultPrevented) {
                //To do: pass info to backend
                console.log([email, pwd]);
              }
            }}
          >
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}
export default Login;
