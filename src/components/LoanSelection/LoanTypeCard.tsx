import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface LoanTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const LoanTypeCard: React.FC<LoanTypeCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick 
}) => {
  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
      onClick={onClick}
    >
      <CardContent sx={{ p: 3, textAlign: 'center' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 2,
          color: '#1976d2'
        }}>
          <Icon size={40} />
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