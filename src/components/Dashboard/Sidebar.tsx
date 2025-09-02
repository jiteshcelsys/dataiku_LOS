import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FileText, Users, BarChart2, Settings } from "lucide-react";

const drawerWidth = 240;

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Loan Applications",
      icon: <FileText />,
      path: "/admin/loan-applications",
    },
    { text: "Customer Accounts", icon: <Users />, path: "/admin/customers" },
    {
      text: "Analytics & Reports",
      icon: <BarChart2 />,
      path: "/admin/reports",
    },
    { text: "Settings", icon: <Settings />, path: "/admin/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {/* Add space for top AppBar */}
      {/* <Toolbar /> */}
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text} onClick={() => navigate(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
