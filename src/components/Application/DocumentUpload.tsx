import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Alert,
  Grid,
  CardContent,
  Card,
  Divider,
  TextField,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";
import { Upload, FileText, Trash2 } from "lucide-react";
import type { UploadedDocument } from "../../types";
import { labelStyle } from "../../Helper/useDrawerToggle";

const steps = [
  "Personal Details",
  "Contact Info",
  "Employment",
  "Documents",
  "Review",
];

const requiredDocuments = [
  {
    type: "identity",
    label: "Proof of Identity",
    description: "Driver's License or Passport",
  },
  {
    type: "address",
    label: "Proof of Address",
    description: "Utility Bill (last 3 months)",
  },
  {
    type: "income",
    label: "W-2 Forms",
    description: "Last two years of W-2 forms",
  },
  {
    type: "paystubs",
    label: "Pay Stubs",
    description: "Last three months of pay stubs",
  },
  {
    type: "bankstatements",
    label: "Bank Statements",
    description: "Last three months",
  },
  {
    type: "taxreturns",
    label: "Tax Returns",
    description: "Last two years",
  },
  {
    type: "GiftLetter",
    label: "Gift Letter",
    description: "If applicable",
  },
  {
    type: "Proof of Funds",
    label: "Proof of Funds",
    description: "Evidence of funds for Closing costs",
  },
];
const Loan_purposes = [
  "Personal Loan",
  "Auto Loan",
  "Business Loan",
  "Mortgage",
  "Line of Credit",
];
const PayStubs = [
  {
    type: "paystubs",
    label: "Pay Stubs",
    description: "Last three months of pay stubs",
  },
];

export const DocumentUpload: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();
  const [selectedLoanType, setSelectedLoanType] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedDocument[]>([]);

  // const handleFileUpload = (documentType: string) => {
  //   // Mock file upload
  //   const mockFile: UploadedDocument = {
  //     id: Date.now().toString(),
  //     name: `${documentType}_document.pdf`,
  //     type: documentType,
  //     size: Math.floor(Math.random() * 1000000),
  //     uploadDate: new Date(),
  //     required: true,
  //   };

  //   setUploadedFiles((prev) => [...prev, mockFile]);
  // };
  const handleFileUpload = (
    documentType: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ✅ Allowed formats
    const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedFormats.includes(file.type)) {
      alert("Invalid file format. Please upload PDF, JPG, or PNG.");
      return;
    }

    const uploadedDoc: UploadedDocument = {
      id: Date.now().toString(),
      name: file.name,
      type: documentType,
      size: file.size,
      uploadDate: new Date(),
      required: true,
    };

    setUploadedFiles((prev) => [
      ...prev.filter((f) => f.type !== documentType), // replace if already uploaded
      uploadedDoc,
    ]);
  };

  const handleFileRemove = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const handleNext = () => {
    updateApplication({
      documents: uploadedFiles,
    });
    // navigate("/application/review");
    navigate("/application/tracker");
  };

  const handleBack = () => {
    navigate("/application/employment");
  };

  const getUploadStatus = () => {
    const uploadedCount = uploadedFiles.length;
    const totalRequired = requiredDocuments.length;
    return Math.round((uploadedCount / totalRequired) * 100);
  };

  if (!currentApplication) {
    navigate("/loan-selection");
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* <Paper elevation={2} sx={{ p: 4 }}> */}
      {/* <Stepper activeStep={3} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}

      {/* <Typography
        variant="h4"
        gutterBottom
        // sx={{ fontWeight: 600 }}
        sx={{
          fontWeight: 600,
          top: 50,
          position: "sticky", // ✅ keeps it stuck
          // top: 0, // ✅ distance from top
          backgroundColor: "white", // ✅ avoid overlap
          zIndex: 10, // ✅ stay above form elements
          py: 2, // add padding if needed
        }}
      >
        Document Upload
      </Typography> */}
      {/* <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Please upload the required documents for your loan application.
      </Typography> */}
      <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              mb: 3,
              width: {
                xs: "100%", // full width on extra-small screens (mobile)
                sm: "600px", // up to 600px on small screens (tablets)
                md: "800px", // up to 800px on medium+ (desktop)
              },
              mx: "auto", // center horizontally
            }}
          >
            <CardContent>
              {/* <Typography variant="h6" gutterBottom>
                Loan Type
              </Typography>
              <FormControl fullWidth>
                {selectedLoanType ? null : (
                  <InputLabel>
                    Select your loan type to view specific document requirements
                  </InputLabel>
                )}
                <Select
                  value={selectedLoanType}
                  onChange={(e) => setSelectedLoanType(e.target.value)}
                  label="Select your loan type to view specific document requirements"
                >
                  <MenuItem value="Mortgage Loan">Mortgage Loan</MenuItem>
                  <MenuItem value="Personal Loan">Personal Loan</MenuItem>
                  <MenuItem value="Auto Loan">Auto Loan</MenuItem>
                  <MenuItem value="Business Loan">Business Loan</MenuItem>
                </Select>
              </FormControl> */}
              {/* <Typography variant="body1" sx={labelStyle}>
                Loan Type
              </Typography> */}
              <Typography variant="h6" gutterBottom>
                Loan Type
              </Typography>
              <TextField
                fullWidth
                select
                label={selectedLoanType ? null : "Mortage Loan"}
                value={selectedLoanType}
                onChange={(e) => setSelectedLoanType(e.target.value)}
                defaultValue="Student"
              >
                <MenuItem value="" disabled>
                  Mortage Loan
                </MenuItem>
                {Loan_purposes.map((purpose) => (
                  <MenuItem key={purpose} value={purpose}>
                    {purpose}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Required Documents
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                A checklist of documents based on your selected loan type:
              </Typography>

              <List>
                {requiredDocuments.map((doc, index) => {
                  const isUploaded = uploadedFiles.find(
                    (f) => f.type === doc.type
                  );

                  return (
                    <React.Fragment key={doc.type}>
                      <ListItem
                        sx={{
                          py: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Left side */}
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
                            <span style={{ color: "blue" }}>* </span>
                            {doc.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {doc.description}
                          </Typography>
                        </Box>

                        {/* Right side */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                        >
                          <Chip
                            label={isUploaded ? "Uploaded" : "Pending Upload"}
                            color={isUploaded ? "success" : "default"}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              color: "text.secondary",
                              mb: 1,
                            }}
                          >
                            <InfoOutlinedIcon
                              fontSize="small"
                              sx={{ mr: 0.5 }}
                            />
                            <Typography variant="body2">Required</Typography>
                          </Box>
                          <Button
                            variant="outlined"
                            size="small"
                            component="label"
                            startIcon={<Upload size={16} />}
                          >
                            Upload Document
                            <input
                              type="file"
                              hidden
                              onChange={(e) => handleFileUpload(doc.type, e)}
                            />
                          </Button>
                        </Box>
                      </ListItem>

                      {/* Divider after each ListItem except the last */}
                      {index < requiredDocuments.length - 1 && (
                        <Divider component="li" />
                      )}
                    </React.Fragment>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upload Status
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    bgcolor: "#e0e0e0",
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${getUploadStatus()}%`,
                      height: "100%",
                      bgcolor: "#4caf50",
                      transition: "width 0.3s ease",
                    }}
                  />
                </Box>

                <Typography variant="body2" sx={{ minWidth: "fit-content" }}>
                  {getUploadStatus()}%
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {uploadedFiles.length}/3 documents uploaded and under review
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3, p: 2, bgcolor: "#f9f9f9" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Uploaded Files
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Drag & drop files here or click to browse. Max file size: 10MB.
              </Typography>
            </CardContent>

            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                p: 4,
                textAlign: "center",
                mb: 3,
              }}
            >
              <Upload size={48} className="text-gray-400 mb-4" />
              <Typography variant="h6" gutterBottom>
                Drag & Drop Your Files Here
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Supported formats: PDF, JPEG, PNG
              </Typography>
              <Button variant="outlined" size="small">
                Browse Files
              </Button>
            </Box>
          </Card>

          {/* {uploadedFiles.length > 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Uploaded Files
              </Typography>
              <List>
                {uploadedFiles.map((file) => (
                  <ListItem key={file.id}>
                    <FileText size={20} className="mr-2" />
                    <ListItemText
                      primary={file.name}
                      secondary={`${(file.size / 1024).toFixed(1)} KB • ${file.uploadDate.toLocaleDateString()}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => handleFileRemove(file.id)}
                        size="small"
                      >
                        <Trash2 size={16} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Box>
          )} */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="outlined" size="large" sx={{ px: 4 }}>
                Save Draft
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                size="large"
                sx={{ px: 4 }}
              >
                Submit for Review
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* </Paper> */}
    </Container>
  );
};
