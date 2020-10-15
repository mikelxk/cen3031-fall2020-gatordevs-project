import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header";
import SignUp from "./views/SignUp/SignUP";
const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home">
          <Redirect to="/" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
