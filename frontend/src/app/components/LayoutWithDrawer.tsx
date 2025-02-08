'use client';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { ComponentProps, PropsWithChildren, useState } from 'react';

const drawerWidth = 240;

const Logo = ({ sx, ...props }: ComponentProps<typeof Box>) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }} {...props}>
      <Typography variant="h5" component="h1" color="primary.main" fontWeight="bold">
        ERC20 Explorer
      </Typography>
    </Box>
  );
};

const Links = () => (
  <List>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/">
        <ListItemText primary="Watchlist" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/ranking">
        <ListItemText primary="Ranking" />
      </ListItemButton>
    </ListItem>
  </List>
);

export const LayoutWithDrawer = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100vh', alignItems: 'stretch' }}
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'sticky',
        }}
      >
        <Toolbar
          sx={{
            gap: 1,
          }}
        >
          <IconButton color="inherit" aria-label="open drawer" onClick={() => setMobileOpen(true)} edge="start">
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Divider />
      </Box>

      <Drawer
        variant="temporary"
        sx={{
          display: { xs: 'block', md: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Toolbar>
          <Logo />
        </Toolbar>

        <Divider />

        <Links />
      </Drawer>

      <Drawer
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        <Toolbar>
          <Logo />
        </Toolbar>

        <Divider />

        <Links />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
