import React from "react";
import { NavLink } from "react-router-dom";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './NavBar.css';

function Navbar() {
  return (
    <AppBar position="static">
      <Container sx={{ py: 1 }} maxWidth="lg">
        <List className="nav">
          <ListItem disablePadding>
            <NavLink to="home">
              Home
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to="about">
              About
            </NavLink>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  );
}

export default Navbar;