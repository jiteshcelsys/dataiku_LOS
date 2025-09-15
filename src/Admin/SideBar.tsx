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
} from "@mui/material";
import { BarChart3, Home, Users } from "lucide-react";
import { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { AdminAlertInbox } from "./AdminAlertInbox";
import { AdminAnalytics } from "./AdminAnalytics";
import AdminNew from "./AdminNew";
import { useNavigate } from "react-router-dom";
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

  const handleNavigationClick = (label: string) => {
    // <NavLink to="/admin/dashboard">dash</NavLink>
    //           <br />
    //           <NavLink to="/admin/adminNew">adminNew</NavLink>
    //           <br />
    //           <NavLink to="/admin/alert">alert</NavLink>
    if (label === "Loan Applications") {
      return <NavLink to="/admin/dashboard">DashBoard</NavLink>;
    } else if (label === "Alert Inbox") {
      return <NavLink to="/admin/alert">alert</NavLink>;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
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
          <Box sx={{ mb: 2 }}>
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
                          bgcolor: "grey.100", // highlight when active
                        },
                      }}
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

            {/* <NavLink to="/admin/dashboard">dash</NavLink>
            <br />
            <NavLink to="/admin/adminNew">adminNew</NavLink>
            <br /> */}
          </Box>
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
                sx={{
                  fontWeight: 600,
                  color: "#171a1f",
                  fontSize: 14,
                }}
              >
                Admin User
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: "#565d6d",
                  fontSize: 14,
                }}
              >
                Online
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation_Sidebar;
