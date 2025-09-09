import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
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
    color: "#4A5CC4", // use theme.palette.primary.main
  },
  {
    type: "auto" as const,
    title: "Auto Loan",
    description:
      "Finance your new or used vehicle with flexible repayment options.",
    icon: Car,
    color: "#17C6A3", // theme.palette.secondary.main
  },
  {
    type: "mortgage" as const,
    title: "Mortgage",
    description:
      "Achieve homeownership with a range of customizable mortgage solutions.",
    icon: Home,
    color: "#F7941D", // theme.palette.warning.main
  },
  {
    type: "business" as const,
    title: "Business Loan",
    description:
      "Grow your business, manage cash flow, or invest in new opportunities.",
    icon: Building,
    color: "#4CAF50", // theme.palette.success.main
  },
  {
    type: "credit" as const,
    title: "Line of Credit",
    description:
      "Flexible access to funds up to a certain limit, only pay for what you use.",
    icon: CreditCard,
    color: "#F44336", // theme.palette.error.main
  },
];

// const loanTypes = [
//   {
//     type: "personal" as const,
//     title: "Personal Loan ",
//     description:
//       "Access funds for personal expenses, debt consolidation, or unexpected costs.",
//     icon: User,
//   },
//   {
//     type: "auto" as const,
//     title: "Auto Loan",
//     description:
//       "Finance your new or used vehicle with flexible repayment options.",
//     icon: Car,
//   },
//   {
//     type: "mortgage" as const,
//     title: "Mortgage",
//     description:
//       "Achieve homeownership with a range of customizable mortgage solutions.",
//     icon: Home,
//   },
//   {
//     type: "business" as const,
//     title: "Business Loan",
//     description:
//       "Grow your business, manage cash flow, or invest in new opportunities.",
//     icon: Building,
//   },
//   {
//     type: "credit" as const,
//     title: "Line of Credit",
//     description:
//       "Flexible access to funds up to a certain limit, only pay for what you use.",
//     icon: CreditCard,
//   },
// ];

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
        height: "105vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FFFFFF",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 4, sm: 6, paddingTop: "0px", paddingBottom: "0px" } }}
      >
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
              // position: "sticky",
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
          justifyContent="center"
          sx={{
            mb: { xs: 3, sm: 4 },
            marginLeft: "100px",
            justifyContent: "flex-start",
          }}
        >
          {loanTypes.map((loan) => (
            // @ts-ignore
            <Grid
              key={loan.type}
              item
              xs={12} // ✅ MUI v7 supports gridSize shorthand again
              sm={6}
              md={3}
              // sx={{ maxWidth: 300 }}
              sx={{
                maxWidth: 300,
              }}
            >
              <LoanTypeCard
                title={loan.title}
                description={loan.description}
                icon={loan.icon}
                color={loan.color}
                onClick={() => handleLoanTypeSelect(loan.type)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
