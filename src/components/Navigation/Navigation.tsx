"use client"
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import Link from 'next/link';

import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Projects', href: '/projects', icon: ComputerIcon },
  { text: 'CV', href: '/cv', icon: DescriptionIcon },
  { text: 'About', href: '/about', icon: PersonIcon },
  { text: 'Resources', href: '/projects', icon: LinkIcon },
];

//modified from https://codesandbox.io/s/admiring-meadow-67w7x?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js
export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar position="fixed" >
      <Toolbar sx={{ backgroundColor: 'background.paper' }}>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="primary">Michael Naguib</Typography>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}