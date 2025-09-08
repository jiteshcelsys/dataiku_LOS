import { useState } from "react";

export const useDrawerToggle = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return { mobileOpen, handleDrawerToggle, setMobileOpen };
};
export const labelStyle = {
  fontWeight: 500,
  color: "text.primary",
  mb: 1,
  fontSize: "1rem",
};
export const ApplicationNewDashboard = {
  // bgcolor: "#FF9800",
  textTransform: "none",
  fontWeight: 600,
  // "&:hover": { bgcolor: "#f57c00" },
  width: "fit-content", // 👈 button adapts to text width
  px: 3,
  borderRadius: 2,
  alignSelf: "flex-start",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  textAlign: "left",
};
