import React, { useState } from "react";
import { Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
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
            Login
          </Button>
        </Form>
        <hr color="white"></hr>
        <h3>New Users</h3>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button href="/donor">I'm a Donor</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button href="/beneficiary">I'm a Beneficiary</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button href="/worker">I work at a Foodbank</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </header>
    </div>
  );
}
export default Login;
