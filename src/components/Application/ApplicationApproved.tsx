import React from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";
import { CheckCircle, Download, FileText } from "lucide-react";

export const ApplicationApproved: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, offers } = useApplication();

  const handleDownloadContract = () => {
    // Mock download action
    console.log("Downloading loan contract...");
  };

  const handleSignContract = () => {
    // Mock digital signing
    console.log("Opening digital signature interface...");
  };

  if (!currentApplication) {
    navigate("/loan-selection");
    return null;
  }

  const currentOffer = offers.find(
    (offer) => offer.applicationId === currentApplication.id
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
            color: "#4caf50",
          }}
        >
          <CheckCircle size={80} />
        </Box>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, color: "#4caf50" }}
        >
          Your Loan Application Has Been Approved!
        </Typography>

        {(currentOffer || true) && (
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Your Loan Offer
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item size={3}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Loan Amount
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: "#1976d2" }}
                    >
                      {/* ${currentOffer.amount.toLocaleString()}
                       */}
                      60000
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item size={3}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Monthly Payment
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: "#1976d2" }}
                    >
                      {/* ${currentOffer.monthlyPayment.toFixed(2)} */}
                      $450.00
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item size={3}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Interest Rate
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {/* {currentOffer.interestRate}% APR */}
                      12%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item size={3}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Term
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {/* {currentOffer.termMonths} Months */}8 Months
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Review Your Contract
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Your personalized loan offer document is ready for download.
              Please review all terms and conditions carefully before
              proceeding.
            </Typography>

            <Button
              variant="outlined"
              startIcon={<Download size={20} />}
              onClick={handleDownloadContract}
              sx={{ mb: 4, mr: 2 }}
            >
              Download Loan Offer PDF
            </Button>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Digitally Sign Your Contract
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              To finalize your loan, please provide your e-signature below. This
              acts as your legal agreement to the terms.
            </Typography>

            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                p: 4,
                mb: 3,
                bgcolor: "#fafafa",
              }}
            >
              <Typography variant="body2" color="text.secondary" align="center">
                Click to sign your loan
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              onClick={handleSignContract}
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "#4caf50",
                "&:hover": { bgcolor: "#388e3c" },
              }}
            >
              Sign Contract Now
            </Button>
          </Box>
        )}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard")}
            size="large"
            sx={{ px: 4 }}
          >
            Return to Dashboard
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
