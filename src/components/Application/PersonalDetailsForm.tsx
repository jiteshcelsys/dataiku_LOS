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
import { labelStyle } from "../../Helper/useDrawerToggle";

const employmentStatuses = [
  "Full-time Employee",
  "Part-time Employee",
  "Self-employed",
  "Unemployed",
  "Retired",
  "Student",
];

const Loan_terms = [
  "12 months",
  "24 months",
  "36 months",
  "48 months",
  "60 months",
];

const Loan_purposes = [
  "Personal Loan",
  "Auto Loan",
  "Business Loan",
  "Mortgage",
  "Line of Credit",
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
        <Typography
          variant="h4"
          gutterBottom
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
          Loan Application Form
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please fill out the form below to apply for a loan. All fields are
          required unless otherwise noted.
        </Typography>

        {/* Personal Details */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, mt: 2, mb: 2.5 }}
        >
          Personal Details
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item size={4}>
            <Typography variant="body1" sx={labelStyle}>
              First Name
            </Typography>

            <TextField
              fullWidth
              // label="First Name"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange("firstName")}
              required
            />
          </Grid>
          <Grid item size={4}>
            <Typography variant="body1" sx={labelStyle}>
              Middle Name (Optional)
            </Typography>
            <TextField
              fullWidth
              // label="Middle Name (Optional)"
              placeholder="Doe"
              value={formData.middleName}
              onChange={handleChange("middleName")}
            />
          </Grid>
          <Grid item size={4}>
            <Typography variant="body1" sx={labelStyle}>
              Last Name
            </Typography>
            <TextField
              fullWidth
              // label="Last Name"
              placeholder="Smith"
              value={formData.lastName}
              onChange={handleChange("lastName")}
              required
            />
          </Grid>
        </Grid>
        <Grid item size={12}>
          <Typography variant="body1" sx={labelStyle}>
            Date of Birth
          </Typography>
          <TextField
            fullWidth
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange("dateOfBirth")}
            required
          />
        </Grid>
        <Grid item size={12} mt={3}>
          <Typography variant="body1" sx={labelStyle}>
            Social Security Number / Social Insurance Number
          </Typography>
          <TextField
            fullWidth
            // label="SSN / SIN"
            value={formData.ssn}
            onChange={handleChange("ssn")}
            placeholder="XXX-XX-XXXX (US) or XXX-XXX-XXX (CA)"
            required
          />
        </Grid>

        {/* Contact Info */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 600, mt: 2, mb: 2.5 }}
        >
          Contact Information
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item size={6}>
            <Typography variant="body1" sx={labelStyle}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              // label="Email"
              placeholder="john.smith@example.com"
              value={formData.email}
              onChange={handleChange("email")}
              required
            />
          </Grid>
          <Grid item size={6}>
            <Typography variant="body1" sx={labelStyle}>
              Phone Number
            </Typography>
            <TextField
              fullWidth
              // label="Phone"
              placeholder="(XXX) XXX-XXXX"
              value={formData.phone}
              onChange={handleChange("phone")}
              required
            />
          </Grid>
          <Grid item size={12}>
            <Typography variant="body1" sx={labelStyle}>
              Street Address
            </Typography>
            <TextField
              fullWidth
              // label="Street Address"
              placeholder="123 Main St"
              value={formData.street}
              onChange={handleChange("street")}
              required
            />
          </Grid>
          <Grid item size={4}>
            <Typography variant="body1" sx={labelStyle}>
              City
            </Typography>
            <TextField
              fullWidth
              // label="City"
              placeholder="Anytown"
              value={formData.city}
              onChange={handleChange("city")}
              required
            />
          </Grid>
          <Grid item size={4}>
            <Typography variant="body1" sx={labelStyle}>
              State / Province
            </Typography>
            <TextField
              fullWidth
              // label="State / Province"
              placeholder="CA"
              value={formData.state}
              onChange={handleChange("state")}
              required
            />
          </Grid>
          <Grid item size={4}>
            <Typography variant="body1" sx={labelStyle}>
              Zip / Postal Code
            </Typography>
            <TextField
              fullWidth
              placeholder="90210"
              // label="Zip / Postal Code"
              value={formData.zipCode}
              onChange={handleChange("zipCode")}
              required
            />
          </Grid>
        </Grid>

        {/* Employment */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Employment & Income Information
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item size={6}>
            <Typography variant="body1" sx={labelStyle}>
              Employment Status
            </Typography>
            <TextField
              fullWidth
              select
              // label="Select Status"
              label={formData.employmentStatus ? null : "Select Status"}
              value={formData.employmentStatus}
              onChange={handleChange("employmentStatus")}
              // required
              defaultValue="Student"
              // helperText="Please select your Employment Status"
            >
              {employmentStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item size={6}>
            <Typography variant="body1" sx={labelStyle}>
              Primary Income Source
            </Typography>
            <TextField
              fullWidth
              select
              // label="Select Source"
              label={formData.primaryIncomeSource ? null : "Select Source"}
              value={formData.primaryIncomeSource}
              defaultValue="Student"
              // helperText="Please select your Income Source"
              onChange={handleChange("primaryIncomeSource")}
              // required
            >
              {incomeSources.map((src) => (
                <MenuItem key={src} value={src}>
                  {src}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item size={12}>
            <Typography variant="body1" sx={labelStyle}>
              Annual Income($)
            </Typography>
            <TextField
              fullWidth
              type="number"
              // label="Annual Income"
              placeholder="e.g., 75000"
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
          <Grid item size={6}>
            <Typography variant="body1" sx={labelStyle}>
              Loan Amount($)
            </Typography>
            <TextField
              fullWidth
              // label="Loan Amount"
              placeholder="e.g., 10000"
              type="text"
              value={formData.loanAmount}
              onChange={handleChange("loanAmount")}
              required
            />
          </Grid>
          <Grid item size={6}>
            <Typography variant="body1" sx={labelStyle}>
              Loan Term
            </Typography>
            <TextField
              fullWidth
              select
              // label="Select term"
              label={formData.loanTerm ? null : "Select Term"}
              value={formData.loanTerm}
              onChange={handleChange("loanTerm")}
              // required
              defaultValue="Student"
              // helperText="Please select your Employment Status"
            >
              {Loan_terms.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item size={12}>
            <Typography variant="body1" sx={labelStyle}>
              Loan Purpose
            </Typography>
            <TextField
              fullWidth
              select
              label={formData.loanPurpose ? null : "Select Purpose"}
              value={formData.loanPurpose}
              onChange={handleChange("loanPurpose")}
              defaultValue=""
            >
              <MenuItem value="" disabled>
                Select Purpose
              </MenuItem>
              {Loan_purposes.map((purpose) => (
                <MenuItem key={purpose} value={purpose}>
                  {purpose}
                </MenuItem>
              ))}
            </TextField>
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
