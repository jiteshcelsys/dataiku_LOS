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
  TextField,
  InputAdornment,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Building2, User, LogOut } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import Celestial_Systems from "src\assets\Celestial_Systems.jpg";

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
      // position={position}
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

        {/* Right side */}
        {user ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* <Typography
              variant="body2"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Welcome, {user.firstName}
            </Typography> */}
            <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
              {/* <SearchIcon /> */}
              <TextField
                size="small"
                placeholder="Search..."
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    height: 36,
                    fontSize: "0.875rem",
                  },
                }}
              />
            </Box>

            <Button
              // color="inherit"
              sx={{ color: "#343b41ff" }}
              onClick={handleProfileMenuOpen}
              startIcon={
                <Avatar sx={{ width: 24, height: 24, fontSize: "0.75rem" }}>
                  {user.firstName[0]}
                </Avatar>
              }
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>Profile</Box>
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  navigate("/dashboard");
                  handleMenuClose();
                }}
              >
                <User size={16} className="mr-2" />
                Dashboard
              </MenuItem>
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
