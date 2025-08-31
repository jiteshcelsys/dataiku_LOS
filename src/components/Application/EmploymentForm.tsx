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
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../../context/ApplicationContext';

const steps = ['Personal Details', 'Contact Info', 'Employment', 'Documents', 'Review'];

const employmentStatuses = [
  'Full-time',
  'Part-time', 
  'Self-employed',
  'Retired',
  'Student',
  'Unemployed'
];

const incomeSourcess = [
  'Employment',
  'Self-employment',
  'Retirement',
  'Disability',
  'Investment',
  'Other'
];

export const EmploymentForm: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();
  const [formData, setFormData] = useState({
    status: '',
    primaryIncomeSource: '',
    annualIncome: ''
  });

  useEffect(() => {
    if (currentApplication?.employmentInfo) {
      setFormData({
        status: currentApplication.employmentInfo.status,
        primaryIncomeSource: currentApplication.employmentInfo.primaryIncomeSource,
        annualIncome: currentApplication.employmentInfo.annualIncome?.toString() || ''
      });
    }
  }, [currentApplication]);

  const handleChange = (field: string) => (e: any) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleNext = () => {
    updateApplication({
      employmentInfo: {
        status: formData.status,
        primaryIncomeSource: formData.primaryIncomeSource,
        annualIncome: formData.annualIncome ? parseFloat(formData.annualIncome) : undefined
      }
    });
    navigate('/application/documents');
  };

  const handleBack = () => {
    navigate('/application/contact-info');
  };

  if (!currentApplication) {
    navigate('/loan-selection');
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stepper activeStep={2} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Employment & Income Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Employment Status</InputLabel>
              <Select
                value={formData.status}
                onChange={handleChange('status')}
                label="Employment Status"
              >
                {employmentStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Primary Income Source</InputLabel>
              <Select
                value={formData.primaryIncomeSource}
                onChange={handleChange('primaryIncomeSource')}
                label="Primary Income Source"
              >
                {incomeSourcess.map((source) => (
                  <MenuItem key={source} value={source}>
                    {source}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Annual Income (Optional)"
              type="number"
              value={formData.annualIncome}
              onChange={handleChange('annualIncome')}
              placeholder="50000"
              InputProps={{
                startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>
              }}
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
            Next: Document Upload
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};