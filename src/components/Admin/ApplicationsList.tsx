import React, { useState } from "react";
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
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Search,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

// Mock data for applications
const mockApplications = [
  {
    id: "APP-98754321",
    applicantName: "Arya Sharma",
    applicantAvatar: "AS",
    loanType: "Mortgage Loan",
    amount: 350000,
    stage: "Under Review",
    flags: "Missing Documents",
    submissionDate: "2024-07-28",
    status: "under-review",
  },
  {
    id: "APP-98754322",
    applicantName: "Ethan Chen",
    applicantAvatar: "EC",
    loanType: "Business Loan",
    amount: 120000,
    stage: "Application Submitted",
    flags: null,
    submissionDate: "2024-07-27",
    status: "submitted",
  },
  {
    id: "APP-98754323",
    applicantName: "Olivia Davis",
    applicantAvatar: "OD",
    loanType: "Personal Loan",
    amount: 25000,
    stage: "Approved",
    flags: "High Risk",
    submissionDate: "2024-07-26",
    status: "approved",
  },
  {
    id: "APP-98754324",
    applicantName: "Liam Johnson",
    applicantAvatar: "LJ",
    loanType: "Auto Loan",
    amount: 45000,
    stage: "Rejected",
    flags: "Fraud Alert",
    submissionDate: "2024-07-25",
    status: "rejected",
  },
  {
    id: "APP-98754325",
    applicantName: "Sophia Rodriguez",
    applicantAvatar: "SR",
    loanType: "Mortgage Loan",
    amount: 420000,
    stage: "Pending Documents",
    flags: null,
    submissionDate: "2024-07-24",
    status: "pending-documents",
  },
];

export const ApplicationsList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loanTypeFilter, setLoanTypeFilter] = useState("");
  const [stageFilter, setStageFilter] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "success";
      case "under-review":
        return "warning";
      case "rejected":
        return "error";
      case "submitted":
        return "info";
      case "pending-documents":
        return "warning";
      default:
        return "default";
    }
  };

  const getFlagColor = (flag: string | null) => {
    if (!flag) return null;
    switch (flag) {
      case "High Risk":
        return "warning";
      case "Fraud Alert":
        return "error";
      case "Missing Documents":
        return "info";
      default:
        return "default";
    }
  };

  const handleReview = (applicationId: string) => {
    navigate(`/admin/applications/${applicationId}`);
  };

  const filteredApplications = mockApplications.filter((app) => {
    const matchesSearch =
      app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLoanType = !loanTypeFilter || app.loanType === loanTypeFilter;
    const matchesStage = !stageFilter || app.stage === stageFilter;

    return matchesSearch && matchesLoanType && matchesStage;
  });

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Loan Applications
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage and review all loan applications
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <FileText size={20} className="mr-2 text-blue-600" />
                <Typography variant="body2" color="text.secondary">
                  Total Applications
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#1976d2" }}
              >
                1,245
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last 30 days
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircle size={20} className="mr-2 text-green-600" />
                <Typography variant="body2" color="text.secondary">
                  Approved Loans
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#4caf50" }}
              >
                890
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Since last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <TrendingUp size={20} className="mr-2 text-orange-600" />
                <Typography variant="body2" color="text.secondary">
                  Pending Review
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#ff9800" }}
              >
                120
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Currently in queue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <AlertTriangle size={20} className="mr-2 text-red-600" />
                <Typography variant="body2" color="text.secondary">
                  Rejected Applications
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#f44336" }}
              >
                85
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Due to various reasons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Filter Loan Applications
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Applicant Name"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <Search size={20} className="mr-2 text-gray-400" />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Loan Type</InputLabel>
                <Select
                  value={loanTypeFilter}
                  onChange={(e) => setLoanTypeFilter(e.target.value)}
                  label="Loan Type"
                >
                  <MenuItem value="">Select type</MenuItem>
                  <MenuItem value="Personal Loan">Personal Loan</MenuItem>
                  <MenuItem value="Auto Loan">Auto Loan</MenuItem>
                  <MenuItem value="Mortgage Loan">Mortgage Loan</MenuItem>
                  <MenuItem value="Business Loan">Business Loan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Application Stage</InputLabel>
                <Select
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  label="Application Stage"
                >
                  <MenuItem value="">Select stage</MenuItem>
                  <MenuItem value="Under Review">Under Review</MenuItem>
                  <MenuItem value="Application Submitted">
                    Application Submitted
                  </MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Pending Documents">
                    Pending Documents
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setSearchTerm("");
                    setLoanTypeFilter("");
                    setStageFilter("");
                  }}
                >
                  Clear Filters
                </Button>
                <Button variant="contained">Apply Filters</Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Recent Loan Applications
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" size="small">
                Bulk Export
              </Button>
              <Button variant="outlined" size="small">
                Generate Report
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: 600 }}>Applicant</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Loan Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Stage</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    Flags/Exceptions
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    Submission Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow
                    key={app.id}
                    sx={{ "&:hover": { bgcolor: "#f9f9f9" } }}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            mr: 2,
                            bgcolor: "#1976d2",
                          }}
                        >
                          {app.applicantAvatar}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {app.applicantName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {app.id}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{app.loanType}</TableCell>
                    <TableCell>${app.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip
                        label={app.stage}
                        color={getStatusColor(app.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {app.flags ? (
                        <Chip
                          label={app.flags}
                          color={getFlagColor(app.flags)}
                          size="small"
                          variant="outlined"
                        />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          -
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>{app.submissionDate}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleReview(app.id)}
                        sx={{ textTransform: "none" }}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Showing 5 of 5 applications
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button size="small" disabled>
                Previous
              </Button>
              <Button size="small">Next</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
