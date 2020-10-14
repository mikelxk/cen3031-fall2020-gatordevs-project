import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron>
          <a href="/donate">
            <h1 align="left">Donate</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Jumbotron>
        <Jumbotron>
          <a href="/order">
            <h1 align="left">Place order</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Jumbotron>
        <Jumbotron>
          <a href="/profile">
            <h1 align="left">View my Profile</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Jumbotron>
      </header>
    </div>
  );
}

export default Home;
