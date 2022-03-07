import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../JS/actions/authActions";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Button
            component={Link}
            to={{ pathname: "/productslist" }}
            color="inherit"
          >
            Products
          </Button>

          <Button
            component={Link}
            to={{ pathname: "/profile" }}
            color="inherit"
          >
            Profile
          </Button>

          <Button onClick={() => dispatch(logout())} color="inherit">
            Logout
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
