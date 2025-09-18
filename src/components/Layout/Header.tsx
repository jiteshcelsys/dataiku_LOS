import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";

import download from "../../assets/download.png";

interface HeaderProps {
  onMenuClick?: () => void;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative"; /// <-- add prop for sidebar toggle
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  // position = "sticky",
  // default sticky
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#FFFFFF",
        borderRadius: 0,
        boxShadow: "none",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left section: Hamburger + Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Hamburger icon only on mobile */}
          {onMenuClick && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={onMenuClick}
              sx={{ mr: 1, display: { xs: "inline-flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* <Building2 size={24} /> */}
          <Box
            component="img"
            src={download} // ✅ your logo path (put in public folder or import)
            alt="Celestial Systems"
            sx={{
              height: 40, // set desired height
              width: "auto", // keeps aspect ratio
            }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              // color: "inherit",
              fontWeight: 600,
              color: "#343b41ff",
            }}
          >
            Celestial Systems
          </Typography>
        </Box>
        {user ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              sx={{ color: "#343b41ff" }}
              onClick={handleProfileMenuOpen}
              startIcon={
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    fontSize: "0.75rem",
                    color: "white",
                    background: "#4A5CC4",
                  }}
                >
                  {user.firstName[0]}
                </Avatar>
              }
            ></Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {/* <MenuItem
                onClick={() => {
                  // navigate("/dashboard");
                  handleMenuClose();
                }}
              >
                <User size={16} className="mr-2" />
                Dashboard
              </MenuItem> */}
              <MenuItem onClick={handleLogout}>
                <LogOut size={16} className="mr-2" />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
