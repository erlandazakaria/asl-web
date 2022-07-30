import { MouseEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileMenu() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" sx={{fontWeight: "500", color: "#0e424d"}}>
      <IconButton 
        id="mobile-menu-button"
        aria-controls={open ? 'mobile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'mobile-menu-button',
        }}
      >
        <MenuItem onClick={() => {navigate("/"); handleClose()}}>Home</MenuItem>
        <MenuItem onClick={() => {navigate("/service"); handleClose()}}>Service</MenuItem>
        <MenuItem onClick={() => {navigate("/about-us"); handleClose()}}>About Us</MenuItem>
        <MenuItem onClick={() => {navigate("/contact-us"); handleClose()}}>Contact Us</MenuItem>
      </Menu>
    </Box>
  );
};
