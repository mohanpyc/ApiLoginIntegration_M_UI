import { Grid } from "@material-ui/core";
import React from "react";
import LoginCard from "./LoginCard";
function LogIn() {
  return (
    <Grid container>
      <Grid item lg={12} style={{ height: "150px" }}></Grid>
      <Grid item lg={4}></Grid>
      <Grid item lg={4} style={{paddingLeft:"50px"}}>
          <LoginCard/>
      </Grid>
      <Grid item lg={4}>  
        </Grid>
    </Grid>
  );
}

export default LogIn;
