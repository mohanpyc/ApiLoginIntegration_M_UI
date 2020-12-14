import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useStyles } from "./ComponentStyles";
import logo from "../Images/logo.png";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Modules/actions/userActions";

function LoginCard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();

  const [username, setUsername] = useState(""); // Email Value

  const handleEmail = (event) => {
    // Funcion To Set Email Value
    setUsername(event.target.value);
  };

  const [emailError, setEmailError] = useState(false); // Email Error

  const [password, setPassword] = useState(""); // Password Value

  const handlePassword = (event) => {
    // Funcion To Set Password Value
    setPassword(event.target.value);
  };

  const [passwordError, setPasswordError] = useState(false); // Password Error

  const [checked, setChecked] = useState(false); //Checked Values

  const handleCheck = (event) => {
    // Function to toggle checked
    setChecked(event.target.checked);
  };

  const [visible, setVisible] = useState(false); // eye Icon in password

  const handleVisible = () => {
    // Function to toggle EyeIcon
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailRegEx = username.length > 3;
    let passwordRegEx = /.{5}/.test(password);
    console.log("123", username, password, emailRegEx, passwordRegEx);
    setEmailError(!emailRegEx);
    setPasswordError(!passwordRegEx);
    if (emailRegEx && passwordRegEx) {
      dispatch(login(username, password));
    }
  };
  const navigation = useNavigate();
  const userInfo = useSelector((state) => state);
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/Drawer/Dashboard";

  useEffect(() => {
    console.log(userInfo.userInfo.userInfo, "userInfo");
    if (userInfo.userInfo.userInfo && userInfo.userInfo.userInfo.data && userInfo.userInfo.userInfo.data.jwt_token) {
      console.log("sample")
      navigation(redirect);
    }
  }, [navigation, userInfo, redirect]);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={logo} title="login" />

      <CardContent>
        <form className={classes.formControl}>
          <Grid container item alignitem="flex-end">
            <Grid item>
              <EmailIcon className={classes.icons} fontSize="small" />
            </Grid>
            <Grid item>
              <TextField
                error={emailError}
                className={classes.typoGraphy}
                placeholder="Email"
                size="small"
                label="Email"
                fullWidth
                value={username}
                onChange={handleEmail}
              />
            </Grid>
          </Grid>
          <Grid container item alignitem="flex-end">
            <Grid item>
              <LockIcon className={classes.icons} fontSize="small" />
            </Grid>
            <Grid item lg={9}>
              <TextField
                className={classes.typoGraphy}
                error={passwordError}
                placeholder="Password"
                size="small"
                label="Password"
                fullWidth
                type={visible ? "text" : "password"}
                value={password}
                onChange={handlePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      {visible ? (
                        <Visibility onClick={handleVisible}></Visibility>
                      ) : (
                        <VisibilityOff onClick={handleVisible}></VisibilityOff>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item lg={6}>
              {" "}
              {/*Checkbox Control */}
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleCheck}
                      name="checked"
                      size="small"
                    />
                  }
                  label="Secure Login"
                />
              </FormGroup>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="caption">
                <Link className={classes.link}>Forgot Password</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={4}></Grid>
            <Grid item lg={3}>
        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Grid>
            <Grid item lg={4}></Grid>
          </Grid>
        </form>
      </CardContent>
      <Typography variant="subtitle2">
        Copyright © Spacecode. 2020 All rights reserved
      </Typography>
    </Card>
  );
}

export default LoginCard;
