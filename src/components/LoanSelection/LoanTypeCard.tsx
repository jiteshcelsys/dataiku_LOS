import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface LoanTypeCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  onClick: () => void;
  color: string; // 🎨 new prop
}

export const LoanTypeCard: React.FC<LoanTypeCardProps> = ({
  title,
  description,
  icon: Icon,
  onClick,
  color,
}) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
      onClick={onClick}
    >
      <CardContent sx={{ p: 3, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            width: 56,
            height: 56,
            borderRadius: "50%",
            bgcolor: color, // ✅ use loan type color as circle bg
            mx: "auto",
          }}
        >
          <Icon size={28} color="#fff" />{" "}
          {/* ✅ icon always white for contrast */}
        </Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
