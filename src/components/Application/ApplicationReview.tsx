import React from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";

const steps = [
  "Personal Details",
  "Contact Info",
  "Employment",
  "Documents",
  "Review",
];

export const ApplicationReview: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, submitApplication } = useApplication();

  const handleSubmit = () => {
    submitApplication();
    navigate("/application/tracker");
  };

  const handleBack = () => {
    navigate("/application/documents");
  };

  if (!currentApplication) {
    navigate("/loan-selection");
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stepper activeStep={4} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Review Your Application
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please review all information before submitting your application.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Personal Details
                </Typography>
                <Box sx={{ "& > *": { mb: 1 } }}>
                  <Typography variant="body2">
                    <strong>Name:</strong>{" "}
                    {currentApplication.personalDetails.firstName}{" "}
                    {currentApplication.personalDetails.middleName}{" "}
                    {currentApplication.personalDetails.lastName}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Date of Birth:</strong>{" "}
                    {currentApplication.personalDetails.dateOfBirth}
                  </Typography>
                  <Typography variant="body2">
                    <strong>SSN:</strong> ***-**-
                    {currentApplication.personalDetails.ssn.slice(-4)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Box sx={{ "& > *": { mb: 1 } }}>
                  <Typography variant="body2">
                    <strong>Email:</strong>{" "}
                    {currentApplication.contactInfo.email}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Phone:</strong>{" "}
                    {currentApplication.contactInfo.phone}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Address:</strong>{" "}
                    {currentApplication.contactInfo.address},{" "}
                    {currentApplication.contactInfo.city},{" "}
                    {currentApplication.contactInfo.state}{" "}
                    {currentApplication.contactInfo.zipCode}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Employment & Income
                </Typography>
                <Box sx={{ "& > *": { mb: 1 } }}>
                  <Typography variant="body2">
                    <strong>Employment Status:</strong>{" "}
                    {currentApplication.employmentInfo.status}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Primary Income Source:</strong>{" "}
                    {currentApplication.employmentInfo.primaryIncomeSource}
                  </Typography>
                  {currentApplication.employmentInfo.annualIncome && (
                    <Typography variant="body2">
                      <strong>Annual Income:</strong> $
                      {currentApplication.employmentInfo.annualIncome.toLocaleString()}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Documents ({currentApplication.documents.length} uploaded)
                </Typography>
                {currentApplication.documents.map((doc) => (
                  <Box
                    key={doc.id}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <FileText size={16} className="mr-2" />
                    <Typography variant="body2">
                      {doc.name} ({(doc.size / 1024).toFixed(1)} KB)
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            size="large"
            sx={{ px: 4 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            size="large"
            sx={{
              px: 4,
              bgcolor: "#4caf50",
              "&:hover": { bgcolor: "#388e3c" },
            }}
          >
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
