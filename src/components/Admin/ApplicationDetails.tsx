import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Paper,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Flag,
  FileText,
  Download,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

export const ApplicationDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState("");

  // Mock application data
  const application = {
    id: "APP-98754321",
    applicantName: "Sophia Williams",
    applicantAvatar: "SW",
    status: "Pending Review",
    personalData: {
      email: "sophia.williams@example.com",
      phone: "+1 (555) 123-4567",
      address: "450 Oak Avenue, Springfield, IL 62704, USA",
      dateOfBirth: "1995-07-20",
      nationality: "American",
    },
    evaluationScore: {
      overall: 84,
      creditScore: 85,
      incomeVerification: 92,
      debtToIncome: 88,
      employmentHistory: 75,
    },
    documents: [
      { name: "Identity_Verification.jpg", status: "Uploaded", required: true },
      { name: "Proof_of_Income.pdf", status: "Uploaded", required: true },
      { name: "Bank_Statement.pdf", status: "Uploaded", required: false },
    ],
    apiChecks: [
      {
        name: "Credit Check",
        status: "Completed",
        date: "2024-07-28",
        notes: "Score: 720",
      },
      {
        name: "Identity Verification",
        status: "Completed",
        date: "2024-07-28",
        notes: "Verified",
      },
      {
        name: "Employment Check",
        status: "Pending",
        date: "-",
        notes: "In progress",
      },
    ],
    comments: [
      {
        id: 1,
        author: "John Doe",
        date: "2024-07-28, 10:30 AM",
        message:
          "Applicant has strong eligibility, chance but some gaps in recent history. Needs clarification.",
      },
      {
        id: 2,
        author: "Jane Smith",
        date: "2024-07-28, 01:45 PM",
        message:
          "KYC verification issue flagged. Requires manual review and possibly re-submission of documents.",
      },
    ],
    decisionHistory: [
      {
        event: "Application Submitted",
        date: "2024-07-28, 08:30 AM",
        status: "completed",
      },
      {
        event: "Initial Review Completed",
        date: "2024-07-28, 11:30 AM",
        status: "completed",
      },
      {
        event: "Documents Uploaded",
        date: "2024-07-28, 02:00 PM",
        status: "completed",
      },
      {
        event: "API Checks Initiated",
        date: "2024-07-28, 02:30 PM",
        status: "in-progress",
      },
    ],
  };

  const handleApprove = () => {
    console.log("Approving application:", id);
  };

  const handleReject = () => {
    console.log("Rejecting application:", id);
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      console.log("Posting comment:", comment);
      setComment("");
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Button
          startIcon={<ArrowLeft size={20} />}
          onClick={() => navigate("/admin/applications")}
          sx={{ mr: 2 }}
        >
          Back to Applications
        </Button>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {application.applicantName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Application ID: {application.id}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" size="small">
            Request Info
          </Button>
          <Button variant="outlined" size="small">
            Escalate
          </Button>
          <Button variant="contained" color="success" onClick={handleApprove}>
            Approve
          </Button>
          <Button variant="contained" color="error" onClick={handleReject}>
            Deny
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} lg={8}>
          {/* Applicant Info */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    mr: 3,
                    bgcolor: "#1976d2",
                    fontSize: "1.5rem",
                  }}
                >
                  {application.applicantAvatar}
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {application.applicantName}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Application ID: {application.id}
                  </Typography>
                  <Chip
                    label={application.status}
                    color="warning"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              </Box>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Personal Data
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Mail size={16} className="mr-2 text-gray-500" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body2">
                        {application.personalData.email}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Phone size={16} className="mr-2 text-gray-500" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography variant="body2">
                        {application.personalData.phone}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <MapPin size={16} className="mr-2 text-gray-500" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Address
                      </Typography>
                      <Typography variant="body2">
                        {application.personalData.address}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Date of Birth
                      </Typography>
                      <Typography variant="body2">
                        {application.personalData.dateOfBirth}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Flag size={16} className="mr-2 text-gray-500" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Nationality
                      </Typography>
                      <Typography variant="body2">
                        {application.personalData.nationality}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Evaluation Score */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Evaluation Score
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Overall assessment of applicant's profile.
              </Typography>

              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 700, color: "#1976d2" }}
                >
                  {application.evaluationScore.overall}/100
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Overall Score
                </Typography>
              </Box>

              <Box sx={{ "& > *": { mb: 2 } }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">Credit Score</Typography>
                    <Typography variant="body2">
                      {application.evaluationScore.creditScore}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={application.evaluationScore.creditScore}
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">Income Verification</Typography>
                    <Typography variant="body2">
                      {application.evaluationScore.incomeVerification}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={application.evaluationScore.incomeVerification}
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">
                      Debt-to-Income Ratio
                    </Typography>
                    <Typography variant="body2">
                      {application.evaluationScore.debtToIncome}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={application.evaluationScore.debtToIncome}
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">Employment History</Typography>
                    <Typography variant="body2">
                      {application.evaluationScore.employmentHistory}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={application.evaluationScore.employmentHistory}
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Documents
              </Typography>

              <List>
                {application.documents.map((doc, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <FileText size={20} />
                    </ListItemIcon>
                    <ListItemText
                      primary={doc.name}
                      secondary={doc.required ? "Required" : "Optional"}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Chip
                        label={doc.status}
                        color={
                          doc.status === "Uploaded" ? "success" : "default"
                        }
                        size="small"
                      />
                      <Button size="small" startIcon={<Download size={16} />}>
                        Download
                      </Button>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* API Check Results */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                API Check Results
              </Typography>

              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                      <TableCell sx={{ fontWeight: 600 }}>Check Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Notes</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {application.apiChecks.map((check, index) => (
                      <TableRow key={index}>
                        <TableCell>{check.name}</TableCell>
                        <TableCell>
                          <Chip
                            label={check.status}
                            color={
                              check.status === "Completed"
                                ? "success"
                                : "warning"
                            }
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{check.date}</TableCell>
                        <TableCell>{check.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} lg={4}>
          {/* Comments */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Comments
              </Typography>

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Add a new comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handlePostComment}
                  disabled={!comment.trim()}
                >
                  Post Comment
                </Button>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
                {application.comments.map((comment) => (
                  <Box
                    key={comment.id}
                    sx={{ mb: 2, p: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          mr: 1,
                          fontSize: "0.75rem",
                        }}
                      >
                        {comment.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {comment.author}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ ml: "auto" }}
                      >
                        {comment.date}
                      </Typography>
                    </Box>
                    <Typography variant="body2">{comment.message}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Decision History */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Decision History
              </Typography>

              <List sx={{ p: 0 }}>
                {application.decisionHistory.map((event, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      {event.status === "completed" ? (
                        <CheckCircle size={16} className="text-green-600" />
                      ) : (
                        <Clock size={16} className="text-orange-600" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {event.event}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {event.date}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
