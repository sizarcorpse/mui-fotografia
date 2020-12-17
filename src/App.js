import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";
import Nav from "./Nav/Nav";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" component={Nav} />
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
