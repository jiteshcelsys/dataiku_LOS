import {
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle,
  HelpCircle,
  Home,
  Hourglass,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { type JSX } from "react";
import download from "../assets/download.png";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import AvatarI from "../assets/Avatar.jpg";
import AvatarI from "../assets/avatar.jpg";

const navigationItems = [
  {
    label: "Loan Applications",
    icon: Home,
    active: false,
  },
  {
    label: "Alert Inbox",
    icon: Users,
    active: true,
  },
  {
    label: "Analytics & Reports",
    icon: BarChart3,
    active: false,
  },
];

const dashboardMetrics = [
  { title: "Total Alerts", value: "6", subtitle: "All time", icon: Bell },
  {
    title: "Unassigned",
    value: "3",
    subtitle: "Requiring immediate action",
    icon: Hourglass,
  },
  {
    title: "High Priority",
    value: "3",
    subtitle: "Currently open",
    icon: AlertTriangle,
  },
  {
    title: "Resolved Today",
    value: "0",
    subtitle: "Successfully closed",
    icon: CheckCircle,
  },
];

const alertsData = [
  {
    id: "FRAUD-2024-001",
    type: "Fraud Flag",
    typeColor: "#e85963",
    source: "Transaction Monitoring",
    severity: "High",
    severityColor: "#e85963",
    status: "Open",
    statusColor: "#e85963",
    assignedTo: "Unassigned",
    date: "2024-07-20 10:30 AM",
  },
  {
    id: "DOC-2024-055",
    type: "Missing Document",
    typeColor: "#788740",
    source: "Onboarding Process",
    severity: "Medium",
    severityColor: "#788740",
    status: "In Progress",
    statusColor: "#788740",
    assignedTo: "Michael Scott",
    date: "2024-07-19 03:15 PM",
  },
  {
    id: "COMP-2024-012",
    type: "Compliance Breach",
    typeColor: "#e85963",
    source: "Audit Log Analysis",
    severity: "High",
    severityColor: "#e85963",
    status: "Pending Review",
    statusColor: "#9e9e9e",
    assignedTo: "Dwight Schrute",
    date: "2024-07-18 09:00 AM",
  },
  {
    id: "SYS-2024-007",
    type: "System Error",
    typeColor: "#9e9e9e",
    source: "System Health Monitor",
    severity: "Low",
    severityColor: "#9e9e9e",
    status: "Open",
    statusColor: "#e85963",
    assignedTo: "Unassigned",
    date: "2024-07-17 06:00 PM",
  },
  {
    id: "FRAUD-2024-002",
    type: "Fraud Flag",
    typeColor: "#e85963",
    source: "Payment Gateway",
    severity: "Medium",
    severityColor: "#788740",
    status: "In Progress",
    statusColor: "#788740",
    assignedTo: "Pam Beesly",
    date: "2024-07-16 02:45 PM",
  },
  {
    id: "DOC-2024-056",
    type: "Missing Document",
    typeColor: "#788740",
    source: "Loan Application",
    severity: "High",
    severityColor: "#e85963",
    status: "Open",
    statusColor: "#e85963",
    assignedTo: "Unassigned",
    date: "2024-07-15 11:00 AM",
  },
];

const footerLinks = [
  { label: "Resources" },
  { label: "Legal" },
  { label: "Contact Us" },
];

export const AdminAlertInbox = (): JSX.Element => {
  const navigate = useNavigate();
  const handleNavigationClick = (item: string): void => {
    console.log(item);
    if (item === "Alert Inbox") {
      navigate("/admin/alert");
    } else if (item === "Analytics & Reports") {
      navigate("/admin/analytics");
    } else if (item === "Loan Applications") {
      navigate("/admin/dashboard");
    }
  };
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "white" }}>
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
            // sr{c="/image.png"
            src={download}
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
        <List sx={{ flexGrow: 1, px: 1 }}>
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigationClick(item.label)}
                  selected={item.active}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    "&.Mui-selected": {
                      bgcolor: "grey.100",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <IconComponent size={20} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: "#565d6d",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* New Alert Button */}
        <Box sx={{ px: 2, mb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<Plus size={16} />}
            sx={{
              bgcolor: "#376fc8",
              "&:hover": { bgcolor: "#2d5ba3" },
              textTransform: "none",

              fontWeight: 500,
              fontSize: 14,
            }}
          >
            New Alert
          </Button>
        </Box>

        {/* User Profile */}
        <Box sx={{ p: 2, borderTop: "1px solid #dee1e6" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src="/rectangle-12.png"
                sx={{ width: 40, height: 40, bgcolor: "#fce1fc" }}
              >
                AU
              </Avatar>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
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

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "white",
            borderBottom: "1px solid #dee1e6",
            boxShadow:
              "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ flexGrow: 1 }} />

            {/* Search Bar */}
            <TextField
              placeholder="Search alerts..."
              size="small"
              sx={{
                width: 257,
                mr: 3,
                "& .MuiInputBase-root": {
                  fontSize: 14,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={16} color="#171a1f66" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Header Actions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <Bell size={16} />
              </IconButton>
              <IconButton>
                <HelpCircle size={16} />
              </IconButton>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#e6f8f3",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={AvatarI}
                  alt="Avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* <Avatar
                src="/rectangle-13.png"
                sx={{ width: 36, height: 36, bgcolor: "#e6f8f3" }}
              >
                U
              </Avatar> */}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box sx={{ flexGrow: 1, p: 4, bgcolor: "white" }}>
          {/* Dashboard Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#171a1f",
              mb: 4,
            }}
          >
            Dashboard Overview
          </Typography>

          {/* Metrics Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 3,
              mb: 4,
            }}
          >
            {dashboardMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card
                  key={index}
                  // sx={{
                  //   boxShadow:
                  //     "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                  // }}
                  sx={{
                    boxShadow:
                      "0px 4px 12px rgba(23, 26, 31, 0.12), 0px 2px 4px rgba(23, 26, 31, 0.08)",
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#171a1f",
                          fontSize: 16,
                          letterSpacing: "-0.40px",
                        }}
                      >
                        {metric.title}
                      </Typography>
                      <IconComponent size={20} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: "#171a1f",
                        fontSize: 32,
                        mb: 1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 400,
                        color: "#565d6d",
                        fontSize: 12,
                      }}
                    >
                      {metric.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          {/* Alerts Inbox */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#171a1f",
                mb: 3,
              }}
            >
              Alerts Inbox
            </Typography>

            <Card
              sx={{
                border: "1px solid #dee1e6",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Filters */}
                <Box
                  sx={{
                    p: 2,
                    borderBottom: "1px solid #dee1e6",
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <TextField
                    placeholder="Search by ID or keyword..."
                    size="small"
                    sx={{
                      width: 194,
                      "& .MuiInputBase-root": {
                        fontSize: 14,
                      },
                    }}
                  />

                  <Select
                    displayEmpty
                    size="small"
                    sx={{ width: 181 }}
                    renderValue={(value: unknown) =>
                      typeof value === "string" && value !== ""
                        ? {
                            fraud: "Fraud Flag",
                            document: "Missing Document",
                          }[value] || value
                        : "Filter by Type"
                    }
                  >
                    <MenuItem value="">Filter by Type</MenuItem>
                    <MenuItem value="fraud">Fraud Flag</MenuItem>
                    <MenuItem value="document">Missing Document</MenuItem>
                    <MenuItem value="compliance">Compliance Breach</MenuItem>
                    <MenuItem value="system">System Error</MenuItem>
                  </Select>

                  <Select
                    displayEmpty
                    size="small"
                    sx={{ width: 181 }}
                    renderValue={(value: unknown) =>
                      typeof value === "string" && value !== ""
                        ? {
                            high: "High",
                            medium: "Medium",
                            low: "Low",
                          }[value] || value
                        : "Filter by Severity"
                    }
                  >
                    <MenuItem value="">Filter by Severity</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                  </Select>

                  <Select
                    displayEmpty
                    size="small"
                    sx={{ width: 181 }}
                    renderValue={(value: unknown) =>
                      typeof value === "string" && value !== ""
                        ? {
                            open: "Open",
                            progress: "In Progress",
                            pending: "Pending Review",
                          }[value] || value
                        : "Filter by Status"
                    }
                  >
                    <MenuItem value="">Filter by Status</MenuItem>
                    <MenuItem value="open">Open</MenuItem>
                    <MenuItem value="progress">In Progress</MenuItem>
                    <MenuItem value="pending">Pending Review</MenuItem>
                  </Select>

                  <Select
                    displayEmpty
                    size="small"
                    sx={{ width: 181 }}
                    renderValue={(value: unknown) =>
                      typeof value === "string" && value !== ""
                        ? {
                            unassigned: "Unassigned",
                            michael: "Michael Scott",
                            dwight: "Dwight Schrute",
                            pam: "Pam Beesly",
                          }[value] || value
                        : "Filter by Assignee"
                    }
                  >
                    <MenuItem value="">Filter by Assignee</MenuItem>
                    <MenuItem value="unassigned">Unassigned</MenuItem>
                    <MenuItem value="michael">Michael Scott</MenuItem>
                    <MenuItem value="dwight">Dwight Schrute</MenuItem>
                    <MenuItem value="pam">Pam Beesly</MenuItem>
                  </Select>

                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",

                      fontWeight: 500,
                      color: "#171a1f",
                      fontSize: 14,
                    }}
                  >
                    Clear Filters
                  </Button>
                </Box>

                {/* Table */}
                <TableContainer>
                  <Table>
                    <TableHead sx={{ bgcolor: "grey.100" }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          ID
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Type
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Source
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Severity
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Assigned To
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Date
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                          align="right"
                        >
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {alertsData.map((alert, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              fontWeight: 600,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {alert.id}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={alert.type}
                              size="small"
                              sx={{
                                bgcolor: alert.typeColor,
                                color:
                                  alert.typeColor === "#9e9e9e"
                                    ? "#1e2128"
                                    : "#EEEFF2",

                                fontWeight: 600,
                                fontSize: 12,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {alert.source}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={alert.severity}
                              size="small"
                              sx={{
                                bgcolor: alert.severityColor,
                                color:
                                  alert.severityColor === "#9e9e9e"
                                    ? "#1e2128"
                                    : "white",

                                fontWeight: 600,
                                fontSize: 12,
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={alert.status}
                              size="small"
                              sx={{
                                bgcolor: alert.statusColor,
                                color:
                                  alert.statusColor === "#9e9e9e"
                                    ? "#1e2128"
                                    : "white",

                                fontWeight: 600,
                                fontSize: 12,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {alert.assignedTo}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {alert.date}
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{
                                textTransform: "none",

                                fontWeight: 600,
                                color: "#171a1f",
                                fontSize: 14,
                              }}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            height: 52,
            bgcolor: "white",
            borderTop: "1px solid #dee1e6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {footerLinks.map((link, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "#171a1f",
                  fontSize: 14,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              style={{ width: 20, height: 20 }}
              alt="Facebook"
              src="/facebook.svg"
            />
            <img
              style={{ width: 20, height: 20 }}
              alt="Twitter"
              src="/twitter.svg"
            />
            <img
              style={{ width: 20, height: 20 }}
              alt="LinkedIn"
              src="/linkedin.svg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
