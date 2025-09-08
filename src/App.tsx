import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import { ApplicationProvider } from "./context/ApplicationContext";
import { Layout } from "./components/Layout/Layout";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { LoginForm } from "./components/Auth/LoginForm";
import { RegisterForm } from "./components/Auth/RegisterForm";
import { LoanSelection } from "./components/LoanSelection/LoanSelection";
import { PersonalDetailsForm } from "./components/Application/PersonalDetailsForm";
import { DocumentUpload } from "./components/Application/DocumentUpload";
import { ApplicationReview } from "./components/Application/ApplicationReview";
import { ApplicationTracker } from "./components/Application/ApplicationTracker";
import { ApplicationApproved } from "./components/Application/ApplicationApproved";
import { UserDashboard } from "./components/Dashboard/UserDashboard";
import { AdminAlertInbox } from "./Admin/AdminAlertInbox";
import { AdminAnalytics } from "./Admin/AdminAnalytics";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminNew from "./Admin/AdminNew";

import theme from "../src/theme"; // your theme.ts

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
      <Route path="adminNew" element={<AdminNew />} />
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
      <Route path="documents" element={<DocumentUpload />} />
      <Route path="review" element={<ApplicationReview />} />
      <Route path="tracker" element={<ApplicationTracker />} />
      <Route path="approved" element={<ApplicationApproved />} />
      <Route
        path="*"
        element={<Navigate to="/user/personal-details" replace />}
      />
    </Routes>
  );
};

export default App;
