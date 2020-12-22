import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
import { MuiProfile } from "./MuiProfile";

//component

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

const Statistics = (props) => {
  const { classes, children } = props;

  return (
    <Grid container component="main">
      <CssBaseline />
      <Box display="flex">
        <Box height={140} width={150} border={1} m={1}>
          <Box
            display="flex"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            height={50}
            mx={1}
            p={1}
          >
            <Typography variant="h4">Profile total view</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            height={60}
            mx={1}
            p={1}
          >
            <Typography variant="h1">5260</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    ...MuiProfile(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(Statistics);
