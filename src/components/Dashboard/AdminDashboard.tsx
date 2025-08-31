import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { Users, FileText, DollarSign, TrendingUp } from 'lucide-react';

const mockApplications = [
  { id: '1', applicantName: 'John Doe', loanType: 'Personal', amount: 25000, status: 'approved' },
  { id: '2', applicantName: 'Jane Smith', loanType: 'Auto', amount: 35000, status: 'under-review' },
  { id: '3', applicantName: 'Bob Johnson', loanType: 'Mortgage', amount: 250000, status: 'submitted' },
];

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

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
          Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Welcome back, {user?.firstName}! Here's your application overview.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Users size={24} className="mr-2 text-blue-600" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Total Users
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#1976d2' }}>
                1,248
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FileText size={24} className="mr-2 text-green-600" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Applications
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#4caf50' }}>
                324
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DollarSign size={24} className="mr-2 text-purple-600" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Total Approved
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#9c27b0' }}>
                $2.4M
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp size={24} className="mr-2 text-orange-600" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Approval Rate
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#ff9800' }}>
                87%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Recent Applications
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Applicant</TableCell>
                  <TableCell>Loan Type</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>{app.applicantName}</TableCell>
                    <TableCell>{app.loanType}</TableCell>
                    <TableCell>${app.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip 
                        label={app.status} 
                        color={getStatusColor(app.status)}
                        size="small"
                        sx={{ textTransform: 'capitalize' }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined">
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};