import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Badge,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Settings,
  Bell,
  UserCheck,
  HelpCircle,
} from "lucide-react";

const menuItems = [
  {
    section: "RECRUITMENT",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
      { icon: FileText, label: "Applications", path: "/admin/applications" },
      { icon: Users, label: "Candidates", path: "/admin/candidates" },
    ],
  },
  {
    section: "MANAGEMENT",
    items: [
      { icon: UserCheck, label: "Tasks", path: "/admin/tasks" },
      { icon: Settings, label: "Settings", path: "/admin/settings" },
    ],
  },
];

const alertItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/admin/alerts" },
  { icon: Bell, label: "Alerts Inbox", path: "/admin/alerts/inbox", badge: 6 },
  { icon: UserCheck, label: "Assigned to Me", path: "/admin/alerts/assigned" },
  { icon: FileText, label: "Resolved", path: "/admin/alerts/resolved" },
  { icon: BarChart3, label: "Analytics", path: "/admin/alerts/analytics" },
  { icon: Settings, label: "Settings", path: "/admin/alerts/settings" },
];

export const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "white",
        borderRight: "1px solid #e0e0e0",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 64,
        overflowY: "auto",
      }}
    >
      {/* Main Menu */}
      {menuItems.map((section) => (
        <Box key={section.section}>
          <Typography
            variant="caption"
            sx={{
              px: 2,
              py: 1,
              display: "block",
              fontWeight: 600,
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {section.section}
          </Typography>
          <List sx={{ py: 0 }}>
            {section.items.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  selected={isActive(item.path)}
                  sx={{
                    mx: 1,
                    borderRadius: 1,
                    "&.Mui-selected": {
                      bgcolor: "#e3f2fd",
                      "&:hover": { bgcolor: "#e3f2fd" },
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <item.icon size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
        </Box>
      ))}

      {/* Alert Menu */}
      <Typography
        variant="caption"
        sx={{
          px: 2,
          py: 1,
          display: "block",
          fontWeight: 600,
          color: "text.secondary",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        ALERTS
      </Typography>
      <List sx={{ py: 0 }}>
        {alertItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={isActive(item.path)}
              sx={{
                mx: 1,
                borderRadius: 1,
                "&.Mui-selected": {
                  bgcolor: "#e3f2fd",
                  "&:hover": { bgcolor: "#e3f2fd" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {item.badge ? (
                  <Badge badgeContent={item.badge} color="error">
                    <item.icon size={20} />
                  </Badge>
                ) : (
                  <item.icon size={20} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ variant: "body2" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Help Section */}
      <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          Need Help?
        </Typography>
        <Button
          variant="text"
          startIcon={<HelpCircle size={16} />}
          size="small"
          sx={{
            textTransform: "none",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
};
