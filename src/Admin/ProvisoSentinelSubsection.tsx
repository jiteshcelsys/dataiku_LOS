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
  Settings,
  UserCheck,
  Menu,
  X,
} from "lucide-react";
import { type JSX } from "react";
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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const navigationItems = [
  { icon: Home, label: "Overview", active: false },
  { icon: Bell, label: "Alerts Inbox", active: true },
  { icon: UserCheck, label: "Assigned to Me", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: CheckCircle, label: "Resolved", active: false },
  { icon: Settings, label: "Settings", active: false },
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

export const ProvisoSentinelSubsection = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 256;

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <Box sx={{ p: { xs: 2, md: 3 } }}>
        <img
          style={{ width: '100%', maxWidth: 198, height: 52 }}
          alt="Logo"
          src="/image-4.png"
        />
      </Box>

      {/* Navigation */}
      <List sx={{ flexGrow: 1, px: 1 }}>
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                selected={item.active}
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  py: { xs: 1, md: 1.5 },
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
                    fontSize: { xs: 13, md: 14 },
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
            fontSize: { xs: 13, md: 14 },
            py: { xs: 1, md: 1.5 },
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
              sx={{ width: { xs: 36, md: 40 }, height: { xs: 36, md: 40 }, bgcolor: "#fce1e9" }}
            >
              AU
            </Avatar>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: { xs: 8, md: 10 },
                height: { xs: 8, md: 10 },
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
                fontSize: { xs: 13, md: 14 },
              }}
            >
              Admin User
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                color: "#565d6d",
                fontSize: { xs: 12, md: 14 },
              }}
            >
              Online
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "white" }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            border: "1px solid #dee1e6",
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <X size={20} />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "1px solid #dee1e6",
            borderRadius: 0,
          },
        }}
      >
        {drawer}
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
            boxShadow: "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 3 } }}>
            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                display: { md: 'none' },
                color: '#171a1f'
              }}
            >
              <Menu />
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />

            {/* Search Bar */}
            <TextField
              placeholder="Search alerts..."
              size="small"
              sx={{
                width: { xs: 200, sm: 257 },
                mr: { xs: 1, md: 3 },
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
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 1 } }}>
              <IconButton sx={{ color: '#171a1f' }}>
                <Bell size={16} />
              </IconButton>
              <IconButton sx={{ color: '#171a1f', display: { xs: 'none', sm: 'flex' } }}>
                <HelpCircle size={16} />
              </IconButton>
              <Avatar
                src="/rectangle-13.png"
                sx={{ width: { xs: 32, md: 36 }, height: { xs: 32, md: 36 }, bgcolor: "#e6f8f3" }}
              >
                U
              </Avatar>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box sx={{ 
          flexGrow: 1, 
          p: { xs: 2, sm: 3, md: 4 }, 
          bgcolor: "white",
          overflow: 'auto'
        }}>
          {/* Dashboard Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#171a1f",
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
            }}
          >
            Dashboard Overview
          </Typography>

          {/* Metrics Cards */}
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { 
              xs: "1fr", 
              sm: "repeat(2, 1fr)", 
              lg: "repeat(4, 1fr)" 
            }, 
            gap: { xs: 2, md: 3 }, 
            mb: { xs: 3, md: 4 } 
          }}>
            {dashboardMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card
                  key={index}
                  sx={{
                    boxShadow: "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Box sx={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "flex-start", 
                      mb: { xs: 1.5, md: 2 } 
                    }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#171a1f",
                          fontSize: { xs: 14, md: 16 },
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
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
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
                        fontSize: { xs: 11, md: 12 },
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
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              }}
            >
              Alerts Inbox
            </Typography>

            <Card
              sx={{
                border: "1px solid #dee1e6",
                boxShadow: "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Filters */}
                <Box sx={{ 
                  p: { xs: 2, md: 3 }, 
                  borderBottom: "1px solid #dee1e6", 
                  display: "flex", 
                  flexDirection: { xs: 'column', lg: 'row' },
                  gap: 2, 
                  alignItems: { xs: 'stretch', lg: 'center' }
                }}>
                  <Box sx={{ 
                    display: 'grid',
                    gridTemplateColumns: { 
                      xs: '1fr', 
                      sm: 'repeat(2, 1fr)', 
                      md: 'repeat(3, 1fr)',
                      lg: 'repeat(5, 1fr)'
                    },
                    gap: 2,
                    flexGrow: 1
                  }}>
                    <TextField
                      placeholder="Search by ID or keyword..."
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          fontSize: 14,
                        },
                      }}
                    />

                    <Select
                      displayEmpty
                      size="small"
                      renderValue={(value: unknown) =>
                        typeof value === "string" && value !== ""
                          ? (
                              {
                                fraud: "Fraud Flag",
                                document: "Missing Document"
                              }[value] || value
                            )
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
                      renderValue={(value: unknown) =>
                        typeof value === "string" && value !== ""
                          ? (
                              {
                                high: "High",
                                medium: "Medium",
                                low: "Low"
                              }[value] || value
                            )
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
                      renderValue={(value: unknown) =>
                        typeof value === "string" && value !== ""
                          ? (
                              {
                                open: "Open",
                                progress: "In Progress",
                                pending: "Pending Review"
                              }[value] || value
                            )
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
                      renderValue={(value: unknown) =>
                        typeof value === "string" && value !== "" 
                          ? (
                              {
                                unassigned: "Unassigned",
                                michael: "Michael Scott",
                                dwight: "Dwight Schrute",
                                pam: "Pam Beesly"
                              }[value] || value
                            )
                          : "Filter by Assignee"
                      }
                    >
                      <MenuItem value="">Filter by Assignee</MenuItem>
                      <MenuItem value="unassigned">Unassigned</MenuItem>
                      <MenuItem value="michael">Michael Scott</MenuItem>
                      <MenuItem value="dwight">Dwight Schrute</MenuItem>
                      <MenuItem value="pam">Pam Beesly</MenuItem>
                    </Select>
                  </Box>

                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontWeight: 500,
                      color: "#171a1f",
                      fontSize: 14,
                      whiteSpace: 'nowrap',
                      minWidth: { xs: 'auto', lg: 120 },
                    }}
                  >
                    Clear Filters
                  </Button>
                </Box>

                {/* Table */}
                <TableContainer sx={{ overflowX: 'auto' }}>
                  <Table sx={{ minWidth: { xs: 800, md: 'auto' } }}>
                    <TableHead sx={{ bgcolor: "grey.100" }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 80 }}>
                          ID
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 120 }}>
                          Type
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 150 }}>
                          Source
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 100 }}>
                          Severity
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 100 }}>
                          Status
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 120 }}>
                          Assigned To
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 140 }}>
                          Date
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500, color: "#565d6d", fontSize: 14, minWidth: 100 }} align="right">
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {alertsData.map((alert, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ fontWeight: 500, color: "#171a1f", fontSize: { xs: 12, md: 14 } }}>
                            {alert.id}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={alert.type}
                              size="small"
                              sx={{
                                bgcolor: alert.typeColor,
                                color: alert.typeColor === "#9e9e9e" ? "#1e2128" : "white",
                                fontWeight: 600,
                                fontSize: { xs: 10, md: 12 },
                              }}
                            />
                          </TableCell>
                          <TableCell sx={{ fontWeight: 400, color: "#171a1f", fontSize: { xs: 12, md: 14 } }}>
                            {alert.source}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={alert.severity}
                              size="small"
                              sx={{
                                bgcolor: alert.severityColor,
                                color: alert.severityColor === "#9e9e9e" ? "#1e2128" : "white",
                                fontWeight: 600,
                                fontSize: { xs: 10, md: 12 },
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={alert.status}
                              size="small"
                              sx={{
                                bgcolor: alert.statusColor,
                                color: alert.statusColor === "#9e9e9e" ? "#1e2128" : "white",
                                fontWeight: 600,
                                fontSize: { xs: 10, md: 12 },
                              }}
                            />
                          </TableCell>
                          <TableCell sx={{ fontWeight: 400, color: "#171a1f", fontSize: { xs: 12, md: 14 } }}>
                            {alert.assignedTo}
                          </TableCell>
                          <TableCell sx={{ fontWeight: 400, color: "#171a1f", fontSize: { xs: 12, md: 14 } }}>
                            {alert.date}
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{
                                textTransform: "none",
                                fontWeight: 500,
                                color: "#171a1f",
                                fontSize: { xs: 12, md: 14 },
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
            height: { xs: 'auto', md: 52 },
            bgcolor: "white",
            borderTop: "1px solid #dee1e6",
            display: "flex",
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 0 },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ 
            display: "flex", 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: "center", 
            gap: { xs: 1, sm: 3 } 
          }}>
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
            <img style={{ width: 20, height: 20 }} alt="Facebook" src="/facebook.svg" />
            <img style={{ width: 20, height: 20 }} alt="Twitter" src="/twitter.svg" />
            <img style={{ width: 20, height: 20 }} alt="LinkedIn" src="/linkedin.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};