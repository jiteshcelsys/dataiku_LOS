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
  Badge,
} from "@mui/material";
import {
  Search,
  Bell,
  AlertTriangle,
  CheckCircle,
  Clock,
  Flag,
  Plus,
  Filter,
} from "lucide-react";

// Mock alerts data
const mockAlerts = [
  {
    id: "FRAUD-2024-001",
    type: "Fraud Flag",
    source: "Transaction Monitoring",
    severity: "High",
    status: "Open",
    assignedTo: "Unassigned",
    date: "2024-07-20 10:30 AM",
    description: "Suspicious transaction pattern detected",
  },
  {
    id: "DOC-2024-055",
    type: "Missing Document",
    source: "Onboarding Process",
    severity: "Medium",
    status: "In Progress",
    assignedTo: "Michael Scott",
    date: "2024-07-19 02:15 PM",
    description: "Required identity verification missing",
  },
  {
    id: "COMP-2024-012",
    type: "Compliance Breach",
    source: "Audit Log Analysis",
    severity: "High",
    status: "Pending Review",
    assignedTo: "Dwight Schrute",
    date: "2024-07-19 09:00 AM",
    description: "KYC compliance violation detected",
  },
  {
    id: "SYS-2024-007",
    type: "System Error",
    source: "System Health Monitor",
    severity: "Low",
    status: "Open",
    assignedTo: "Unassigned",
    date: "2024-07-17 06:00 PM",
    description: "API response time degradation",
  },
  {
    id: "FRAUD-2024-002",
    type: "Fraud Flag",
    source: "Payment Gateway",
    severity: "Medium",
    status: "In Progress",
    assignedTo: "Pam Beesly",
    date: "2024-07-16 02:45 PM",
    description: "Multiple failed payment attempts",
  },
  {
    id: "DOC-2024-058",
    type: "Missing Document",
    source: "Loan Application",
    severity: "High",
    status: "Open",
    assignedTo: "Unassigned",
    date: "2024-07-15 11:00 AM",
    description: "Income verification documents missing",
  },
];

export const AlertInbox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      case "Low":
        return "info";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "error";
      case "In Progress":
        return "warning";
      case "Pending Review":
        return "info";
      case "Resolved":
        return "success";
      default:
        return "default";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Fraud Flag":
        return <Flag size={16} className="text-red-600" />;
      case "Missing Document":
        return <AlertTriangle size={16} className="text-orange-600" />;
      case "Compliance Breach":
        return <AlertTriangle size={16} className="text-red-600" />;
      case "System Error":
        return <AlertTriangle size={16} className="text-blue-600" />;
      default:
        return <Bell size={16} className="text-gray-600" />;
    }
  };

  const filteredAlerts = mockAlerts.filter((alert) => {
    const matchesSearch =
      alert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || alert.type === typeFilter;
    const matchesSeverity =
      !severityFilter || alert.severity === severityFilter;
    const matchesStatus = !statusFilter || alert.status === statusFilter;
    const matchesAssignee =
      !assigneeFilter || alert.assignedTo === assigneeFilter;

    return (
      matchesSearch &&
      matchesType &&
      matchesSeverity &&
      matchesStatus &&
      matchesAssignee
    );
  });

  const alertCounts = {
    total: mockAlerts.length,
    unassigned: mockAlerts.filter((a) => a.assignedTo === "Unassigned").length,
    highPriority: mockAlerts.filter((a) => a.severity === "High").length,
    resolvedToday: 0,
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor and manage system alerts and notifications
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <AlertTriangle size={20} className="mr-2 text-blue-600" />
                <Typography variant="body2" color="text.secondary">
                  Total Alerts
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#1976d2" }}
              >
                {alertCounts.total}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All time
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Clock size={20} className="mr-2 text-orange-600" />
                <Typography variant="body2" color="text.secondary">
                  Unassigned
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#ff9800" }}
              >
                {alertCounts.unassigned}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Requiring immediate action
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
                  High Priority
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#f44336" }}
              >
                {alertCounts.highPriority}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Currently open
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
                  Resolved Today
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#4caf50" }}
              >
                {alertCounts.resolvedToday}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Successfully closed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Alerts Inbox */}
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
              Alerts Inbox
            </Typography>
            <Button
              variant="contained"
              startIcon={<Plus size={20} />}
              size="small"
            >
              New Alert
            </Button>
          </Box>

          {/* Filters */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={2}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search by ID or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <Search size={16} className="mr-2 text-gray-400" />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Type</InputLabel>
                <Select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  label="Filter by Type"
                >
                  <MenuItem value="">All Types</MenuItem>
                  <MenuItem value="Fraud Flag">Fraud Flag</MenuItem>
                  <MenuItem value="Missing Document">Missing Document</MenuItem>
                  <MenuItem value="Compliance Breach">
                    Compliance Breach
                  </MenuItem>
                  <MenuItem value="System Error">System Error</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Severity</InputLabel>
                <Select
                  value={severityFilter}
                  onChange={(e) => setSeverityFilter(e.target.value)}
                  label="Filter by Severity"
                >
                  <MenuItem value="">All Severities</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Status</InputLabel>
                <Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  label="Filter by Status"
                >
                  <MenuItem value="">All Statuses</MenuItem>
                  <MenuItem value="Open">Open</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Pending Review">Pending Review</MenuItem>
                  <MenuItem value="Resolved">Resolved</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Assignee</InputLabel>
                <Select
                  value={assigneeFilter}
                  onChange={(e) => setAssigneeFilter(e.target.value)}
                  label="Filter by Assignee"
                >
                  <MenuItem value="">All Assignees</MenuItem>
                  <MenuItem value="Unassigned">Unassigned</MenuItem>
                  <MenuItem value="Michael Scott">Michael Scott</MenuItem>
                  <MenuItem value="Dwight Schrute">Dwight Schrute</MenuItem>
                  <MenuItem value="Pam Beesly">Pam Beesly</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                variant="outlined"
                fullWidth
                size="small"
                onClick={() => {
                  setSearchTerm("");
                  setTypeFilter("");
                  setSeverityFilter("");
                  setStatusFilter("");
                  setAssigneeFilter("");
                }}
              >
                Clear Filters
              </Button>
            </Grid>
          </Grid>

          {/* Alerts Table */}
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Source</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Severity</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Assigned To</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow
                    key={alert.id}
                    sx={{ "&:hover": { bgcolor: "#f9f9f9" } }}
                  >
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {alert.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {getTypeIcon(alert.type)}
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {alert.type}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{alert.source}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={alert.severity}
                        color={getSeverityColor(alert.severity)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={alert.status}
                        color={getStatusColor(alert.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {alert.assignedTo === "Unassigned" ? (
                        <Typography variant="body2" color="text.secondary">
                          Unassigned
                        </Typography>
                      ) : (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            sx={{
                              width: 24,
                              height: 24,
                              mr: 1,
                              fontSize: "0.75rem",
                            }}
                          >
                            {alert.assignedTo
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar>
                          <Typography variant="body2">
                            {alert.assignedTo}
                          </Typography>
                        </Box>
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{alert.date}</Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
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
              Showing {filteredAlerts.length} of {mockAlerts.length} alerts
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

      {/* Admin User Info */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          display: "flex",
          alignItems: "center",
          bgcolor: "white",
          p: 2,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Avatar sx={{ width: 32, height: 32, mr: 2 }}>AU</Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Admin User
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Online
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
