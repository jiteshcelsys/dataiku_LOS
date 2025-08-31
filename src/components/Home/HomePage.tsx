import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, Clock, DollarSign, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure & Trusted',
    description: 'Bank-level security with 256-bit encryption to protect your data'
  },
  {
    icon: Clock,
    title: 'Fast Approval',
    description: 'Get approved in as little as 2-4 business days'
  },
  {
    icon: DollarSign,
    title: 'Competitive Rates',
    description: 'We offer some of the most competitive rates in the market'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in customer service and innovation'
  }
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', 
        color: 'white',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Your Financial Future Starts Here
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Apply for personal loans, auto loans, mortgages, and more with competitive rates 
                and fast approval times. Join thousands of satisfied customers.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {user ? (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/dashboard')}
                    sx={{ 
                      bgcolor: 'white', 
                      color: '#1976d2',
                      '&:hover': { bgcolor: '#f5f5f5' },
                      px: 4,
                      py: 1.5
                    }}
                  >
                    Go to Dashboard
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/loan-selection')}
                      sx={{ 
                        bgcolor: 'white', 
                        color: '#1976d2',
                        '&:hover': { bgcolor: '#f5f5f5' },
                        px: 4,
                        py: 1.5
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/login')}
                      sx={{ 
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': { 
                          borderColor: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.1)'
                        },
                        px: 4,
                        py: 1.5
                      }}
                    >
                      Sign In
                    </Button>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: 400, 
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="h4" sx={{ opacity: 0.7 }}>
                  Hero Image Placeholder
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
          Why Choose Celestial Systems?
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)' }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 2,
                    color: '#1976d2'
                  }}>
                    <feature.icon size={40} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of customers who trust us with their financial needs
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/loan-selection')}
              sx={{ px: 6, py: 2 }}
            >
              Start Your Application
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};