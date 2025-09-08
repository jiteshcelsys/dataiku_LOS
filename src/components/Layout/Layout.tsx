import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
};
