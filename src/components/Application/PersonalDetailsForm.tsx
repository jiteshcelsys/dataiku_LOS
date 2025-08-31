import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../../context/ApplicationContext';

const steps = ['Personal Details', 'Contact Info', 'Employment', 'Documents', 'Review'];

export const PersonalDetailsForm: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    ssn: ''
  });

  useEffect(() => {
    if (currentApplication?.personalDetails) {
      setFormData(currentApplication.personalDetails);
    }
  }, [currentApplication]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleNext = () => {
    updateApplication({
      personalDetails: formData
    });
    navigate('/application/contact-info');
  };

  if (!currentApplication) {
    navigate('/loan-selection');
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stepper activeStep={0} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Loan Application Form
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please fill out the form below to apply for a loan. All fields are required unless otherwise noted.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
          Personal Details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Middle Name (Optional)"
              value={formData.middleName}
              onChange={handleChange('middleName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange('dateOfBirth')}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Social Security Number / Social Insurance Number"
              value={formData.ssn}
              onChange={handleChange('ssn')}
              placeholder="XXX-XX-XXXX (US) or XXX-XXX-XXX (CA)"
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleNext}
            size="large"
            sx={{ px: 4 }}
          >
            Next: Contact Information
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};