import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
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

const UserNav = (props) => {
  const { classes } = props;

  return (
    <Grid item xs={12}>
      <CssBaseline />
      <Box display="flex" bgcolor="#112d4e" height={50} px={9}>
        {[
          "about",
          "/",
          "album",
          "loved",
          "favorite",
          "collection",
          "draft"
        ].map((m) => (
          <>
            <Box
              mr={5}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Link to={`/${m}`}>
                <Button>
                  <Typography variant="button" color="secondary">
                    {" "}
                    {m}
                  </Typography>
                </Button>
              </Link>
            </Box>
          </>
        ))}
      </Box>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(UserNav);
