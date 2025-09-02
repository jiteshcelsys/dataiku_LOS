import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "./Sidebar";
import { Header } from "../Layout/Header";
import { useDrawerToggle } from "../../Helper/useDrawerToggle";

const drawerWidth = 240;

export const AdminDashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //   const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const { mobileOpen, handleDrawerToggle } = useDrawerToggle();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* Header (with profile/logout) */}
      {/* <Header onMenuClick={handleDrawerToggle} /> */}

      {/* Sidebar + Main content */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Permanent sidebar for desktop */}
        {isDesktop ? (
          <Box
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Sidebar />
          </Box>
        ) : (
          /* Temporary drawer for mobile */
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Sidebar />
          </Drawer>
        )}

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          {/* Add spacing for Header height */}
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};
