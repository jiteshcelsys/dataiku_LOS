import { Avatar, Typography, Box } from "@mui/material";
import {
  BarChart3,
  CheckCircle,
  ClipboardList,
  Clock,
  ExternalLink,
  FileDown,
  Home,
  Search,
  Users,
  X,
  Menu,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const metricCards = [
    {
      title: "Total Applications",
      value: "1,245",
      subtitle: "Last 30 days",
      icon: ClipboardList,
      bgColor: "#f3f6fc",
    },
    {
      title: "Approved Loans",
      value: "890",
      subtitle: "Since last month",
      icon: CheckCircle,
      bgColor: "#ebefdc",
    },
    {
      title: "Pending Review",
      value: "120",
      subtitle: "Currently in queue",
      icon: Clock,
      bgColor: "#ffffff",
    },
    {
      title: "Rejected Applications",
      value: "85",
      subtitle: "Due to various reasons",
      icon: X,
      bgColor: "#ffffff",
    },
  ];

  const navigationItems = [
    {
      label: "Loan Applications",
      icon: Home,
      active: true,
    },
    {
      label: "Alert Inbox",
      icon: Users,
      active: false,
    },
    {
      label: "Analytics & Reports",
      icon: BarChart3,
      active: false,
    },
    {
      label: "Admin New",
      icon: BarChart3,
      active: false,
    },
  ];

  const loanApplications = [
    {
      applicant: {
        name: "Anya Sharma",
        avatar: "/newImage.webp",
        bgColor: "#fde5e6",
      },
      loanType: "Mortgage Loan",
      amount: "$350,000",
      stage: "Under Review",
      flag: {
        text: "Missing Documents",
        bgColor: "#FFFFFF",
        textColor: "#1e2128",
      },
      submissionDate: "2024-07-28",
    },
    {
      applicant: {
        name: "Ethan Chen",
        avatar: "/newImage.webp",
        bgColor: "#e6eefc",
      },
      loanType: "Business Loan",
      amount: "$120,000",
      stage: "Application Submitted",
      flag: null,
      submissionDate: "2024-07-27",
    },
    {
      applicant: {
        name: "Olivia Davis",
        avatar: "/newImage.webp",
        bgColor: "#e0fbec",
      },
      loanType: "Personal Loan",
      amount: "$25,000",
      stage: "Approved",
      flag: {
        text: "High Risk",
        bgColor: "#788740",
        textColor: "#ffffff",
      },
      submissionDate: "2024-07-26",
    },
    {
      applicant: {
        name: "Liam Johnson",
        avatar: "/newImage.webp",
        bgColor: "#e5eaf9",
      },
      loanType: "Auto Loan",
      amount: "$45,000",
      stage: "Rejected",
      flag: {
        text: "Fraud Alert",
        bgColor: "#e85963",
        textColor: "#ffffff",
      },
      submissionDate: "2024-07-25",
    },
    {
      applicant: {
        name: "Sophia Rodriguez",
        avatar: "/newImage.webp",
        bgColor: "#ecfcd8",
      },
      loanType: "Mortgage Loan",
      amount: "$420,000",
      stage: "Pending Documents",
      flag: null,
      submissionDate: "2024-07-24",
    },
  ];

  const handleNavigationClick = (item: string): void => {
    console.log(item);
    if (item === "Alert Inbox") {
      navigate("/admin/alert");
    } else if (item === "Analytics & Reports") {
      navigate("/admin/analytics");
    } else if (item === "Admin New") {
      navigate("/admin/adminNew");
    }
  };

  const sidebarStyle = {
    width: isMobile ? "100%" : "256px",
    height: "100%",
    backgroundColor: "white",
    borderRight: "1px solid #dee1e6",
    display: "flex",
    flexDirection: "column",
  };

  const drawer = (
    <div style={sidebarStyle as React.CSSProperties}>
      <div style={{ padding: "24px", display: "flex", flexDirection: "row" }}>
        <img
          style={{
            width: "100%",
            maxWidth: "198px",
            height: "52px",
            objectFit: "contain",
          }}
          alt="Logo"
          src="/download.png"
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: "#6B6B6B",
            fontSize: 18,
          }}
        >
          CELESTIAL SYSTEMS
        </Typography>
      </div>

      <nav style={{ padding: "0 16px", flex: 1 }}>
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} style={{ marginBottom: "4px" }}>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: item.active ? "#FFFFFF" : "transparent",
                  color: item.active ? "#1e2128" : "#565d6d",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "#f9f9f9";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "transparent";
                  }
                }}
                onClick={() => handleNavigationClick(item.label)}
              >
                <IconComponent size={20} style={{ marginRight: "12px" }} />
                {item.label}
              </button>
            </div>
          );
        })}
      </nav>

      {!isMobile && (
        <Box sx={{ p: 2, borderTop: "1px solid #dee1e6" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src="/rectangle-6.png"
                sx={{ width: 40, height: 40, bgcolor: "#fce1fc" }}
              >
                AU
              </Avatar>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  width: 10,
                  height: 10,
                  bgcolor: "#25984d",
                  borderRadius: "50%",
                  border: "1.5px solid white",
                }}
              />
            </Box>
            <Box sx={{ ml: 1.5 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#171a1f",
                  fontSize: 14,
                }}
              >
                Admin User
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: "#565d6d",
                  fontSize: 14,
                }}
              >
                Online
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );

  const getGridCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  };

  const getFilterGridCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  };
  const handleLogout = () => {
    // logout();
    navigate("/login");
    // handleMenuClose();
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#fafafb",
        overflow: "hidden",
        boxShadow: "0px 3px 6px rgba(18, 15, 40, 0.12)",
      }}
    >
      {/* Mobile Sidebar Overlay */}
      {mobileOpen && isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={handleDrawerToggle}
        >
          <div
            style={{
              width: "256px",
              height: "100%",
              backgroundColor: "white",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {drawer}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && drawer}

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top Navigation */}
        <header
          style={{
            height: "64px",
            backgroundColor: "white",
            borderBottom: "1px solid #dee1e6",
            boxShadow:
              "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: isMobile ? "space-between" : "flex-end",
              alignItems: "center",
              padding: "0 16px",
              gap: "16px",
            }}
          >
            {isMobile && (
              <button
                onClick={handleDrawerToggle}
                style={{
                  padding: "8px",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                <Menu size={24} color="#171a1f" />
              </button>
            )}

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <Search size={16} color="rgba(23, 26, 31, 0.4)" />
              </div>
              <input
                type="text"
                placeholder="Search all applications..."
                style={{
                  width: isMobile ? "200px" : "257px",
                  padding: "8px 12px 8px 40px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#e6f8f3",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="/avatar.jpg"
                onClick={handleLogout}
                alt="Avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main
          style={{
            flex: 1,
            overflow: "auto",
            padding: isMobile ? "16px" : isTablet ? "24px" : "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "16px" : "24px",
            }}
          >
            {/* Metric Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${getGridCols()}, 1fr)`,
                gap: isMobile ? "16px" : "24px",
              }}
            >
              {metricCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: card.bgColor,
                      padding: isMobile ? "16px" : "24px",
                      borderRadius: "8px",
                      boxShadow:
                        "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                      border: "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: "600",
                          color: "#19191f",
                          fontSize: "18px",
                          letterSpacing: "-0.35px",
                          lineHeight: "20px",
                          margin: 0,
                        }}
                      >
                        {card.title}
                      </h3>
                      <IconComponent size={20} />
                    </div>
                    <div
                      style={{
                        fontWeight: "700",
                        color: "#19191f",
                        fontSize: isMobile ? "20px" : "24px",
                        lineHeight: isMobile ? "28px" : "36px",
                        marginBottom: "16px",
                      }}
                    >
                      {card.value}
                    </div>
                    <p
                      style={{
                        fontWeight: "400",
                        color: "#565d6d",
                        fontSize: "12px",
                        lineHeight: "16px",
                        margin: 0,
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Filter Section */}
            <div
              style={{
                backgroundColor: "white",
                padding: isMobile ? "16px" : "24px",
                borderRadius: "8px",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                border: "none",
              }}
            >
              <h2
                style={{
                  fontWeight: "600",
                  color: "#171a1f",
                  fontSize: isMobile ? "18px" : "20px",
                  lineHeight: "28px",
                  marginBottom: "24px",
                  margin: "0 0 24px 0",
                }}
              >
                Filter Loan Applications
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${getFilterGridCols()}, 1fr)`,
                  gap: isMobile ? "16px" : "24px",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",

                      fontWeight: "500",
                      color: "#323743",
                      fontSize: "12px",
                      lineHeight: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    Applicant Name
                  </label>
                  <input
                    type="text"
                    placeholder="Search by name..."
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",

                      color: "#565d6d",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",

                      fontWeight: "500",
                      color: "#171a1f",
                      fontSize: "14px",
                      lineHeight: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    Loan Type
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",

                      color: "#171a1f",
                      outline: "none",
                    }}
                  >
                    <option value="">Select type</option>
                    <option value="mortgage">Mortgage Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="auto">Auto Loan</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",

                      fontWeight: "500",
                      color: "#171a1f",
                      fontSize: "14px",
                      lineHeight: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    Application Stage
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",

                      color: "#171a1f",
                      outline: "none",
                    }}
                  >
                    <option value="">Select stage</option>
                    <option value="submitted">Application Submitted</option>
                    <option value="review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="pending">Pending Documents</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",

                      fontWeight: "500",
                      color: "#323743",
                      fontSize: "12px",
                      lineHeight: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    Loan Amount (min)
                  </label>
                  <input
                    type="text"
                    defaultValue="$0"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",

                      color: "#565d6d",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "flex-end",
                  gap: "12px",
                }}
              >
                <button
                  style={{
                    padding: "8px 16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#171a1f",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  Clear Filters
                </button>
                <button
                  style={{
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    backgroundColor: "#376fc8",
                    cursor: "pointer",
                  }}
                >
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Applications Table */}
            <div
              style={{
                backgroundColor: "white",
                padding: isMobile ? "16px" : "24px",
                borderRadius: "8px",
                boxShadow:
                  "0px 0px 1px rgba(23, 26, 31, 0.05), 0px 0px 2px rgba(23, 26, 31, 0.08)",
                border: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                  gap: isMobile ? "16px" : "0",
                }}
              >
                <h2
                  style={{
                    fontWeight: "600",
                    color: "#171a1f",
                    fontSize: isMobile ? "18px" : "20px",
                    lineHeight: "28px",
                    margin: 0,
                  }}
                >
                  Recent Loan Applications
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "12px",
                    width: isMobile ? "100%" : "auto",
                  }}
                >
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#171a1f",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <FileDown size={16} style={{ marginRight: "8px" }} />
                    Bulk Export
                  </button>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#171a1f",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    <BarChart3 size={16} style={{ marginRight: "8px" }} />
                    Generate Report
                  </button>
                </div>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    minWidth: isMobile ? "800px" : "auto",
                    border: "1px solid #dee1e6",
                    borderRadius: "8px",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid #dee1e6",
                        backgroundColor: "#f9fafb",
                      }}
                    >
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "160px",
                        }}
                      >
                        Applicant
                      </th>
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "120px",
                        }}
                      >
                        Loan Type
                      </th>
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "100px",
                        }}
                      >
                        Amount
                      </th>
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "140px",
                        }}
                      >
                        Stage
                      </th>
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "140px",
                        }}
                      >
                        Flags/Exceptions
                      </th>
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "120px",
                        }}
                      >
                        Submission Date
                      </th>
                      <th
                        style={{
                          padding: "12px 24px",
                          textAlign: "right",

                          fontWeight: "500",
                          color: "#565d6d",
                          fontSize: "14px",
                          lineHeight: "20px",
                          minWidth: "120px",
                        }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loanApplications.map((application, index) => (
                      <tr
                        key={index}
                        style={{
                          borderBottom:
                            index < loanApplications.length - 1
                              ? "1px solid #f3f4f6"
                              : "none",
                        }}
                      >
                        <td style={{ padding: "20px 24px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: application.applicant.bgColor,
                                borderRadius: "50%",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={application.applicant.avatar}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <span
                              style={{
                                fontWeight: "600",
                                color: "#171a1f",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              {application.applicant.name}
                            </span>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "20px 24px",

                            fontWeight: "400",
                            color: "#171a1f",
                            fontSize: "14px",
                            lineHeight: "20px",
                          }}
                        >
                          {application.loanType}
                        </td>
                        <td
                          style={{
                            padding: "20px 24px",

                            fontWeight: "600",
                            color: "#171a1f",
                            fontSize: "14px",
                            lineHeight: "20px",
                          }}
                        >
                          {application.amount}
                        </td>
                        <td
                          style={{
                            padding: "20px 24px",

                            fontWeight: "400",
                            color: "#171a1f",
                            fontSize: "14px",
                            lineHeight: "20px",
                          }}
                        >
                          {application.stage}
                        </td>
                        <td style={{ padding: "20px 24px" }}>
                          {application.flag && (
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "4px 10px",
                                borderRadius: "12px",
                                fontSize: "12px",

                                fontWeight: "600",
                                lineHeight: "20px",
                                backgroundColor: application.flag.bgColor,
                                color: application.flag.textColor,
                              }}
                            >
                              {application.flag.text}
                            </span>
                          )}
                        </td>
                        <td
                          style={{
                            padding: "20px 24px",

                            fontWeight: "400",
                            color: "#171a1f",
                            fontSize: "14px",
                            lineHeight: "20px",
                          }}
                        >
                          {application.submissionDate}
                        </td>
                        <td
                          style={{ padding: "20px 24px", textAlign: "right" }}
                        >
                          <button
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              padding: "4px 8px",
                              border: "none",
                              backgroundColor: "transparent",
                              fontSize: "14px",

                              fontWeight: "600",
                              color: "#171a1f",
                              cursor: "pointer",
                            }}
                          >
                            View Details
                            <ExternalLink
                              size={16}
                              style={{ marginLeft: "8px" }}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "center",
                  marginTop: "24px",
                  gap: isMobile ? "16px" : "0",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    color: "#565d6d",
                    fontSize: "14px",
                    lineHeight: "20px",
                    margin: 0,
                  }}
                >
                  Showing 5 of 5 applications
                </p>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    disabled
                    style={{
                      padding: "4px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",

                      fontWeight: "500",
                      color: "#9ca3af",
                      backgroundColor: "#f9fafb",
                      cursor: "not-allowed",
                    }}
                  >
                    Previous
                  </button>
                  <button
                    style={{
                      padding: "4px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",

                      fontWeight: "500",
                      color: "#171a1f",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
