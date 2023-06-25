import React from "react";
import clsx from "clsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Menu, MenuItem } from '@mui/material';


import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {FiMenu} from 'react-icons/fi';
import {BiArrowBack} from 'react-icons/bi';
import Toolbar from '@mui/material/Toolbar';

import useStyles from "../styles/styles.js";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import Theme from "../styles/theme.js";
const drawerWidth = 240;
// Here, we display our Navbar

export default function Navbar() {
  const style = useStyles(Theme);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuIcon = () => (
    <Box
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
    </Box>
  )

  return (
    <React.Fragment>

      <AppBar
        position="relative"
        className={clsx(style.root)}>
          <Toolbar className={style.drawerButton}>
          <FiMenu size={30} color="primary" onClick={handleDrawerOpen} />
          </Toolbar>


      </AppBar>
      {menuIcon()}
      <Drawer
        variant="persistent"
        anchor={"right"}
        classes={{
          paper: style.drawer,
        }}
        open={open}
      >
        
        <div className={style.drawerButtonExpanded}>
          <BiArrowBack size={30} color={'#808080'} onClick={handleDrawerClose}/>
        </div>

        <div className={style.linkBox}>
        <NavLink to={'/'} className={style.link} style={({ isActive }) => ({ borderBottom: isActive ? "3px solid rgb(212, 212, 212)" : 'none' })}>Home</NavLink>
        <NavLink to={'/page'} className={style.link} style={({ isActive }) => ({ borderBottom: isActive ? "3px solid rgb(212, 212, 212)" : 'none' })}>Page</NavLink>
        </div>
      </Drawer>

      </React.Fragment>
  )

}