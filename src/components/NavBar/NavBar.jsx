import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";

import { Sidebar, Search, Profile } from "..";


import useStyles from "./styles";
import { fetchToken, createSessionId, moviesApi } from './../../utils/index';
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";
import { ColorModeContext } from "../../utils/ToggleColorMode";

function NavBar() {
  const { isAuthenticated, user } = useSelector(userSelector)
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const token = localStorage.getItem('request_token')
  const sessionIdFromLocation = localStorage.getItem('session_id')
  const dispatch = useDispatch()

  const colorMode = useContext(ColorModeContext)

  console.log(user);

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocation) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocation}`)
          dispatch(setUser(userData))

        } else {
          const sessionId = await createSessionId()
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`)
          dispatch(setUser(userData))
        }
      }
    }

    logInUser()
  }, [token])
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXr1dxOEImV2Emyo94H4I-eZ0T3saRUbvOGwB2GaeUVg&s"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar >
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>

      <div />
    </>
  );
}

export default NavBar;
