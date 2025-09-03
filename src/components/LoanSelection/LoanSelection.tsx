import React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApplication } from "../../context/ApplicationContext";
import { LoanTypeCard } from "./LoanTypeCard";
import { User, Car, Home, Building, CreditCard } from "lucide-react";
import type { LoanApplication } from "../../types";

const loanTypes = [
  {
    type: "personal" as const,
    title: "Personal Loan",
    description:
      "Access funds for personal expenses, debt consolidation, or unexpected costs.",
    icon: User,
  },
  {
    type: "auto" as const,
    title: "Auto Loan",
    description:
      "Finance your new or used vehicle with flexible repayment options.",
    icon: Car,
  },
  {
    type: "mortgage" as const,
    title: "Mortgage",
    description:
      "Achieve homeownership with a range of customizable mortgage solutions.",
    icon: Home,
  },
  {
    type: "business" as const,
    title: "Business Loan",
    description:
      "Grow your business, manage cash flow, or invest in new opportunities.",
    icon: Building,
  },
  {
    type: "credit" as const,
    title: "Line of Credit",
    description:
      "Flexible access to funds up to a certain limit, only pay for what you use.",
    icon: CreditCard,
  },
];

export const LoanSelection: React.FC = () => {
  const navigate = useNavigate();
  const { createApplication } = useApplication();

  const handleLoanTypeSelect = (loanType: LoanApplication["loanType"]) => {
    createApplication(loanType);
    navigate("/application/personal-details");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6 } }}>
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 6 },
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: "#333",
              fontSize: { xs: "1.75rem", sm: "2.125rem" },
            }}
          >
            Choose Your Loan Type
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.125rem" },
            }}
          >
            Select the loan type that best fits your financial goals. We offer a
            variety of options designed to meet your specific needs.
          </Typography>
        </Box>

        {/* Loan Cards */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: { xs: 3, sm: 4 },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loanTypes.map((loan) => (
            <Grid
              key={loan.type}
              item
              xs={12} // ✅ MUI v7 supports gridSize shorthand again
              sm={6}
              md={4}
              sx={{ maxWidth: 400 }}
            >
              <LoanTypeCard
                title={loan.title}
                description={loan.description}
                icon={loan.icon}
                onClick={() => handleLoanTypeSelect(loan.type)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Next Button */}
        {/* <Box sx={{ textAlign: "center", mt: { xs: 2, sm: 4 } }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              bgcolor: "#1976d2",
              "&:hover": { bgcolor: "#1565c0" },
            }}
          >
            Next Step →
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
};
