import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { MuiProfile } from "./MuiProfile";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
import ProfileCoverInfo from "./ProfileCoverInfo";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
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
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  AppBar,
  Toolbar,
  Slide
} from "@material-ui/core";

const UserNav = (props) => {
  const { classes, children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });
  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <ProfileCoverInfo />
        <AppBar position={!trigger ? "static" : "fixed"} color="primary">
          <Toolbar className={classes.ScuiToolbar}>
            <Slide in={trigger}>
              <div>Hello</div>
            </Slide>
            <Box display="flex" bgcolor="#112d4e" height={50}>
              {[
                "about",
                "home",
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
                          {m}
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    ...MuiProfile(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(UserNav);

/* <Grid container component="main">
<CssBaseline />
<Grid item xs={12}>
  <ProfileCoverInfo />
  <List>
    <ListSubheader>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.ScuiToolbar}>
          <Slide in={trigger}>
            <div>Hello</div>
          </Slide>
          <Box display="flex" bgcolor="#112d4e" height={50}>
            {[
              "about",
              "home",
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
                        {m}
                      </Typography>
                    </Button>
                  </Link>
                </Box>
              </>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ListSubheader>
    {children}
  </List>
</Grid>
</Grid> */
