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
  const [address, setAddress] = useState(props.currentUser.address);
  const [showEmail, setShowEmail] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const handleCloseEmail = () => setShowEmail(false);
  const handleShowEmail = () => setShowEmail(true);
  const handleClosePwd = () => setShowPwd(false);
  const handleShowPwd = () => setShowPwd(true);
  const handleCloseAddress = () => setShowAddress(false);
  const handleShowAddress = () => setShowAddress(true);
  return (
    <div className="App">
      <header className="App-page">
        <Jumbotron>
          <Container className="text-left">
            <h1>My Profile</h1>
            <Row>
              <Col>Email:{email} </Col>
              <Col>
                <Button onClick={handleShowEmail}>
                  Update Email<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Button>
              </Col>
            </Row>
            <Modal
              show={showEmail}
              onHide={handleCloseEmail}
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
                <Button variant="secondary" onClick={handleCloseEmail}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={async (c) => {
                    c.preventDefault();
                    if (field1 === field2) {
                      props.currentUser.email = field1;
                      let success = await httpUser.update(props.currentUser);
                      success
                        ? setEmail(props.currentUser.email)
                        : alert("update email failed");
                      handleCloseEmail();
                    } else {
                      alert("two emails don't match");
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
                <Button onClick={handleShowPwd}>Update Password</Button>
              </Col>
            </Row>
            <Modal
              show={showPwd}
              onHide={handleClosePwd}
              backdrop="static"
              keyboard={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Update Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="New password"
                      onChange={(c) => {
                        setField1(c.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Repeat New password"
                      onChange={(c) => {
                        setField2(c.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosePwd}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={async (c) => {
                    c.preventDefault();
                    if (field1 === field2) {
                      props.currentUser.password = field1;
                      let success = await httpUser.update(props.currentUser);
                      alert(
                        `update password ${success ? `succeed` : `failed`}`
                      );
                      handleClosePwd();
                    } else {
                      alert("two passwords don't match!");
                    }
                  }}
                >
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
            <Row>
              <Col>Address:{address} </Col>
              <Col>
                <Button onClick={handleShowAddress}>
                  Update Address<span>&nbsp;&nbsp;</span>
                </Button>
              </Col>
            </Row>
            <Modal
              show={showAddress}
              onHide={handleCloseAddress}
              backdrop="static"
              keyboard={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Update Address</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>current Address: {address}</h5>
                <Form>
                  <Form.Group controlId="formBasicAddress">
                    <Form.Control
                      type="address"
                      placeholder="New adress"
                      onChange={(c) => {
                        setField1(c.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicAddress">
                    <Form.Control
                      type="address"
                      placeholder="Repeat New address"
                      onChange={(c) => {
                        setField2(c.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddress}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={async (c) => {
                    c.preventDefault();
                    if (field1 === field2) {
                      props.currentUser.address = field1;
                      let success = await httpUser.update(props.currentUser);
                      success
                        ? setAddress(props.currentUser.address)
                        : alert("update address failed");
                      handleCloseAddress();
                    } else {
                      alert("two adresses don't match");
                    }
                  }}
                >
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
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
