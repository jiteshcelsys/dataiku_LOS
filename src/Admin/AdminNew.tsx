import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Collapse,
  IconButton,
  Paper,
  Container,
  useMediaQuery,
} from "@mui/material";
import {
  CheckCircle,
  ExpandMore,
  ExpandLess,
  ErrorOutline,
} from "@mui/icons-material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ACC1",
    },
    secondary: {
      main: "#FF9800",
    },
    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF9800",
    },
  },
});

const RiskGauge: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // mobile check

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
      <Box
        position="relative"
        width={{ xs: 150, sm: 200, md: 250 }} // responsive width
        height={{ xs: 90, sm: 120, md: 150 }} // responsive height
      >
        <svg
          viewBox="0 0 200 120"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="25%" stopColor="#8BC34A" />
              <stop offset="50%" stopColor="#FFEB3B" />
              <stop offset="75%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#F44336" />
            </linearGradient>
          </defs>

          {/* Gauge Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Tick Marks */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (180 / 6) * i + 180; // divide into 6 ticks
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + 80 * Math.cos(rad);
            const y1 = 100 + 80 * Math.sin(rad);
            const x2 = 100 + 65 * Math.cos(rad);
            const y2 = 100 + 65 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}

          {/* Needle */}
          <line
            x1="100"
            y1="100"
            x2="70"
            y2="60"
            stroke="#333"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="5" fill="#333" />
        </svg>

        {/* MIN / MAX labels */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            left: -10,
            bottom: -10,
            fontWeight: 600,
            color: "success.main",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
          }}
        >
          MIN
        </Typography>
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            right: -10,
            bottom: -10,
            fontWeight: 600,
            color: "error.main",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
          }}
        >
          MAX
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        display="flex"
        flexDirection={isSmall ? "column" : "row"}
        gap={2}
        mt={2}
        width="100%"
        // justifyContent="center"
      >
        <Button
          variant="contained"
          color="success"
          size={isSmall ? "medium" : "large"}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          color="error"
          size={isSmall ? "medium" : "large"}
        >
          Decline
        </Button>
      </Box>
    </Box>
  );
};

const AdminNew: React.FC = () => {
  const [fsraHistoryOpen, setFsraHistoryOpen] = useState(false);
  const [otherRegulatorsOpen, setOtherRegulatorsOpen] = useState(false);
  const [Application, setApplication] = useState(false);
  const navigate = useNavigate();
  const handleDSportal = () => {
    navigate("/admin/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#ffffffff",
          // width: "100",
          height: "100vh",
        }}
      >
        {/* Header */}
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ bgcolor: "transparent", minHeight: "fit-content !important" }}
        >
          <Toolbar
            disableGutters
            sx={{ p: 0, minHeight: "fit-content !important" }}
          >
            {/* Left Section */}
            <Box
              sx={{
                // bgcolor: "#5C6BC0", // purple shade
                px: 2,
                py: 0,
                fontWeight: 100,
                color: "white",
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center", // center logo vertically
              }}
              onClick={handleDSportal}
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

            {/* Right Section */}
            <Box
              sx={{
                bgcolor: "#0097A7", // teal shade
                px: 2,
                py: 1,
                fontWeight: 600,
                color: "white",
                flex: 1, // take remaining space
              }}
            >
              CLOS
            </Box>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth={false}
          sx={{
            height: "calc(100vh - 64px )",
            position: "relative",
            top: "64px",
            paddingBlock: "20px",
          }}
        >
          <Grid container spacing={3}>
            {/* Left Sidebar */}
            <Grid
              // item
              size={{ xs: 12, sm: 12, md: 3, lg: 2.5 }}
              sx={{
                // flex: "0 0 250px",
                background: "#ECECEC",
                // background: "#aa1616ff",
                padding: "12px",
                // height: "auto",
                alignSelf: "flex-start",
              }}
            >
              {/* Risk Rating */}
              <Card sx={{ mb: 2, boxShadow: "none" }}>
                <CardContent sx={{ paddingBottom: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: "#666" }}
                  >
                    Risk Rating
                  </Typography>
                  <Chip
                    label="Moderate"
                    sx={{
                      bgcolor: "#FF9800",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  />
                </CardContent>
              </Card>

              {/* Application Actions */}
              <Card sx={{ boxShadow: "none", mt: 5 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: "#666" }}
                  >
                    Application Actions
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap={1}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#4CAF50",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#45a049" },
                        width: "fit-content", // 👈 button adapts to text width
                        px: 3,
                        borderRadius: 2,
                        // alignSelf: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FF9800",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#f57c00" },
                        width: "fit-content", // 👈 button adapts to text width
                        px: 3,
                        borderRadius: 2,
                        alignSelf: "flex-start",
                      }}
                    >
                      Conditional Approval
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#F44336",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#d32f2f" },
                        width: "fit-content", // 👈 button adapts to text width
                        px: 3,
                        borderRadius: 2,
                        alignSelf: "flex-start",
                      }}
                    >
                      Refer To Enforcement
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#F44336",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#d32f2f" },
                        width: "fit-content", // 👈 button adapts to text width
                        px: 3,
                        borderRadius: 2,
                      }}
                    >
                      Deny
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Main Content */}
            <Grid
              size={{ xs: 12, sm: 12, md: 9, lg: 5.5 }}
              order={{ xs: 3, md: 2 }}
            >
              <Card sx={{ mb: 1, boxShadow: "none" }}>
                <CardContent>
                  <Grid
                    container
                    spacing={4}
                    alignItems="flex-start"
                    sx={{ justifyContent: "space-around" }}
                  >
                    {/* Risk Gauge */}
                    {/* @ts-ignore */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <RiskGauge />
                      </Box>
                    </Grid>

                    {/* Applicant Details */}
                    {/* @ts-ignore */}
                    <Grid item xs={12} md={8} lg={9}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "stretch",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{ fontWeight: 600, color: "#666", mb: 2 }}
                        >
                          Applicant Details
                        </Typography>

                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 1,
                            width: "100%",
                          }}
                        >
                          <Grid container spacing={2}>
                            {/* Labels column */}
                            {/* @ts-ignore */}
                            <Grid item xs={12} sm={4}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Name:
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Date of Birth:
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Mailing Address:
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Phone:
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Email:
                              </Typography>
                            </Grid>

                            {/* Values column */}
                            {/* @ts-ignore */}
                            <Grid item xs={12} sm={8}>
                              <Typography variant="body2" fontWeight={500}>
                                John Doe
                              </Typography>
                              <Typography variant="body2" fontWeight={500}>
                                November 1, 1991
                              </Typography>
                              <Typography variant="body2" fontWeight={500}>
                                25 Sheppard Avenue, Suite 100
                                <br />
                                Toronto, ON M2N 6S6
                              </Typography>
                              <Typography variant="body2" fontWeight={500}>
                                647-555-5555
                              </Typography>
                              <Typography variant="body2" fontWeight={500}>
                                john.doe@email.com
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* FSRA History */}
              <Box sx={{ background: "#ECECEC", padding: 2 }}>
                <Card sx={{ mb: 0.7, boxShadow: "none" }}>
                  <CardContent sx={{ padding: "16px !important" }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircle sx={{ color: "success.main", mr: 1 }} />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: "#666" }}
                        >
                          CLOS History
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() => setFsraHistoryOpen(!fsraHistoryOpen)}
                      >
                        {fsraHistoryOpen ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </Box>
                    <Collapse in={fsraHistoryOpen}>
                      <Box mt={2}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          Section description
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            mt: 2,
                            p: 1.5,
                            bgcolor: "#f5f5f5",
                          }}
                        >
                          No actions found.
                        </Typography>
                        <Button
                          variant="text"
                          color="primary"
                          sx={{ mt: 1, textTransform: "none" }}
                        >
                          Close
                        </Button>
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>

                {/* Other Regulators */}
                <Card sx={{ mb: 0.5, boxShadow: "none" }}>
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center">
                        <ErrorOutline sx={{ color: "error.main", mr: 1 }} />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: "#666" }}
                        >
                          Other Regulators
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() =>
                          setOtherRegulatorsOpen(!otherRegulatorsOpen)
                        }
                      >
                        {otherRegulatorsOpen ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </Box>
                    <Collapse in={otherRegulatorsOpen}>
                      <Box mt={2}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          This section contains information that was found
                          published by other regulators that may pose a risk.
                        </Typography>
                        <Paper
                          sx={{
                            p: 2,
                            mt: 2,
                            bgcolor: "#f5f5f5",
                            // border: "1px solid #e0e0e0",
                            boxShadow: "none",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            fontWeight={600}
                            gutterBottom
                          >
                            ONTARIO SECURITIES COMMISSION - ORDER - AUGUST 27,
                            2015
                          </Typography>
                          <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ mt: 1 }}
                          >
                            <strong>Key Words Identified:</strong> notice of
                            hearing, statement of allegations, settlement
                            agreement, settlement, failure, order, ontario
                            securities commission, temporary order, suspended
                          </Typography>
                          <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ mt: 1 }}
                          >
                            <strong>Case Age:</strong> 7 years
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              mt: 2,
                              bgcolor: "#9C27B0",
                              textTransform: "none",
                              fontWeight: 600,
                              "&:hover": { bgcolor: "#7B1FA2" },
                              color: "#fff",
                            }}
                          >
                            Open Record
                          </Button>
                        </Paper>
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Right Sidebar */}
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 4 }}
              sx={{ background: "#ECECEC" }}
              padding="12px"
              order={{ xs: 2, md: 3 }}
            >
              {/* Background Check */}
              <Card sx={{ mb: 0.5, boxShadow: "none" }}>
                <CardContent sx={{ padding: "16px !important" }}>
                  <Box display="flex" alignItems="center">
                    <ErrorOutline sx={{ color: "error.main", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#666" }}
                    >
                      Background Check
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Credit Check */}
              <Card sx={{ mb: 0.5, boxShadow: "none" }}>
                <CardContent sx={{ padding: "16px !important" }}>
                  <Box display="flex" alignItems="center">
                    <CheckCircle sx={{ color: "success.main", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#666" }}
                    >
                      Credit Check
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card sx={{ mb: 0.5, boxShadow: "none" }}>
                <CardContent sx={{ padding: "16px !important" }}>
                  <Box display="flex" alignItems="center">
                    <CheckCircle sx={{ color: "success.main", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#666" }}
                    >
                      Social Media
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Application */}
              <Card sx={{ mb: 0.5, boxShadow: "none" }}>
                <CardContent sx={{ padding: "16px !important" }}>
                  <Box display="flex" alignItems="center">
                    <ErrorOutline sx={{ color: "error.main", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#666" }}
                    >
                      Application
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    This section identifies components of application
                    declarations that may pose a risk.
                  </Typography>
                  {Application ? (
                    <>
                      <Box
                        mt={2}
                        p={2}
                        sx={{
                          bgcolor: "#f5f5f5",
                          borderRadius: 1,
                          // border: "1px solid #e0e0e0",
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          gutterBottom
                        >
                          HAVE YOU EVER BEEN FOUND GUILTY OF MISCONDUCT BY ANY
                          REGULATORY BODY?
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 1 }}>
                          <strong>Answer:</strong> Yes
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 1 }}>
                          <strong>Details:</strong> I was previously disciplined
                          by a regulator in Manitoba because of my continuing
                          education.
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            mt: 2,
                            bgcolor: "#9C27B0",
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": { bgcolor: "#7B1FA2" },
                            color: "#fff",
                          }}
                        >
                          Open Record
                        </Button>
                      </Box>
                    </>
                  ) : null}

                  <Button
                    variant="text"
                    color="primary"
                    sx={{ mt: 2, textTransform: "none" }}
                    onClick={() => {
                      setApplication(!Application);
                    }}
                  >
                    {Application ? "Close" : "Open"}
                  </Button>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card sx={{ boxShadow: "none" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <ErrorOutline sx={{ color: "error.main", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#666" }}
                    >
                      Documents
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    This section identifies documents that may present a risk.
                  </Typography>
                  <Box
                    sx={{
                      p: 2,
                      mt: 2,
                      bgcolor: "#f5f5f5",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      gutterBottom
                    >
                      APPLICATION DOCUMENT
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Information related to the application document.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 1,
                        bgcolor: "#9C27B0",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#7B1FA2" },
                        color: "#fff",
                      }}
                    >
                      Open Record
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AdminNew;
