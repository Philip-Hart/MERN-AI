import React from "react";
import clsx from "clsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {FiMenu} from 'react-icons/fi';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import useStyles from "../styles/styles.js";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
const drawerWidth = 240;
// Here, we display our Navbar
const navItems = ['Home', 'About', 'Contact'];
export default function Navbar(props) {
  const style = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menu = () => (
    <Box
      sx={ 500 }
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      


    </Box>
  )

  return (
    <div className={style.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(style.root)}>
          <Toolbar className={style.drawerButton}>
          <FiMenu color="primary"  onClick={handleDrawerOpen} />
          </Toolbar>


      </AppBar>
      <Drawer
        variant="persistent"
        anchor={"right"}
        classes={{
          paper: style.drawer,
        }}
        open={open}
      >
        {menu}
        <div className={style.root}>
          <IconButton onClick={handleDrawerClose}>
            
          </IconButton>
        </div>
        
        <div className={style.root}>
          <p>drawer content</p>
        </div>
      </Drawer>

    </div>
  )

}

