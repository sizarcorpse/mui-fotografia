import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
import { MuiProfile } from "./MuiProfile";
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
  FormControlLabel,
  Avatar
} from "@material-ui/core";

const Profile = (props) => {
  const { classes } = props;

  return (
    <Grid item xs={12}>
      <CssBaseline />
      <Box
        height={340}
        className={classes.ScuiCoverBG}
        display="flex"
        alignItems="center"
      >
        <Box height={120} display="flex" ml={3}>
          <Box marginTop="auto">
            <Avatar className={classes.ScuiProfilePhoto}> </Avatar>
          </Box>
          <Box mx={3} my="auto">
            <Typography variant="h1" color="secondary">
              sizarcorpse
            </Typography>
            <Typography variant="h4" color="secondary">
              1524 Followers | 65236 Following | 3695 Profile Views | 36541
              Album Views | 3654 Album Loves
            </Typography>
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
)(Profile);
