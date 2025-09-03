import React from "react";
import { Box, Drawer, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { Header } from "./Header";
import { AdminSidebar } from "./AdminSidebar";
import { useDrawerToggle } from "../../Helper/useDrawerToggle";

const drawerWidth = 240;

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { mobileOpen, handleDrawerToggle } = useDrawerToggle();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // md breakpoint = desktop

  return (
    <>
      <Box
        sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
      >
        {/* <Header onMenuClick={handleDrawerToggle} /> */}
        {/* Header with hamburger for mobile */}

        {/* Sidebar + Main */}
        <Box sx={{ display: "flex", flex: 1 }}>
          {isDesktop ? (
            // Permanent sidebar for desktop
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
              <AdminSidebar />
            </Box>
          ) : (
            // Temporary drawer for mobile
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
              <AdminSidebar />
            </Drawer>
          )}

          {/* Main content area */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {/* Push content below header */}
            {/* <Toolbar /> */}
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
