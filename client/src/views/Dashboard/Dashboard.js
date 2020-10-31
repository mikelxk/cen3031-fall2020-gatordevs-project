import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Button,
  Col,
  Row,
  Modal,
  Form,
} from "react-bootstrap";
import "../../httpUser";
import httpUser from "../../httpUser";
const Dashboard = (props) => {
  const [email, setEmail] = useState(props.currentUser.email);
  const [showEmail, setShowEmail] = useState(false);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const handleClose = () => setShowEmail(false);
  const handleShow = () => setShowEmail(true);
  return (
    <div className="App">
      <header className="App-page">
        <Jumbotron>
          <Container className="text-left">
            <h1>My Profile</h1>
            <Row>
              <Col>Email:{email} </Col>
              <Col>
                <Button onClick={handleShow}>
                  Update Email<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Button>
              </Col>
            </Row>
            <Modal
              show={showEmail}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Update Email</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>current Email: {email}</h5>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="New email"
                      onChange={(c) => {
                        setField1(c.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="email"
                      placeholder="Repeat New email"
                      onChange={(c) => {
                        setField2(c.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={async (c) => {
                    if (field1 === field2) {
                      props.currentUser.email = field1;
                      let success = await httpUser.update(props.currentUser);
                      if (success) {
                        setEmail(props.currentUser.email);
                      } else {
                        alert("update email failed");
                      }
                      handleClose();
                    }
                  }}
                >
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
            <Row>
              <Col>Password:******** </Col>
              <Col>
                <Button>Update Password</Button>
              </Col>
            </Row>
            <Row>
              <Col>Address:{props.currentUser.address} </Col>
              <Col>
                <Button>
                  Update Address<span>&nbsp;&nbsp;</span>
                </Button>
              </Col>
            </Row>
            <p></p>
            <p></p>
            <h1>My History</h1>
            <p></p>
            <p></p>
            <h1>My Reports</h1>
          </Container>
        </Jumbotron>
      </header>
    </div>
  );
};

export default Dashboard;
