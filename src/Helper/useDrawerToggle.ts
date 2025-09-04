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
