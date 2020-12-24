import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
import { MuiProfile } from "./MuiProfile";
import {
  Typography,
  Paper,
  Grid,
  Box,
  CssBaseline,
  IconButton
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// soical
import TelegramIcon from "@material-ui/icons/Telegram";
import InfoIcon from "@material-ui/icons/Info";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LanguageIcon from "@material-ui/icons/Language";

const Info = (props) => {
  const { classes } = props;

  return (
    <Grid item xs={4} style={{ marginTop: 60 }}>
      <CssBaseline />
      <Box border={1} p={3}>
        <Box my={1}>
          <Typography className={classes.scui_profile_info_name_font}>
            Sizar Corpse
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Box flexGrow={1} display="flex">
            <Typography variant="h4">I am </Typography>
          </Box>
          <Box flexGrow={1} display="flex">
            {["Atist", "Design & Interface", "Photography"].map((m, i) => (
              <Box key={i} mx={1}>
                <Typography variant="h4">{m} </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex" my={2}>
          <Box flexGrow={1}>
            <Typography variant="h4">I lived in </Typography>
          </Box>
          <LocationOnIcon
            style={{ height: 15, width: 15, margin: "auto 8px auto 0px" }}
          />
          <Typography variant="h4">Jessore, Bangladesh</Typography>
        </Box>
        <Box display="flex" alignItems="center" my={2}>
          <Box flexGrow={1}>
            <Typography variant="h4">Follow me</Typography>
          </Box>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </Box>
        <Box my={2}>
          <Typography variant="h4">www.sizarcorpse.com</Typography>
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
)(Info);
