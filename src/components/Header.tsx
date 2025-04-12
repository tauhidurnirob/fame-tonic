"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "About us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: "text.primary",
          py: 2,
          mt: 3
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            px: "0 !important"
          }}
        >
          <Box
            flex={{xs: 1}}
            width={"100%"}
            display={"flex"}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Box
              component="img"
              src="/logo.svg"
              alt="Logo"
              height={{xs: "46px", md: "74px"}}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        key={item.text}
                        component={Link}
                        href={item.href}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  href={item.href}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontSize: "18px",
                    color: "grey.100"
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
