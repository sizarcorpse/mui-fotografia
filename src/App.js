import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";
import Nav from "./Nav/Nav";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Profile from "./Profile/Profile";
import Info from "./Profile/Info";
import About from "./Routes/About";
import Home from "./Routes/Home";
import UserNav from "./Profile/UserNav";
import SkeletonRoot from "./Skeleton";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" component={Nav} />
          {/* <Route path="/" component={UserNav} /> */}
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/u/:username" exact component={Profile} />

            <Route path="/home/info" exact component={Info} />
            <Route path="/home" exact component={Profile} />
            <Route path="/album" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/sk" exact component={SkeletonRoot} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
