import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";
import Nav from "./Nav/Nav";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Profile from "./Profile/Profile";
import About from "./Routes/About";
import Home from "./Routes/Home";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" component={Nav} />
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
            {/* <Route path="/u/:username" exact component={Profile} /> */}
            <Profile>
              <Route path="/album" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Profile>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
