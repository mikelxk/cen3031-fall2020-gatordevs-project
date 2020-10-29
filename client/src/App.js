import React, { useState } from "react";
import httpUser from "./httpUser.js";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import LogOut from "./views/LogOut/LogOut";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header";
import SignUp from "./views/SignUp/SignUP";
import Dashboard from "./views/Dashboard/Dashboard";
const App = () => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());

  const onLoginSuccess = () => {
    setCurrentUser(httpUser.getCurrentUser());
  };

  const logOut = () => {
    httpUser.logOut();
    setCurrentUser(null);
  };
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route
          path="/login"
          render={(props) => {
            return <Login {...props} onLoginSuccess={onLoginSuccess} />;
          }}
        />
        <Route
          path="/signup"
          render={(props) => {
            return <SignUp {...props} onSignUpSuccess={onLoginSuccess} />;
          }}
        />
        <Route
          path="/logout"
          render={(props) => {
            return <LogOut onLogOut={logOut} />;
          }}
        />
        <Route
          path="/dashboard"
          render={() => {
            return currentUser ? (
              <Dashboard currentUser={currentUser} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />

        <Route exact path="/Home" render={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route render={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
