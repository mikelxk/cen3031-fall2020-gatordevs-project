import React, { useState } from "react";
import { Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import httpUser from "../../httpUser";
import "../Home/Home.css";
function Login(props) {
  const [fields, setFields] = useState({ email: "", password: "" });
  const fieldChange = (c) =>
    setFields({ ...fields, [c.target.name]: c.target.value });
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              size="lg"
              onChange={fieldChange}
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
              onChange={fieldChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={async (c) => {
              c.preventDefault();
              const user = await httpUser.logIn(fields);
              setFields({ email: "", password: "" });
              if (user) {
                props.onLoginSuccess(user);
                props.history.push("/");
              } else {
                alert("username or passoword is wrong!");
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
