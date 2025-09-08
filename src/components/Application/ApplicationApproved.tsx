import React from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Card,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";
import { Download } from "lucide-react";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

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
      <Paper elevation={2} sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
            flexDirection: "column",
            alignItems: "center",
            color: "#3962d1ff",
            borderRadius: "10%",
            gap: 4,
          }}
        >
          <CheckCircleOutlineOutlined sx={{ fontSize: 80 }} />
          <Chip
            label={"Approved"}
            // color={isUploaded ? "success" : "default"}
            size="medium"
            variant="filled"
            sx={{
              mb: 1,
              backgroundColor: "#376FC8", // custom background
              color: "white", // text color
              fontWeight: 600,
              fontSize: 20,
              // optional, make text bold
            }}
          />
        </Box>

        {(currentOffer || true) && (
          <Box sx={{ my: 4 }}>
            <Card sx={{ p: 4, borderRadius: 3, boxShadow: 1, mb: 4 }}>
              {/* Title */}
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Your Loan Offer
              </Typography>

              {/* Two Column Layout */}
              <Grid container spacing={6} justifyContent="space-between">
                {/* Left Column */}
                {/* @ts-ignore */}
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="text.secondary">
                    Loan Amount
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
                    $25,000.00
                    {/* ${currentOffer.amount.toLocaleString()}
                     */}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Loan Term
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    48 Months
                  </Typography>
                </Grid>

                {/* Right Column */}
                {/* @ts-ignore */}
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="text.secondary">
                    Interest Rate
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
                    6.5% APR
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Estimated Monthly Payment
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    $590.25
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Card sx={{ p: 4, borderRadius: 3, boxShadow: 1, mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Review Your Contract
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Your personalized loan offer document is ready for download.
                Please review all terms and conditions carefully before
                proceeding.
              </Typography>

              <Button
                variant="contained"
                startIcon={<Download size={20} />}
                onClick={handleDownloadContract}
                sx={{ mb: 4, mr: 2 }}
              >
                Download Loan Offer PDF
              </Button>
            </Card>

            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: 1,
                mb: 4,
                backgroundColor: "#f3f6fc",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Digitally Sign Your Contract
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                To finalize your loan, please provide your e-signature below.
                This acts as your legal agreement to the terms.
              </Typography>

              <Box
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: 2,
                  p: 4,
                  mb: 3,
                  bgcolor: "#DDE0E5",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Click or tap to sign here
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="large"
                onClick={handleSignContract}
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: (theme) => theme.palette.primary.main,
                  "&:hover": {
                    bgcolor: (theme) => theme.palette.primary.dark, // automatically darkens
                  },
                }}
              >
                Sign Contract Now
              </Button>
            </Card>
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
