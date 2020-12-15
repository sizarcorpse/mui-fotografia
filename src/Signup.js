import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ThemeDistributor } from "./ThemeDistributor";
import { Typography } from "@material-ui/core";

const Signup = (props) => {
  const { classes } = props;

  return (
    <>
      <Typography variant="h2" color="primary">
        Hello
      </Typography>
    </>
  );
};

export default withStyles(ThemeDistributor)(Signup);
