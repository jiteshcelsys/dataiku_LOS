import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  LinearProgress,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";
import {
  Car,
  CheckCircle,
  CheckIcon,
  Circle,
  Clock,
  FileText,
} from "lucide-react";

const applicationSteps = [
  { label: "Applied", description: "Application submitted and received" },
  {
    label: "Docs Review",
    description: "All required documents have been sucessfully received",
  },
  {
    label: "KYC/Credit Check",
    description:
      "Your application is currently undergoin an in-depth KYC(Know Your Customer) and credit assessment",
  },
  { label: "Decision", description: "Final decision pending" },
];

export const ApplicationTracker: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, offers, updateApplication } = useApplication();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (currentApplication?.status === "approved") {
      // Simulate progression through steps
      const timer1 = setTimeout(() => setCurrentStep(2), 1000);
      const timer2 = setTimeout(() => setCurrentStep(3), 2000);
      const timer3 = setTimeout(() => setCurrentStep(4), 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [currentApplication?.status]);

  const handleCheckStatus = () => {
    console.log("Checking application status...", currentApplication);
    updateApplication({ status: "approved" });
    if (currentApplication?.status === "approved") {
      navigate("/application/approved");
    } else if (currentApplication?.status === "draft") {
      navigate("/application/approved");
    }
  };

  if (!currentApplication) {
    navigate("/application/approved");
    return null;
  }

  const currentOffer = offers.find(
    (offer) => offer.applicationId === currentApplication.id
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper variant="outlined" sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          // sx={{ fontWeight: 600 }}
          // gutterBottom
          sx={{
            fontWeight: 600,
            top: 50,
            position: "sticky", // ✅ keeps it stuck
            // top: 0, // ✅ distance from top
            backgroundColor: "white", // ✅ avoid overlap
            zIndex: 10, // ✅ stay above form elements
            py: 2, // add padding if needed
          }}
        >
          Application Tracker
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          <Box sx={{ flex: { xs: "1 1 auto", sm: "0 0 40%" }, minWidth: 0 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Application Progress
            </Typography>

            <Stepper activeStep={currentStep} orientation="vertical">
              {applicationSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    StepIconComponent={({ active, completed }) => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: completed
                            ? "#1976d2"
                            : active
                              ? "#1976d2"
                              : "#e0e0e0",
                          color: "white",
                        }}
                      >
                        {completed ? (
                          <CheckIcon size={16} />
                        ) : (
                          <Circle size={4} fill="white" />
                        )}
                      </Box>
                    )}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {step.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Application Status
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500, mr: 2 }}>
                    Under Review
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "#fff3cd",
                      color: "#856404",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <Clock size={16} className="mr-1" />
                    <Typography variant="body2">In Progress</Typography>
                  </Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ mb: 1, height: 8, borderRadius: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  Loans approved in an average of 2-4 days. Each loan
                  application is unique and result times may vary.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Need Help?
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  If you have any questions or require assistance with your
                  application, we're ready to help.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    paddingBottom: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleCheckStatus}
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Message Support
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={handleCheckStatus}
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, padddingBottom: 2 }}
                  >
                    View Submitted Documents
                  </Button>
                </Box>

                <Alert severity="info" sx={{ mb: 4 }}>
                  <Typography variant="body2">
                    If you have any questions or require assistance with your
                    application, we're ready to help!
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2">
                      📧 support@celestial.com
                    </Typography>
                    <Typography variant="body2">📞 1 (800) 123-4567</Typography>
                  </Box>
                </Alert>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Paper>

      {/* <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Application Tracker
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Application Progress
          </Typography>

          <Stepper activeStep={currentStep} orientation="vertical">
            {applicationSteps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  StepIconComponent={({ active, completed }) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        bgcolor: completed
                          ? "#4caf50"
                          : active
                            ? "#1976d2"
                            : "#e0e0e0",
                        color: "white",
                      }}
                    >
                      {completed ? <CheckCircle size={16} /> : index + 1}
                    </Box>
                  )}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {step.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Application Status
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 500, mr: 2 }}>
                Under Review
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#fff3cd",
                  color: "#856404",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                <Clock size={16} className="mr-1" />
                <Typography variant="body2">In Progress</Typography>
              </Box>
            </Box>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{ mb: 1, height: 8, borderRadius: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              Loans approved in an average of 2-4 days. Each loan application is
              unique and result times may vary.
            </Typography>
          </CardContent>
        </Card>

        <Alert severity="info" sx={{ mb: 4 }}>
          <Typography variant="body2">
            If you have any questions or require assistance with your
            application, we're ready to help!
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">📧 support@celestial.com</Typography>
            <Typography variant="body2">📞 1 (800) 123-4567</Typography>
          </Box>
        </Alert>

        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Need Help?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          If you have any questions or require assistance with your application,
          we're ready to help.
        </Typography>

        <Button
          variant="contained"
          onClick={handleCheckStatus}
          size="large"
          fullWidth
          sx={{ py: 1.5 }}
        >
          Check Application Status
        </Button>
      </Paper> */}
    </Container>
  );
};
