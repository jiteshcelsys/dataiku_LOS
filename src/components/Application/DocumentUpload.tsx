import React, { useState } from 'react';
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
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../../context/ApplicationContext';
import { Upload, FileText, Trash2 } from 'lucide-react';
import type { UploadedDocument } from '../../types';

const steps = ['Personal Details', 'Contact Info', 'Employment', 'Documents', 'Review'];

const requiredDocuments = [
  { type: 'identity', label: 'Proof of Identity', description: 'Driver\'s License or Passport' },
  { type: 'address', label: 'Proof of Address', description: 'Utility Bill (last 3 months)' },
  { type: 'income', label: 'W-2 Forms', description: 'Last two years of W-2 forms' }
];

export const DocumentUpload: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, updateApplication } = useApplication();
  const [selectedLoanType, setSelectedLoanType] = useState('Mortgage Loan');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedDocument[]>([]);

  const handleFileUpload = (documentType: string) => {
    // Mock file upload
    const mockFile: UploadedDocument = {
      id: Date.now().toString(),
      name: `${documentType}_document.pdf`,
      type: documentType,
      size: Math.floor(Math.random() * 1000000),
      uploadDate: new Date(),
      required: true
    };
    
    setUploadedFiles(prev => [...prev, mockFile]);
  };

  const handleFileRemove = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleNext = () => {
    updateApplication({
      documents: uploadedFiles
    });
    navigate('/application/review');
  };

  const handleBack = () => {
    navigate('/application/employment');
  };

  const getUploadStatus = () => {
    const uploadedCount = uploadedFiles.length;
    const totalRequired = requiredDocuments.length;
    return Math.round((uploadedCount / totalRequired) * 100);
  };

  if (!currentApplication) {
    navigate('/loan-selection');
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stepper activeStep={3} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Document Upload
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please upload the required documents for your loan application.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Loan Type
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Select your loan type to view specific document requirements</InputLabel>
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
              </FormControl>
            </Box>

            <Typography variant="h6" gutterBottom>
              Required Documents
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A checklist of documents based on your selected loan type:
            </Typography>

            <List>
              {requiredDocuments.map((doc, index) => (
                <ListItem key={doc.type} sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
                    <FileText size={20} className="mr-2" />
                    <ListItemText 
                      primary={doc.label}
                      secondary={doc.description}
                    />
                    {uploadedFiles.find(f => f.type === doc.type) ? (
                      <Chip label="Uploaded" color="success" size="small" />
                    ) : (
                      <Chip label="Required" color="error" size="small" />
                    )}
                  </Box>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Upload size={16} />}
                    onClick={() => handleFileUpload(doc.type)}
                    sx={{ mt: 1 }}
                  >
                    Upload Document
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ 
              border: '2px dashed #ccc', 
              borderRadius: 2, 
              p: 4, 
              textAlign: 'center',
              mb: 3
            }}>
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

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Upload Status
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: '100%', 
                  height: 8, 
                  bgcolor: '#e0e0e0', 
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>
                  <Box sx={{ 
                    width: `${getUploadStatus()}%`, 
                    height: '100%', 
                    bgcolor: '#4caf50',
                    transition: 'width 0.3s ease'
                  }} />
                </Box>
                <Typography variant="body2" sx={{ minWidth: 'fit-content' }}>
                  {getUploadStatus()}%
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {uploadedFiles.length}/3 documents uploaded and under review
              </Typography>
            </Box>

            {uploadedFiles.length > 0 && (
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
                        <IconButton onClick={() => handleFileRemove(file.id)} size="small">
                          <Trash2 size={16} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            size="large"
            sx={{ px: 4 }}
          >
            Back
          </Button>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4 }}
            >
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
      </Paper>
    </Container>
  );
};