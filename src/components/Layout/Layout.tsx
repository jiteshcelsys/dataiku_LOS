import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { useDrawerToggle } from "../../Helper/useDrawerToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
};
