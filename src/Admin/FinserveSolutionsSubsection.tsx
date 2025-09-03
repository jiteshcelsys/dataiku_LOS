import {
  BarChart3,
  CheckCircle,
  ClipboardList,
  Clock,
  ExternalLink,
  FileDown,
  Home,
  Search,
  Settings,
  Users,
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
  FormControl,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
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

export const FinserveSolutionsSubsection = (): JSX.Element => {
  const metricCards = [
    {
      title: "Total Applications",
      value: "1,245",
      subtitle: "Last 30 days",
      icon: ClipboardList,
      bgColor: "#f3f6fc",
    },
    {
      title: "Approved Loans",
      value: "890",
      subtitle: "Since last month",
      icon: CheckCircle,
      bgColor: "#ebefdc",
    },
    {
      title: "Pending Review",
      value: "120",
      subtitle: "Currently in queue",
      icon: Clock,
      bgColor: "#ffffff",
    },
    {
      title: "Rejected Applications",
      value: "85",
      subtitle: "Due to various reasons",
      icon: X,
      bgColor: "#ffffff",
    },
  ];

  const navigationItems = [
    {
      label: "Loan Applications",
      icon: Home,
      active: true,
    },
    {
      label: "Customer Accounts",
      icon: Users,
      active: false,
    },
    {
      label: "Analytics & Reports",
      icon: BarChart3,
      active: false,
    },
    {
      label: "Settings",
      icon: Settings,
      active: false,
    },
  ];

  const loanApplications = [
    {
      applicant: {
        name: "Anya Sharma",
        avatar: "/rectangle.png",
        bgColor: "#fde5e6",
      },
      loanType: "Mortgage Loan",
      amount: "$350,000",
      stage: "Under Review",
      flag: {
        text: "Missing Documents",
        bgColor: "#f5f5f5",
        textColor: "#1e2128",
      },
      submissionDate: "2024-07-28",
    },
    {
      applicant: {
        name: "Ethan Chen",
        avatar: "/rectangle-1.png",
        bgColor: "#e6eefc",
      },
      loanType: "Business Loan",
      amount: "$120,000",
      stage: "Application Submitted",
      flag: null,
      submissionDate: "2024-07-27",
    },
    {
      applicant: {
        name: "Olivia Davis",
        avatar: "/rectangle-2.png",
        bgColor: "#e0fbec",
      },
      loanType: "Personal Loan",
      amount: "$25,000",
      stage: "Approved",
      flag: {
        text: "High Risk",
        bgColor: "#788740",
        textColor: "#ffffff",
      },
      submissionDate: "2024-07-26",
    },
    {
      applicant: {
        name: "Liam Johnson",
        avatar: "/rectangle-3.png",
        bgColor: "#e5eaf9",
      },
      loanType: "Auto Loan",
      amount: "$45,000",
      stage: "Rejected",
      flag: {
        text: "Fraud Alert",
        bgColor: "#e85963",
        textColor: "#ffffff",
      },
      submissionDate: "2024-07-25",
    },
    {
      applicant: {
        name: "Sophia Rodriguez",
        avatar: "/rectangle-4.png",
        bgColor: "#ecfcd8",
      },
      loanType: "Mortgage Loan",
      amount: "$420,000",
      stage: "Pending Documents",
      flag: null,
      submissionDate: "2024-07-24",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "1080px",
        bgcolor: "#fafafb",
        overflow: "hidden",
        boxShadow: "0px 3px 6px rgba(18, 15, 40, 0.12)",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
        {/* Sidebar */}
        <Paper
          sx={{
            width: 256,
            height: "100%",
            border: "1px solid #dee1e6",
            borderRadius: 0,
          }}
        >
          <Box sx={{ p: 1.5 }}>
            <img
              style={{ width: 198, height: 52 }}
              alt="Logo"
              src="/image.png"
            />
          </Box>

          <List sx={{ px: 1, py: 2 }}>
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    selected={item.active}
                    sx={{
                      borderRadius: 1,
                      mx: 1,
                      "&.Mui-selected": {
                        bgcolor: "grey.100",
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
                        color: item.active ? "#1e2128" : "#565d6d",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
            <Box sx={{ px: 2, py: 1, borderRadius: 1 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#565d6d",
                  fontSize: 14,
                }}
              >
                Need Help?
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {/* Top Navigation */}
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
            <Toolbar sx={{ justifyContent: "flex-end", gap: 2 }}>
              <TextField
                placeholder="Search all applications..."
                size="small"
                sx={{
                  width: 257,
                  "& .MuiInputBase-root": {
                    fontSize: 14,
                    color: "rgba(23, 26, 31, 0.4)",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={16} color="rgba(23, 26, 31, 0.4)" />
                    </InputAdornment>
                  ),
                }}
              />
              <Avatar
                src="/rectangle-5.png"
                sx={{ width: 36, height: 36, bgcolor: "#e6f8f3" }}
              />
            </Toolbar>
          </AppBar>

          {/* Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Metric Cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 3,
              }}
            >
              {metricCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Card
                    key={index}
                    sx={{
                      bgcolor: card.bgColor,
                      boxShadow:
                        "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                      border: "none",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            color: "#19191f",
                            fontSize: 14,
                            letterSpacing: "-0.35px",
                            lineHeight: "20px",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <IconComponent size={20} />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#19191f",
                          fontSize: 24,
                          lineHeight: "36px",
                          mb: 2,
                        }}
                      >
                        {card.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#565d6d",
                          fontSize: 12,
                          lineHeight: "16px",
                        }}
                      >
                        {card.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>

            {/* Filter Section */}
            <Card
              sx={{
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                border: "none",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#171a1f",
                    fontSize: 20,
                    lineHeight: "28px",
                    mb: 3,
                  }}
                >
                  Filter Loan Applications
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 3,
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#323743",
                        fontSize: 12,
                        lineHeight: "20px",
                        mb: 1,
                      }}
                    >
                      Applicant Name
                    </Typography>
                    <TextField
                      placeholder="Search by name..."
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          fontSize: 14,
                          color: "#565d6d",
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 14,
                        lineHeight: "20px",
                        mb: 1,
                      }}
                    >
                      Loan Type
                    </Typography>
                    <FormControl size="small" fullWidth>
                      <Select
                        displayEmpty
                        sx={{
                          fontSize: 14,
                          color: "#171a1f",
                        }}
                        renderValue={(value: unknown) =>
                          typeof value === "string" && value !== ""
                            ? value
                            : "Select type"
                        }
                      >
                        <MenuItem value="">Select type</MenuItem>
                        <MenuItem value="mortgage">Mortgage Loan</MenuItem>
                        <MenuItem value="business">Business Loan</MenuItem>
                        <MenuItem value="personal">Personal Loan</MenuItem>
                        <MenuItem value="auto">Auto Loan</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 14,
                        lineHeight: "20px",
                        mb: 1,
                      }}
                    >
                      Application Stage
                    </Typography>
                    <FormControl size="small" fullWidth>
                      <Select
                        displayEmpty
                        sx={{
                          fontSize: 14,
                          color: "#171a1f",
                        }}
                        renderValue={(value: unknown) =>
                          typeof value === "string" && value !== ""
                            ? value
                            : "Select stage"
                        }
                      >
                        <MenuItem value="">Select stage</MenuItem>
                        <MenuItem value="submitted">
                          Application Submitted
                        </MenuItem>
                        <MenuItem value="review">Under Review</MenuItem>
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="rejected">Rejected</MenuItem>
                        <MenuItem value="pending">Pending Documents</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#323743",
                        fontSize: 12,
                        lineHeight: "20px",
                        mb: 1,
                      }}
                    >
                      Loan Amount (min)
                    </Typography>
                    <TextField
                      defaultValue="$0"
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          fontSize: 14,
                          color: "#565d6d",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5 }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 1,

                      fontWeight: 500,
                      color: "#171a1f",
                      fontSize: 14,
                      textTransform: "none",
                    }}
                  >
                    Clear Filters
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: "#376fc8",

                      fontWeight: 500,
                      fontSize: 14,
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#2d5ba3",
                      },
                    }}
                  >
                    Apply Filters
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Applications Table */}
            <Card
              sx={{
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                border: "none",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#171a1f",
                      fontSize: 20,
                      lineHeight: "28px",
                    }}
                  >
                    Recent Loan Applications
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button
                      variant="outlined"
                      startIcon={<FileDown size={16} />}
                      sx={{
                        px: 1.5,
                        py: 1,

                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 14,
                        textTransform: "none",
                      }}
                    >
                      Bulk Export
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<BarChart3 size={16} />}
                      sx={{
                        px: 1.5,
                        py: 1,

                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 14,
                        textTransform: "none",
                      }}
                    >
                      Generate Report
                    </Button>
                  </Box>
                </Box>

                <TableContainer
                  component={Paper}
                  sx={{ border: "1px solid #dee1e6", borderRadius: 1 }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                            height: 48,
                          }}
                        >
                          Applicant
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                          }}
                        >
                          Loan Type
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                          }}
                        >
                          Amount
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                          }}
                        >
                          Stage
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                          }}
                        >
                          Flags/Exceptions
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                          }}
                        >
                          Submission Date
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontWeight: 500,
                            color: "#565d6d",
                            fontSize: 14,
                            lineHeight: "20px",
                          }}
                        >
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {loanApplications.map((application, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ py: 2.5 }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                              }}
                            >
                              <Avatar
                                src={application.applicant.avatar}
                                sx={{
                                  width: 32,
                                  height: 32,
                                  bgcolor: application.applicant.bgColor,
                                }}
                              />
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  color: "#171a1f",
                                  fontSize: 14,
                                  lineHeight: "20px",
                                }}
                              >
                                {application.applicant.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#171a1f",
                              fontSize: 14,
                              lineHeight: "20px",
                            }}
                          >
                            {application.loanType}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 500,
                              color: "#171a1f",
                              fontSize: 14,
                              lineHeight: "20px",
                            }}
                          >
                            {application.amount}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#171a1f",
                              fontSize: 14,
                              lineHeight: "20px",
                            }}
                          >
                            {application.stage}
                          </TableCell>
                          <TableCell>
                            {application.flag && (
                              <Chip
                                label={application.flag.text}
                                size="small"
                                sx={{
                                  bgcolor: application.flag.bgColor,
                                  color: application.flag.textColor,

                                  fontWeight: 600,
                                  fontSize: 12,
                                  lineHeight: "20px",
                                }}
                              />
                            )}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: 400,
                              color: "#171a1f",
                              fontSize: 14,
                              lineHeight: "20px",
                            }}
                          >
                            {application.submissionDate}
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="text"
                              endIcon={<ExternalLink size={16} />}
                              sx={{
                                px: 1,
                                py: 0.5,

                                fontWeight: 500,
                                color: "#171a1f",
                                fontSize: 14,
                                textTransform: "none",
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

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#565d6d",
                      fontSize: 14,
                      lineHeight: "20px",
                    }}
                  >
                    Showing 5 of 5 applications
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="outlined"
                      disabled
                      sx={{
                        px: 1.5,
                        py: 0.5,

                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 14,
                        textTransform: "none",
                        opacity: 0.5,
                      }}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        px: 1.5,
                        py: 0.5,

                        fontWeight: 500,
                        color: "#171a1f",
                        fontSize: 14,
                        textTransform: "none",
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
