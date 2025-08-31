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

export const ContactInfoForm: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  useEffect(() => {
    if (currentApplication?.contactInfo) {
      setFormData(currentApplication.contactInfo);
    }
  }, [currentApplication]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleNext = () => {
    updateApplication({
      contactInfo: formData
    });
    navigate('/application/employment');
  };

  const handleBack = () => {
    navigate('/application/personal-details');
  };

  if (!currentApplication) {
    navigate('/loan-selection');
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stepper activeStep={1} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Contact Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="john.smith@example.com"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange('phone')}
              placeholder="(XXX) XXX-XXXX"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Street Address"
              value={formData.address}
              onChange={handleChange('address')}
              placeholder="123 Main St"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="City"
              value={formData.city}
              onChange={handleChange('city')}
              placeholder="Anytown"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="State / Province"
              value={formData.state}
              onChange={handleChange('state')}
              placeholder="CA"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Zip / Postal Code"
              value={formData.zipCode}
              onChange={handleChange('zipCode')}
              placeholder="90210"
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
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
            onClick={handleNext}
            size="large"
            sx={{ px: 4 }}
          >
            Next: Employment Information
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};