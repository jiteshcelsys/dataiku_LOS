import React from "react";
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
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useAuth } from "../../context/AuthContext";
import { Users, FileText, DollarSign, TrendingUp } from "lucide-react";
import { AdminDashboardLayout } from "./AdminDashboardLayout";

const mockApplications = [
  {
    id: "1",
    applicantName: "John Doe",
    loanType: "Personal",
    amount: 25000,
    stage: "Good",
    flags: "Missing documents",
    submissionDate: "2024-06-15",
    Actions: "approved",
  },
  {
    id: "2",
    applicantName: "Jane Smith",
    loanType: "Auto",
    amount: 35000,
    stage: "Under Review",
    flags: "High debt-to-income ratio",
    submissionDate: "2024-06-14",
    Actions: "under-review",
  },
  {
    id: "3",
    applicantName: "Bob Johnson",
    loanType: "Mortgage",
    amount: 250000,
    stage: "Fraud Alert",
    flags: "High debt-to-income ratio",
    submissionDate: "2024-06-14",
    Actions: "under-review",
  },
];

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "success";
      case "Under Review":
        return "warning";
      case "Fraud Alert":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <AdminDashboardLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3} sx={{ mb: 4, paddingTop: "1em" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Users size={24} className="mr-2 text-blue-600" />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Total Applications
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#1976d2" }}
                >
                  1,248
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FileText size={24} className="mr-2 text-green-600" />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Approved Loans
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#4caf50" }}
                >
                  324
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <BookmarksIcon
                    fontSize="medium"
                    sx={{ mr: 2, color: "purple" }}
                  />
                  {/* <DollarSign size={24} className="mr-2 text-purple-600" /> */}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Pending Review
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#9c27b0" }}
                >
                  120
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {/* <TrendingUp size={24} className="mr-2 text-orange-600" /> */}
                  <ClearIcon fontSize="medium" sx={{ mr: 2, color: "red" }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Rejected Applications
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#ff9800" }}
                >
                  87
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Recent Loan Applications
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <strong>Recent Loan Applications</strong>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button variant="outlined" size="small">
                    Bulk Export
                  </Button>
                  <Button variant="outlined" size="small">
                    Generate Report
                  </Button>
                </Box>
              </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    {[
                      "Applicant",
                      "Loan Type",
                      "Amount",
                      "Stage",
                      "Flags/Exceptions",
                      "Submission Dates",
                      "Actions",
                    ].map((col) => (
                      <TableCell key={col} sx={{ fontWeight: "bold" }}>
                        {col}
                      </TableCell>
                    ))}
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
                          label={app.stage}
                          color={getStatusColor(app.stage)}
                          size="small"
                          sx={{ textTransform: "capitalize" }}
                        />
                      </TableCell>
                      <TableCell>{app.flags}</TableCell>
                      <TableCell>{app.submissionDate}</TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined">
                          View Details
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
    </AdminDashboardLayout>
  );
};
