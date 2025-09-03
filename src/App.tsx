import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import { ApplicationProvider } from "./context/ApplicationContext";
import { Layout } from "./components/Layout/Layout";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { HomePage } from "./components/Home/HomePage";
import { LoginForm } from "./components/Auth/LoginForm";
import { RegisterForm } from "./components/Auth/RegisterForm";
import { LoanSelection } from "./components/LoanSelection/LoanSelection";
import { PersonalDetailsForm } from "./components/Application/PersonalDetailsForm";
import { ContactInfoForm } from "./components/Application/ContactInfoForm";
import { EmploymentForm } from "./components/Application/EmploymentForm";
import { DocumentUpload } from "./components/Application/DocumentUpload";
import { ApplicationReview } from "./components/Application/ApplicationReview";
import { ApplicationTracker } from "./components/Application/ApplicationTracker";
import { ApplicationApproved } from "./components/Application/ApplicationApproved";
import { UserDashboard } from "./components/Dashboard/UserDashboard";
import { AdminAlertInbox } from "./Admin/AdminAlertInbox";
import { AdminAnalytics } from "./Admin/AdminAnalytics";
import AdminDashboard from "./Admin/AdminDashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#0097a7",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <ApplicationProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <DashboardRouter />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <Layout>
                    <LoginForm />
                  </Layout>
                }
              />
              <Route
                path="/register"
                element={
                  <Layout>
                    <RegisterForm />
                  </Layout>
                }
              />

              {/* User Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <DashboardRouter />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/loan-selection"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <LoanSelection />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/application/*"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <ApplicationRoutes />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute requireRole="admin">
                    {/* <AdminLayout> */}
                    <AdminRoutes />
                    {/* </AdminLayout> */}
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </ApplicationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Dashboard Router Component
const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  return <UserDashboard />;
};

// Admin Routes Component
const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="alert" element={<AdminAlertInbox />} />
      <Route path="analytics" element={<AdminAnalytics />} />
      <Route path="alerts" element={<AdminAnalytics />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
};

// Application Routes Component
const ApplicationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="personal-details" element={<PersonalDetailsForm />} />
      <Route path="contact-info" element={<ContactInfoForm />} />
      <Route path="employment" element={<EmploymentForm />} />
      <Route path="documents" element={<DocumentUpload />} />
      <Route path="review" element={<ApplicationReview />} />
      <Route path="tracker" element={<ApplicationTracker />} />
      <Route path="approved" element={<ApplicationApproved />} />

      {/* <Route path="*" element={<Navigate to="personal-details" replace />} /> */}

      <Route
        path="*"
        element={<Navigate to="/user/personal-details" replace />}
      />
    </Routes>
  );
};

export default App;
