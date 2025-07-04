import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () =>{
  return (
     <Box sx={{ flexGrow: 1 }}>
     <AppBar sx={{ backgroundColor: '#000000' }} position="static">
        <Toolbar  variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Hardcore Training
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;


