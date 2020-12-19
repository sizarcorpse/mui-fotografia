import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
import { MuiProfile } from "./MuiProfile";

//component

import ProfileCoverInfo from "./ProfileCoverInfo";
import UserNav from "./UserNav";

import {
  Typography,
  Card,
  CardHeader,
  Paper,
  Grid,
  Box,
  CardContent,
  Button,
  Divider,
  FormControl,
  TextField,
  InputAdornment,
  CssBaseline,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const Profile = (props) => {
  const { classes, children } = props;

  return (
    <Grid container component="main">
      <CssBaseline />
      Profile
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    ...MuiProfile(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(Profile);
