import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ThemeDistributor } from "./ThemeDistributor";
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
  Menu,
  MenuItem,
  Avatar
} from "@material-ui/core";

const NavMenuProfile = (props) => {
  const { classes, profileMenuOpen, handleProfileMenuClose } = props;

  return (
    <Menu
      id="simple-menu"
      anchorEl={profileMenuOpen}
      keepMounted
      open={Boolean(profileMenuOpen)}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src="" alt="" />
            </Avatar>
          }
          title={<Typography variant="h4">sizar corpse</Typography>}
          subheader={
            <Typography variant="h4">sizarcorpse@gmail.com</Typography>
          }
        />
      </MenuItem>
      <Divider className={classes.ScuiDividerT3} />
      <MenuItem onClick={handleProfileMenuClose}>
        <Typography variant="h4">Profile</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <Typography variant="h4">Portfolio</Typography>
      </MenuItem>
      <Divider className={classes.ScuiDividerT3} />
      <MenuItem onClick={handleProfileMenuClose}>
        <Typography variant="h4">Profile Setting</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <Typography variant="h4">Account Setting</Typography>
      </MenuItem>
      <Divider className={classes.ScuiDividerT3} />
      <MenuItem onClick={handleProfileMenuClose}>
        <Typography variant="h4">Get Help & Give Feedback</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <Typography variant="h4">Logout</Typography>
      </MenuItem>
    </Menu>
  );
};

export default withStyles(ThemeDistributor)(NavMenuProfile);
