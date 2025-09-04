import {
  BadgeAlert,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Calendar,
  ChevronDown,
  CircleAlert,
  CircleX,
  Download,
  FileText,
  Flag,
  History,
  Home,
  Info,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Settings,
  SquareGanttChart,
  Users,
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
  Divider,
  Drawer,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import download from "../assets/download.png";

export const AdminAnalytics = (): JSX.Element => {
  const navigate = useNavigate();
  const navigationItems = [
    {
      label: "Loan Applications",
      icon: Home,
      active: false,
    },
    {
      label: "Alert Inbox",
      icon: Users,
      active: false,
    },
    {
      label: "Analytics & Reports",
      icon: BarChart3,
      active: true,
    },
  ];

  const personalDataItems = [
    { icon: Mail, label: "Email", value: "sophia.williams@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    {
      icon: MapPin,
      label: "Address",
      value: "456 Oak Avenue, Springfield, IL 62704, USA",
    },
    { icon: Calendar, label: "Date of Birth", value: "1995-07-20" },
    { icon: Flag, label: "Nationality", value: "American" },
  ];

  const evaluationScores = [
    { label: "Technical Skills", percentage: 85 },
    { label: "Communication", percentage: 92 },
    { label: "Problem Solving", percentage: 88 },
    { label: "Team Collaboration", percentage: 75 },
  ];

  const documents = [
    {
      icon: FileText,
      name: "Resume_SophiaWilliams.pdf",
      status: "Uploaded",
    },
    {
      icon: FileText,
      name: "Identity_Verification.jpg",
      status: "Uploaded",
    },
    {
      icon: FileText,
      name: "Educational_Certificates.pdf",
      status: "Uploaded",
    },
  ];

  const apiCheckResults = [
    {
      name: "KYC Status",
      status: "Passed",
      date: "2024-07-10",
      notes: "All documents verified successfully.",
      statusColor: "#f9faf5",
      textColor: "#19191f",
    },
    {
      name: "Background Check",
      status: "Passed",
      date: "2024-07-11",
      notes: "No adverse findings.",
      statusColor: "#f9faf5",
      textColor: "#19191f",
    },
    {
      name: "Sanctions List Check",
      status: "Passed",
      date: "2024-07-10",
      notes: "Cleared global sanctions lists.",
      statusColor: "#f9faf5",
      textColor: "#19191f",
    },
    {
      name: "Credit History",
      status: "Failed",
      date: "2024-07-12",
      notes: "Minor discrepancies found in credit report.",
      statusColor: "#ffebee",
      textColor: "#c62828",
    },
    {
      name: "Educational Verification",
      status: "Passed",
      date: "2024-07-11",
      notes: "Degrees verified with institutions.",
      statusColor: "#f9faf5",
      textColor: "#19191f",
    },
  ];

  const exceptionFlags = [
    { label: "Low Overall Score", color: "#376fc8", icon: Info },
    { label: "KYC Mismatch", color: "#e85963", icon: BadgeAlert },
    { label: "Employment Gap Detected", color: "#376fc8", icon: Info },
  ];

  const comments = [
    {
      name: "John Doe",
      date: "2024-07-15, 10:30 AM",
      message:
        "Applicant has strong eligibility chance but some gaps in recent history. Needs clarification.",
      avatar: "/rectangle-8.png",
      bgColor: "#ede7fb",
    },
    {
      name: "Jane Smith",
      date: "2024-07-15, 01:45 PM",
      message:
        "KYC verification issue flagged. Requires manual review and possibly re-submission of documents.",
      avatar: "/rectangle-9.png",
      bgColor: "#e6ebf8",
    },
    {
      name: "Michael Brown",
      date: "2024-07-16, 09:00 AM",
      message:
        "Contacted applicant for further info on employment gap. Awaiting response.",
      avatar: "/rectangle-10.png",
      bgColor: "#e3f9f2",
    },
  ];

  const decisionHistory = [
    { title: "Application Submitted", date: "2024-07-08, 08:00 AM", by: "" },
    {
      title: "Initial Review Completed",
      date: "2024-07-10, 11:30 AM",
      by: "by Automated System",
    },
    { title: "Documents Uploaded", date: "2024-07-10, 02:00 PM", by: "" },
    { title: "API Checks Initiated", date: "2024-07-10, 03:00 PM", by: "" },
    {
      title: "KYC Flagged",
      date: "2024-07-15, 01:00 PM",
      by: "by Automated System",
    },
    {
      title: "Manual Review Assigned",
      date: "2024-07-15, 02:30 PM",
      by: "by John Doe",
    },
    {
      title: "Info Requested from Applicant",
      date: "2024-07-16, 09:15 AM",
      by: "by Michael Brown",
    },
  ];

  const handleNavigationClick = (item: string): void => {
    navigate(
      `/admin/${item === "Alert Inbox" ? "alert" : item === "Analytics & Reports" ? "analytics" : ""}`
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "white",
        overflow: "hidden",
        boxShadow: "0px 3px 6px rgba(18, 15, 40, 0.12)",
        display: "flex",
      }}
    >
      {/* Left Sidebar */}
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
        <Box sx={{ flexGrow: 1, px: 0.5, py: 2 }}>
          <Box sx={{ mb: 2 }}>
            <List sx={{ py: 0 }}>
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      selected={item.active}
                      sx={{
                        borderRadius: 1,
                        mx: 1,
                        "&.Mui-selected": {
                          bgcolor: "grey.100",
                        },
                      }}
                      onClick={() => handleNavigationClick(item.label)}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <IconComponent size={20} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: item.active ? "#1e2128" : "#565d6d",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
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

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            height: 64,
            bgcolor: "white",
            borderBottom: "1px solid #dee1e6",
            boxShadow:
              "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
          }}
        >
          <Toolbar sx={{ justifyContent: "flex-end", gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<Info size={16} />}
              sx={{
                height: 40,
                textTransform: "none",

                fontWeight: 500,
                color: "#171a1f",
                fontSize: 14,
              }}
            >
              Request Info
            </Button>
            <Button
              variant="outlined"
              startIcon={<ChevronDown size={16} />}
              sx={{
                height: 40,
                textTransform: "none",

                fontWeight: 500,
                color: "#171a1f",
                fontSize: 14,
              }}
            >
              Escalate
            </Button>
            <Button
              variant="contained"
              startIcon={<BadgeCheck size={16} />}
              sx={{
                height: 40,
                bgcolor: "#376fc8",
                textTransform: "none",

                fontWeight: 500,
                fontSize: 14,
                "&:hover": {
                  bgcolor: "#2d5ba3",
                },
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              startIcon={<CircleX size={16} />}
              sx={{
                height: 40,
                bgcolor: "#e85963",
                textTransform: "none",

                fontWeight: 500,
                fontSize: 14,
                "&:hover": {
                  bgcolor: "#d73e49",
                },
              }}
            >
              Deny
            </Button>
            <Avatar
              src="/rectangle-11.png"
              sx={{ width: 36, height: 36, bgcolor: "#e6f8f3", ml: 1 }}
            >
              U
            </Avatar>
          </Toolbar>
        </AppBar>

        {/* Content Area */}
        <Box sx={{ flexGrow: 1, p: 3, display: "flex", gap: 3 }}>
          {/* Left Column */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Applicant Profile Card */}
            <Card
              sx={{
                border: "1px solid #dee1e6",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent
                sx={{ p: 3, display: "flex", alignItems: "center", gap: 3 }}
              >
                <Avatar
                  src="/rectangle-7.png"
                  sx={{ width: 100, height: 100, bgcolor: "#e5effa" }}
                >
                  SW
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 24,
                      letterSpacing: "-0.60px",
                      color: "#171a1f",
                      mb: 1,
                    }}
                  >
                    Sophia Williams
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      color: "#565d6d",
                      mb: 1.5,
                    }}
                  >
                    Application ID:{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 500,
                        color: "#171a1f",
                      }}
                    >
                      APP-987654321
                    </Typography>
                  </Typography>
                  <Chip
                    label="Pending Review"
                    sx={{
                      bgcolor: "#f3f6fc",
                      color: "#19191f",
                      px: 2,
                      py: 0.5,
                      borderRadius: "15px",

                      fontWeight: 500,
                    }}
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Personal Data Card */}
            <Card
              sx={{
                border: "1px solid #dee1e6",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 20,
                    letterSpacing: "-0.50px",
                    color: "#171a1f",
                    mb: 3,
                  }}
                >
                  Personal Data
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 3,
                  }}
                >
                  {personalDataItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Box key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <IconComponent size={20} color="#565d6d" />
                          <Typography
                            sx={{
                              fontWeight: 400,
                              color: "#565d6d",
                              fontSize: 14,
                            }}
                          >
                            {item.label}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            color: "#171a1f",
                            fontSize: 16,
                            ml: 3.5,
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>

            {/* Evaluation Score and Documents Row */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 3,
              }}
            >
              {/* Evaluation Score Card */}
              <Card
                sx={{
                  border: "1px solid #dee1e6",
                  boxShadow:
                    "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 20,
                      letterSpacing: "-0.50px",
                      color: "#171a1f",
                      mb: 1,
                    }}
                  >
                    Evaluation Score
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#565d6d",
                      fontSize: 14,
                      mb: 3,
                    }}
                  >
                    Overall assessment of applicant's profile.
                  </Typography>

                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "#376fc8",
                        fontSize: 40,
                        lineHeight: "48px",
                        mb: 1,
                      }}
                    >
                      84/100
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 18,
                      }}
                    >
                      Overall Score
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {evaluationScores.map((score, index) => (
                      <Box key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 500,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {score.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 500,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {score.percentage}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={score.percentage}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            bgcolor: "#f0f4fb",
                            "& .MuiLinearProgress-bar": {
                              bgcolor: "#376fc8",
                              borderRadius: 1,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              {/* Documents Card */}
              <Card
                sx={{
                  border: "1px solid #dee1e6",
                  boxShadow:
                    "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 20,
                      letterSpacing: "-0.50px",
                      color: "#171a1f",
                      mb: 3,
                    }}
                  >
                    Documents
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {documents.map((doc, index) => {
                      const IconComponent = doc.icon;
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 1.5,
                            borderBottom:
                              index < documents.length - 1
                                ? "1px solid #e5e7eb"
                                : "none",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <IconComponent size={20} color="#565d6d" />
                            <Box>
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  color: "#171a1f",
                                  fontSize: 16,
                                }}
                              >
                                {doc.name}
                              </Typography>
                              <Typography
                                sx={{
                                  fontWeight: 400,
                                  color: "#565d6d",
                                  fontSize: 14,
                                }}
                              >
                                {doc.status}
                              </Typography>
                            </Box>
                          </Box>
                          <IconButton size="small">
                            <Download size={20} />
                          </IconButton>
                        </Box>
                      );
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* API Check Results Card */}
            <Card
              sx={{
                border: "1px solid #dee1e6",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 20,
                    letterSpacing: "-0.50px",
                    color: "#171a1f",
                    mb: 3,
                  }}
                >
                  API Check Results
                </Typography>

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
                          Check Name
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
                          Date
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                          }}
                        >
                          Notes
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {apiCheckResults.map((result, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              fontWeight: 500,
                              color: "#171a1f",
                              fontSize: 14,
                            }}
                          >
                            {result.name}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={result.status}
                              size="small"
                              sx={{
                                bgcolor: result.statusColor,
                                color: result.textColor,
                                borderRadius: "13px",
                                border: "1px solid black",

                                fontWeight: 500,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#565d6d",
                              fontSize: 14,
                            }}
                          >
                            {result.date}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#565d6d",
                              fontSize: 14,
                            }}
                          >
                            {result.notes}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>

            {/* Exception Flags Card */}
            <Card
              sx={{
                border: "1px solid white",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  <CircleAlert size={24} color="#171a1f" />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 20,
                      letterSpacing: "-0.50px",
                      color: "#171a1f",
                    }}
                  >
                    Exception Flags
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                  {exceptionFlags.map((flag, index) => {
                    const IconComponent = flag.icon;
                    return (
                      <Chip
                        key={index}
                        icon={<IconComponent size={16} />}
                        label={flag.label}
                        sx={{
                          bgcolor: flag.color,
                          color: "white",
                          borderRadius: "15px",
                          border: "1px solid black",
                          px: 2,
                          py: 1,

                          fontWeight: 500,
                          "& .MuiChip-icon": {
                            color: "white",
                          },
                        }}
                      />
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Right Sidebar */}
          <Box
            sx={{
              width: 350,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Comments Card */}
            <Card
              sx={{
                border: "1px solid #dee1e6",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <MessageSquareText size={20} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 18,
                      color: "#171a1f",
                    }}
                  >
                    Comments
                  </Typography>
                </Box>

                <TextField
                  placeholder="Add a new comment..."
                  multiline
                  rows={3}
                  fullWidth
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-root": {},
                  }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mb: 3,
                    bgcolor: "#376fc8",
                    py: 1,
                    textTransform: "none",

                    fontWeight: 500,
                    "&:hover": {
                      bgcolor: "#2d5ba3",
                    },
                  }}
                >
                  Post Comment
                </Button>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {comments.map((comment, index) => (
                    <Box
                      key={index}
                      sx={{
                        pb: 2,
                        borderBottom:
                          index < comments.length - 1
                            ? "1px solid #e5e7eb"
                            : "none",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                        }}
                      >
                        <Avatar
                          src={comment.avatar}
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: comment.bgColor,
                          }}
                        >
                          {comment.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mb: 0.5,
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: 14,
                                color: "#171a1f",
                              }}
                            >
                              {comment.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: 12,
                                color: "#565d6d",
                              }}
                            >
                              {comment.date}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: 14,
                              color: "#171a1f",
                              lineHeight: "23px",
                            }}
                          >
                            {comment.message}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Decision History */}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <History size={20} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 18,
                      color: "#171a1f",
                    }}
                  >
                    Decision History
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {decisionHistory.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          bgcolor: "#376fc8",
                          borderRadius: "2px",
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: 14,
                            color: "#171a1f",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: 12,
                            color: "#565d6d",
                          }}
                        >
                          {item.date}
                        </Typography>
                        {item.by && (
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: 12,
                              color: "#565d6d",
                            }}
                          >
                            {item.by}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ width: 190, height: 157 }}
                    alt="Virtual assistant"
                    src="/virtual-assistant-2-1.svg"
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
