import { createTheme, type Shadows } from "@mui/material/styles";

const customTheme = {
  colors: {
    // Primary brand
    primary: "#4A5CC4", // Purple-blue header
    secondary: "#17C6A3", // Teal highlight

    // Status colors
    success: "#4CAF50", // Approve / Passed
    warning: "#F7941D", // Conditional / Moderate
    error: "#F44336", // Deny / Risk / Failed

    // Backgrounds
    background: "#f9f9f9", // Section background
    card: "#ffffff", // Card white
    border: "#e0e0e0", // Light grey border
    text: "#333333", // Primary text
    mutedText: "#777777", // Secondary text
  },

  // Border radius & shadows for consistent design
  radii: {
    small: "6px",
    medium: "10px",
    large: "16px",
  },

  shadows: {
    card: "0 2px 6px rgba(0,0,0,0.1)",
    hover: "0 4px 12px rgba(0,0,0,0.15)",
  },

  buttons: {
    approve: {
      background: "#4CAF50",
      color: "#fff",
    },
    conditional: {
      background: "#F7941D",
      color: "#fff",
    },
    deny: {
      background: "#F44336",
      color: "#fff",
    },
  },
};

// ✅ Build a 25-item shadows array (MUI requirement)
const muiShadows: Shadows = Array(25).fill("none") as Shadows;
muiShadows[1] = customTheme.shadows.card;
muiShadows[2] = customTheme.shadows.hover;

const theme = createTheme({
  palette: {
    primary: {
      main: customTheme.colors.primary,
    },
    secondary: {
      main: customTheme.colors.secondary,
    },
    success: {
      main: customTheme.colors.success,
    },
    warning: {
      main: customTheme.colors.warning,
    },
    error: {
      main: customTheme.colors.error,
    },
    background: {
      default: customTheme.colors.background,
      paper: customTheme.colors.card,
    },
    text: {
      primary: customTheme.colors.text,
      secondary: customTheme.colors.mutedText,
    },
    divider: customTheme.colors.border,
  },
  shape: {
    borderRadius: parseInt(customTheme.radii.medium, 10),
  },
  shadows: muiShadows,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: customTheme.radii.medium,
          boxShadow: customTheme.shadows.card,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: customTheme.shadows.hover,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: customTheme.radii.small,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 20px",
        },
        containedSuccess: {
          backgroundColor: customTheme.buttons.approve.background,
          color: customTheme.buttons.approve.color,
          "&:hover": {
            backgroundColor: "#45a049",
          },
        },
        containedWarning: {
          backgroundColor: customTheme.buttons.conditional.background,
          color: customTheme.buttons.conditional.color,
          "&:hover": {
            backgroundColor: "#e8851a",
          },
        },
        containedError: {
          backgroundColor: customTheme.buttons.deny.background,
          color: customTheme.buttons.deny.color,
          "&:hover": {
            backgroundColor: "#d32f2f",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: customTheme.radii.small,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: customTheme.radii.small,
          },
        },
      },
    },
  },
});

export default theme;
