import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

export default function GuestNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Button component={Link} to={{ pathname: "/signin" }} color="inherit">
            SignIn
          </Button>

          <Button component={Link} to={{ pathname: "/signup" }} color="inherit">
            SingUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
