import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home">
          <Redirect to="/" />
        </Route>
        <Route path = "/login" component = {Login}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default App;
