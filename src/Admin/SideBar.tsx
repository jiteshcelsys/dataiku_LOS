import {
  Drawer,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  List,
  useTheme,
  useMediaQuery,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import { BarChart3, Home, MenuIcon, Users } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Example components for right side

function Navigation_Sidebar() {
  type NavigationItem = {
    label: string;
    icon: React.ElementType;
    path: string; // 👈 instead of active, store route path
  };

  const [navigationItems] = useState<NavigationItem[]>([
    {
      label: "Loan Applications",
      icon: Home,
      path: "/admin/dashboard", // 👈 matches your route
    },
    {
      label: "Alert Inbox",
      icon: Users,
      path: "/admin/alert",
    },
    {
      label: "Analytics & Reports",
      icon: BarChart3,
      path: "/admin/analytics",
    },
    {
      label: "Admin New",
      icon: BarChart3,
      path: "/admin/adminNew",
    },
  ]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  // collapse for tablet & mobile (< 1024px)
  const isCollapsed = useMediaQuery("(max-width:1024px)");
  const drawerContent = (
    <>
      {/* Logo */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "row" }}>
        <img
          style={{
            width: "100%",
            maxWidth: "198px",
            height: "52px",
            objectFit: "contain",
          }}
          alt="Logo"
          src="/download.png"
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: "#6B6B6B",
            fontSize: 18,
          }}
        >
          CELESTIAL SYSTEMS
        </Typography>
      </div>

      {/* Navigation */}
      <Box sx={{ flexGrow: 1, px: 0.5, py: 2 }}>
        <List sx={{ py: 0 }}>
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    "&.active": {
                      bgcolor: "grey.100",
                    },
                  }}
                  onClick={() => isCollapsed && setMobileOpen(false)}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <IconComponent size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: "inherit",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* User Profile */}
      <Box sx={{ p: 2, borderTop: "1px solid #dee1e6" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src="/rectangle-6.png"
              sx={{ width: 40, height: 40, bgcolor: "#fce1fc" }}
            >
              AU
            </Avatar>
            <Box
              sx={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: 10,
                height: 10,
                bgcolor: "#25984d",
                borderRadius: "50%",
                border: "1.5px solid white",
              }}
            />
          </Box>
          <Box sx={{ ml: 1.5 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#171a1f", fontSize: 14 }}
            >
              Admin User
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 400, color: "#565d6d", fontSize: 14 }}
            >
              Online
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* AppBar with hamburger */}
      {isCollapsed && (
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "white",
            color: "black",
            display: "inline-block", // 👈 only as wide as children
            boxShadow: "none", // optional
          }}
        >
          <Toolbar sx={{ pl: 1, pr: 1, minHeight: "40px" }}>
            {" "}
            {/* ✅ compact spacing */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <MenuIcon />
              <Box
                sx={{
                  bgcolor: "#ffffff", // purple shade
                  px: 2,
                  py: 0,
                  fontWeight: 100,
                  color: "white",
                  flex: "0 0 auto",
                  display: "flex",
                  alignItems: "center", // center logo vertically
                }}
                // onClick={handleDSportal}
              >
                <img
                  style={{
                    height: "40px", // fixed bar height
                    width: "auto", // scale width proportionally
                    objectFit: "contain",
                    display: "block",
                    // py:0,
                  }}
                  alt="Logo"
                  src="/download.png"
                />
              </Box>
              CLOS
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar */}
      <Drawer
        variant={isCollapsed ? "temporary" : "permanent"}
        open={isCollapsed ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: 256,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 256,
            boxSizing: "border-box",
            border: "1px solid #dee1e6",
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Content area */}
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: isCollapsed ? 8 : 0, // push content down if AppBar exists
        }}
      > */}
      {/* Your page content */}
      {/* </Box> */}
    </Box>
  );
}

export default Navigation_Sidebar;
