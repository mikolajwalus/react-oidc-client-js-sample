import * as React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const TopBar = ({ handleLogin, handleLogout }) => {
  const user = useSelector((state) => state.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ul>
            <li>
              <Button color="inherit">
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button color="inherit">
                <Link to="/private">private</Link>
              </Button>
            </li>
            <li>
              <Button color="inherit">
                <Link to="/public">public</Link>
              </Button>
            </li>
          </ul>
          <Button onClick={user ? handleLogout : handleLogin} color="inherit">
            {user ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
