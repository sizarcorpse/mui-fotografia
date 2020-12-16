import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
  FormControlLabel
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FaceIcon from "@material-ui/icons/Face";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const Signup = (props) => {
  const { classes } = props;

  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };

  const validationSchema = {};
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  return (
    <Grid
      container
      component="main"
      className={clsx(classes.ScuiMainContainer, classes.ScuiBackground)}
    >
      <CssBaseline />
      <Grid item xs={false} xl={4} lg={3} md={2} sm={1}>
        <Box display="flex" justifyContent="center" mt={3}>
          <Typography color="primary" className={classes.ScuiFontSignup}>
            Fotografia
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} xl={4} lg={6} md={8} sm={10}>
        {/* // #action : */}
        <Box
          className={clsx(classes.ScuiFlexCenter, classes.ScuiBoxFullHeight)}
        >
          <Paper className={classes.ScuiPaperSmall}>
            <Card className={classes.ScuiCardSmall}>
              <Box className={classes.ScuiFlexCenter}>
                <CardHeader
                  title={
                    <Typography
                      color="primary"
                      className={classes.ScuiFontSignup}
                    >
                      Fotografia
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h4" color="secondary">
                      Don't have an Account?
                      <Link
                        to={"/s"}
                        className={classes.ScuiLinkUnderLineRemove}
                      >
                        Sign in
                      </Link>
                    </Typography>
                  }
                />
              </Box>
              {/* // #action : */}
              <CardContent>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<AlternateEmailIcon color="primary" />}
                >
                  <Typography variant="button" color="primary">
                    Sign in with google
                  </Typography>
                </Button>
                <Divider className={classes.ScuiDividerT24} />
              </CardContent>
              {/* // #action : */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                // onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur
                  } = props;
                  return (
                    <CardContent>
                      <Form>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <FormControl
                              error={touched.email && Boolean(errors.email)}
                              fullWidth
                            >
                              <TextField
                                InputProps={{
                                  startAdornment:
                                    touched.email && Boolean(errors.email) ? (
                                      <InputAdornment position="start">
                                        <EmailIcon style={{ color: "red" }} />
                                      </InputAdornment>
                                    ) : (
                                      <InputAdornment position="start">
                                        <EmailIcon />
                                      </InputAdornment>
                                    )
                                }}
                                required
                                autoComplete="email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email Address"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl
                              error={
                                touched.password && Boolean(errors.password)
                              }
                              fullWidth
                            >
                              <TextField
                                InputProps={{
                                  startAdornment:
                                    touched.password &&
                                    Boolean(errors.password) ? (
                                      <InputAdornment position="start">
                                        <LockIcon style={{ color: "red" }} />
                                      </InputAdornment>
                                    ) : (
                                      <InputAdornment position="start">
                                        <LockIcon />
                                      </InputAdornment>
                                    )
                                }}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </FormControl>
                          </Grid>

                          {/* // #action : */}

                          <Grid item xs={12}>
                            <Divider className={classes.ScuiDividerTB3} />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={handleChecked}
                                  name="checkedB"
                                  style={{
                                    color: "#a1eafb"
                                  }}
                                  size="small"
                                />
                              }
                              label={
                                <Typography variant="h4" color="secondary">
                                  Keep me logged in
                                </Typography>
                              }
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                        >
                          <Typography variant="button" color="primary">
                            Log in
                          </Typography>
                        </Button>
                      </Form>
                      <Divider className={classes.ScuiDividerTB3} />
                      <Typography variant="h4" color="primary">
                        <Link
                          to={"/resetpassword"}
                          className={classes.ScuiLinkUnderLineRemove}
                        >
                          Forgot your username or password?
                        </Link>
                      </Typography>
                    </CardContent>
                  );
                }}
              </Formik>
            </Card>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={false} xl={4} lg={3} md={2} sm={1} />
    </Grid>
  );
};

export default withStyles(ThemeDistributor)(Signup);
