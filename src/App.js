import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme";
import Signup from "./Signup";
import Signin from "./Signin";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/s" exact component={Signup} />
            <Route path="/sin" exact component={Signin} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
