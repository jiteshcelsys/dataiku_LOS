import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { AdminSidebar } from "./AdminSidebar";
import { useDrawerToggle } from "../../Helper/useDrawerToggle";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  //  const { mobileOpen, handleDrawerToggle } = useDrawerToggle();
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Header />
      <Box sx={{ display: "flex" }}>
        <AdminSidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: "240px",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
