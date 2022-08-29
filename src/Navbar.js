import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './NavBar.css';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <List className="nav">
          <ListItem disablePadding>
            <NavLink to="/Resident-Evil-Timeline/">
              Home
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to="/Resident-Evil-Timeline/about/">
              About
            </NavLink>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;