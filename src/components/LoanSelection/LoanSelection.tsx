import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../../context/ApplicationContext';
import { LoanTypeCard } from './LoanTypeCard';
import { User, Car, Home, Building, CreditCard } from 'lucide-react';
import type { LoanApplication } from '../../types';

const loanTypes = [
  {
    type: 'personal' as const,
    title: 'Personal Loan',
    description: 'Access funds for personal expenses, debt consolidation, or unexpected costs.',
    icon: User
  },
  {
    type: 'auto' as const,
    title: 'Auto Loan',
    description: 'Finance your new or used vehicle with flexible repayment options.',
    icon: Car
  },
  {
    type: 'mortgage' as const,
    title: 'Mortgage',
    description: 'Achieve homeownership with a range of customizable mortgage solutions.',
    icon: Home
  },
  {
    type: 'business' as const,
    title: 'Business Loan',
    description: 'Grow your business, manage cash flow, or invest in new opportunities.',
    icon: Building
  },
  {
    type: 'credit' as const,
    title: 'Line of Credit',
    description: 'Flexible access to funds up to a certain limit, only pay for what you use.',
    icon: CreditCard
  }
];

export const LoanSelection: React.FC = () => {
  const navigate = useNavigate();
  const { createApplication } = useApplication();

  const handleLoanTypeSelect = (loanType: LoanApplication['loanType']) => {
    createApplication(loanType);
    navigate('/application/personal-details');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
          Choose Your Loan Type
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Select the loan type that best fits your financial goals. We offer a variety of options
          designed to meet your specific needs.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {loanTypes.map((loan) => (
          <Grid item xs={12} sm={6} md={4} key={loan.type}>
            <LoanTypeCard
              title={loan.title}
              description={loan.description}
              icon={loan.icon}
              onClick={() => handleLoanTypeSelect(loan.type)}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          sx={{ 
            px: 4, 
            py: 1.5,
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          Next Step →
        </Button>
      </Box>
    </Container>
  );
};