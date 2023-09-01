/*###########################
Hecho por Steveen Sinchiguano
Programacion Integrativa
Unidad 3
Material UI - React
###########################*/

import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
    },
    {
      text: "Destinos",
      icon: <InfoIcon />,
    },
    {
      text: "Acerca de Nosotros",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contactanos",
      icon: <PhoneRoundedIcon />,
    },
  ];

  return (
    <nav>
      {/* Contenedor del logo */}
      <div className="nav-logo-container">
  <img src={Logo} alt="Logo" style={{ height: '100px' }} />
</div>


      {/* Contenedor de enlaces */}
      <div className="navbar-links-container">
        <a href="#">Inicio</a>
        <a href="#">Destinos</a>
        <a href="#">Acerca de Nosotros</a>
        <a href="#">Contactanos</a>

        {/* Botón de lugares */}
        <button className="primary-button">Lugares</button>
      </div>

      {/* Contenedor del menú móvil */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Menú desplegable */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
