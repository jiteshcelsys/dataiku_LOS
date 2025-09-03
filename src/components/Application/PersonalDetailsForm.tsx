import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";

const employmentStatuses = [
  "Full-time Employee",
  "Part-time Employee",
  "Self-employed",
  "Unemployed",
  "Retired",
  "Student",
];

const incomeSources = [
  "Employment",
  "Self-employment",
  "Investment Income",
  "Retirement Benefits",
  "Other",
];

export const PersonalDetailsForm: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();

  const [formData, setFormData] = useState({
    // Personal
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    ssn: "",
    // Contact
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    // Employment & Income
    employmentStatus: "",
    primaryIncomeSource: "",
    annualIncome: "",
    // loan details
    loanAmount: "",
    loanPurpose: "",
    loanTerm: "",
    // Terms
    termsAccepted: false,
  });

  useEffect(() => {
    if (!currentApplication) {
      navigate("/loan-selection");
    } else {
      setFormData((prev) => ({ ...prev, ...currentApplication }));
      // navigate("/documents");
    }
  }, [currentApplication, navigate]);

  useEffect(() => {
    console.log("Terms Accepted:", formData.termsAccepted);
  }, [formData.termsAccepted]);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      // console.log(`Field ${field} changed to ${e.target.value}`);
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    updateApplication(formData);
    console.log("Submitting loan application:", formData);
    // navigate("/application/success");
    navigate("/application/documents");
  };

  if (!currentApplication) {
    navigate("/loan-selection");
    return null;
  }

  // ✅ Utility function to check required fields
  const isFormComplete = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "ssn",
      "email",
      "phone",
      "street",
      "city",
      "state",
      "zipCode",
      "employmentStatus",
      "primaryIncomeSource",
      "annualIncome",
      "loanAmount",
      "loanPurpose",
      "loanTerm",
    ];

    return requiredFields.every(
      (field) => formData[field as keyof typeof formData]
    );
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Loan Application Form
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please fill out the form below to apply for a loan. All fields are
          required unless otherwise noted.
        </Typography>

        {/* Personal Details */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
          Personal Details
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={handleChange("firstName")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange("lastName")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Middle Name (Optional)"
              value={formData.middleName}
              onChange={handleChange("middleName")}
            />
          </Grid>
        </Grid>
        <Box mb={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Datef of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange("dateOfBirth")}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} mt={3}>
            <TextField
              fullWidth
              label="SSN / SIN"
              value={formData.ssn}
              onChange={handleChange("ssn")}
              placeholder="XXX-XX-XXXX (US) or XXX-XXX-XXX (CA)"
              required
            />
          </Grid>
        </Box>

        {/* Contact Info */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Contact Information
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              value={formData.email}
              onChange={handleChange("email")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              value={formData.phone}
              onChange={handleChange("phone")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Street Address"
              value={formData.street}
              onChange={handleChange("street")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="City"
              value={formData.city}
              onChange={handleChange("city")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="State / Province"
              value={formData.state}
              onChange={handleChange("state")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Zip / Postal Code"
              value={formData.zipCode}
              onChange={handleChange("zipCode")}
              required
            />
          </Grid>
        </Grid>

        {/* Employment */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Employment & Income
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Employment Status"
              value={formData.employmentStatus}
              onChange={handleChange("employmentStatus")}
              required
              defaultValue="Student"
              helperText="Please select your Employment Status"
            >
              {employmentStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Primary Income Source"
              value={formData.primaryIncomeSource}
              defaultValue="Student"
              helperText="Please select your Income Source"
              onChange={handleChange("primaryIncomeSource")}
              required
            >
              {incomeSources.map((src) => (
                <MenuItem key={src} value={src}>
                  {src}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Annual Income"
              value={formData.annualIncome}
              onChange={handleChange("annualIncome")}
              required
            />
          </Grid>
        </Grid>

        {/* LOAN REQUEST DETAILS */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Loan Request Details
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Loan Amount"
              type="number"
              value={formData.loanAmount}
              onChange={handleChange("loanAmount")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Loan Term (in months)"
              value={formData.loanTerm}
              onChange={handleChange("loanTerm")}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              label="Loan Purpose"
              value={formData.loanPurpose}
              onChange={handleChange("loanPurpose")}
              required
            />
          </Grid>
        </Grid>
        {/* Terms and condition */}
        <Box sx={{ mt: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    termsAccepted: e.target.checked,
                  }))
                }
              />
            }
            label="I accept the Terms & Conditions"
          />
        </Box>
        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            size="large"
            sx={{ px: 4 }}
            disabled={!formData.termsAccepted}
            // disabled={!isFormComplete() || !formData.termsAccepted}
          >
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
