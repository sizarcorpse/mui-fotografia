import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";

import NavMenuProfile from "./NavMenuProfile";

import { withStyles } from "@material-ui/core/styles";
import { MuiNav } from "./NavMui";
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
  FormControlLabel,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Slide,
  useScrollTrigger
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Nav = (props) => {
  const { classes } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

  // #action : menu profile
  const [profileMenuOpen, setProfileMenuOpen] = useState(null);
  const handleProfileMenuOpen = (event) => {
    setProfileMenuOpen(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileMenuOpen(null);
  };

  return (
    <Box>
      <CssBaseline />
      <Slide in={!trigger}>
        <AppBar position="fixed" className={classes.ScuiAppBar} color="primary">
          <Toolbar className={classes.ScuiToolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Box mr={2}>
              <Typography variant="h6" className={classes.ScuiFotografiaLogo}>
                Fotografia
              </Typography>
            </Box>
            <Box className={classes.search} flexGrow="1">
              <Box className={classes.searchIcon}>
                <SearchIcon className={classes.searchIconSvg} />
              </Box>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
            <Box display="flex">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box mx={3}>
              <Avatar
                className={classes.ScuiLogedgUserAvater}
                onClick={handleProfileMenuOpen}
                onClose={handleProfileMenuClose}
              ></Avatar>

              <NavMenuProfile
                profileMenuOpen={profileMenuOpen}
                handleProfileMenuClose={handleProfileMenuClose}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
    </Box>
  );
};

export default withStyles(
  (theme) => ({
    ...MuiNav(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(Nav);
