import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useApplication } from '../../context/ApplicationContext';
import { Plus, FileText, TrendingUp } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { applications } = useApplication();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'success';
      case 'under-review': return 'warning';
      case 'rejected': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Welcome back, {user?.firstName}!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage your loan applications and track your progress
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Your Applications
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<Plus size={20} />}
                  onClick={() => navigate('/loan-selection')}
                >
                  New Application
                </Button>
              </Box>

              {applications.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <FileText size={48} className="text-gray-400 mb-4" />
                  <Typography variant="h6" gutterBottom>
                    No applications yet
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Start your loan application process today
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/loan-selection')}
                  >
                    Apply for a Loan
                  </Button>
                </Box>
              ) : (
                applications.map((app) => (
                  <Card key={app.id} sx={{ mb: 2, border: '1px solid #e0e0e0' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                            {app.loanType} Loan
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Application ID: {app.id}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Submitted: {app.submittedAt?.toLocaleDateString() || 'Draft'}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Chip 
                            label={app.status} 
                            color={getStatusColor(app.status)}
                            sx={{ mb: 1, textTransform: 'capitalize' }}
                          />
                          <Box>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => navigate('/application/tracker')}
                            >
                              View Details
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp size={24} className="mr-2 text-blue-600" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Quick Stats
                </Typography>
              </Box>
              <Box sx={{ '& > *': { mb: 1 } }}>
                <Typography variant="body2">
                  <strong>Total Applications:</strong> {applications.length}
                </Typography>
                <Typography variant="body2">
                  <strong>Active Applications:</strong> {applications.filter(app => app.status !== 'approved' && app.status !== 'rejected').length}
                </Typography>
                <Typography variant="body2">
                  <strong>Approved:</strong> {applications.filter(app => app.status === 'approved').length}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Need Help?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Our support team is here to assist you with your application.
              </Typography>
              <Button variant="outlined" fullWidth>
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};