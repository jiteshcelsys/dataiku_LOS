import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  MenuItem,
  List,
  ListItem,
  IconButton,
  Chip,
  CardContent,
  Card,
  Divider,
  TextField,
  LinearProgress,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Upload, FileText, Trash2 } from "lucide-react";
import type { UploadedDocument } from "../../types";
import { useApplication } from "../../context/ApplicationContext";
import { useNavigate } from "react-router-dom";

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

export const DocumentUpload: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();
  const [selectedLoanType, setSelectedLoanType] = useState("Mortgage");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedDocument[]>([]);

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

  const handleSaveDraft = () => {
    console.log("Save draft", uploadedFiles);
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
    <Container
      maxWidth="xl"
      sx={{ py: 4, bgcolor: "background.default", minHeight: "100vh" }}
    >
      <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
        {/* @ts-ignore */}
        <Grid item xs={12} md={6}>
          {/* Loan Type Selection Card */}
          <Card
            sx={{
              mb: 3,
              width: {
                xs: "100%",
                sm: "600px",
                md: "800px",
              },
              mx: "auto",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  mb: 2,
                }}
              >
                Loan Type
              </Typography>
              <TextField
                fullWidth
                select
                label="Select Loan Type"
                value={selectedLoanType}
                onChange={(e) => setSelectedLoanType(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "secondary.main",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              >
                {Loan_purposes.map((purpose) => (
                  <MenuItem key={purpose} value={purpose}>
                    {purpose}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
          </Card>

          {/* Required Documents Card */}
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                Required Documents
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                A checklist of documents based on your selected loan type:
              </Typography>

              <List sx={{ p: 0 }}>
                {requiredDocuments.map((doc, index) => {
                  const isUploaded = uploadedFiles.find(
                    (f) => f.type === doc.type
                  );

                  return (
                    <React.Fragment key={doc.type}>
                      <ListItem
                        sx={{
                          py: 3,
                          px: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderRadius: 1,
                          "&:hover": {
                            bgcolor: "rgba(0,0,0,0.02)",
                          },
                        }}
                      >
                        {/* Left side */}
                        <Box sx={{ flex: 1, mr: 2 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: "text.primary",
                              mb: 0.5,
                            }}
                          >
                            <span style={{ color: theme.palette.error.main }}>
                              *{" "}
                            </span>
                            {doc.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.4 }}
                          >
                            {doc.description}
                          </Typography>
                        </Box>

                        {/* Right side */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: 1,
                          }}
                        >
                          <Chip
                            label={isUploaded ? "Uploaded" : "Pending Upload"}
                            color={isUploaded ? "success" : "default"}
                            size="small"
                            sx={{
                              fontWeight: 500,
                              ...(isUploaded && {
                                bgcolor: "success.main",
                                color: "white",
                              }),
                            }}
                          />

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              color: "text.secondary",
                            }}
                          >
                            <InfoOutlinedIcon
                              fontSize="small"
                              sx={{ mr: 0.5, fontSize: "16px" }}
                            />
                            <Typography
                              variant="caption"
                              sx={{ fontSize: "12px" }}
                            >
                              Required
                            </Typography>
                          </Box>

                          <Button
                            variant="outlined"
                            size="small"
                            component="label"
                            startIcon={<Upload size={16} />}
                            sx={{
                              borderColor: "secondary.main",
                              color: "secondary.main",
                              "&:hover": {
                                borderColor: "secondary.main",
                                bgcolor: "rgba(23, 198, 163, 0.08)",
                              },
                              fontSize: "12px",
                              px: 2,
                            }}
                          >
                            Upload Document
                            <input
                              type="file"
                              hidden
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileUpload(doc.type, e)}
                            />
                          </Button>

                          {/* Show uploaded file info */}
                          {isUploaded && (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mt: 1,
                              }}
                            >
                              <FileText
                                size={14}
                                color={theme.palette.success.main}
                              />
                              <Typography
                                variant="caption"
                                color="success.main"
                              >
                                {isUploaded.name}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() => handleFileRemove(isUploaded.id)}
                                sx={{ ml: 0.5, p: 0.5 }}
                              >
                                <Trash2
                                  size={12}
                                  color={theme.palette.error.main}
                                />
                              </IconButton>
                            </Box>
                          )}
                        </Box>
                      </ListItem>

                      {/* Divider after each ListItem except the last */}
                      {index < requiredDocuments.length - 1 && (
                        <Divider component="li" sx={{ bgcolor: "divider" }} />
                      )}
                    </React.Fragment>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
        {/* @ts-ignore */}
        <Grid item xs={12} md={6}>
          {/* Upload Status Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                Upload Progress
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Documents uploaded
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color:
                        getUploadStatus() === 100
                          ? "success.main"
                          : "text.primary",
                    }}
                  >
                    {uploadedFiles.length}/{requiredDocuments.length}
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={getUploadStatus()}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: "divider",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "success.main",
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>

              <Typography variant="body2" color="text.secondary">
                {getUploadStatus()}% complete
              </Typography>
            </CardContent>
          </Card>

          {/* Drag & Drop Area */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "primary.main",
                }}
              >
                Quick Upload
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Drag & drop files here or click to browse. Max file size: 10MB.
              </Typography>

              <Box
                sx={{
                  border: `2px dashed ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 4,
                  textAlign: "center",
                  bgcolor: "rgba(0,0,0,0.01)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                    bgcolor: "rgba(23, 198, 163, 0.02)",
                  },
                }}
              >
                <Upload
                  size={48}
                  style={{
                    color: theme.palette.text.secondary,
                    marginBottom: "16px",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  Drag & Drop Your Files Here
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Supported formats: PDF, JPEG, PNG
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "secondary.main",
                    color: "secondary.main",
                    "&:hover": {
                      borderColor: "secondary.main",
                      bgcolor: "rgba(23, 198, 163, 0.08)",
                    },
                  }}
                >
                  Browse Files
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(74, 92, 196, 0.08)",
                  },
                }}
                onClick={handleSaveDraft}
              >
                Save Draft
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                size="large"
                sx={{
                  px: 4,
                  bgcolor: "success.main",
                  "&:hover": {
                    bgcolor: "success.dark",
                  },
                }}
                disabled={uploadedFiles.length === 0}
              >
                Submit for Review
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
