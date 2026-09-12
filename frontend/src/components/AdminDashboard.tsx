import { useEffect, useState } from "react";
import "./Admin.css";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  status: string;
  createdAt: string;
};

const API_URL = import.meta.env.VITE_API_URL;

const statuses = ["NEW", "CONTACTED", "IN_PROGRESS", "COMPLETED"];

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("siteique_token");

  const fetchInquiries = async () => {
    try {
      const response = await fetch(`${API_URL}/api/inquiries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch inquiries");

      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`${API_URL}/api/inquiries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      setInquiries((current) =>
        current.map((inquiry) =>
          inquiry.id === id ? { ...inquiry, status } : inquiry
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("siteique_token");
    window.location.href = "/admin/login";
  };

  const total = inquiries.length;
  const newCount = inquiries.filter((i) => i.status === "NEW").length;
  const contacted = inquiries.filter(
    (i) => i.status === "CONTACTED"
  ).length;
  const completed = inquiries.filter(
    (i) => i.status === "COMPLETED"
  ).length;

  const getStatusClass = (status: string) => {
    switch (status) {
      case "NEW":
        return "status-new";
      case "CONTACTED":
        return "status-contacted";
      case "IN_PROGRESS":
        return "status-progress";
      case "COMPLETED":
        return "status-completed";
      default:
        return "status-new";
    }
  };

  return (
    <main className="admin-page">
      <div className="admin-shell">

        <header className="admin-header">
          <div>
            <div className="admin-brand">
              <span className="admin-dot" />
              <span className="admin-brand-name">SITEIQUE</span>
            </div>

            <p className="admin-private">
              Private studio console
            </p>
          </div>

          <button
            onClick={logout}
            className="admin-logout"
          >
            Logout
          </button>
        </header>

        <section className="admin-intro">
          <p className="admin-eyebrow">
            Studio / Overview
          </p>

          <div className="admin-intro-row">
            <div>
              <h1 className="admin-title">
                Admin Console
              </h1>

              <p className="admin-subtitle">
                Studio Console / Project Management
              </p>
            </div>

            <div className="admin-date">
              {new Date().toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </section>

        <section className="admin-stats">
          {[
            ["01", "Project inquiries", total],
            ["02", "New", newCount],
            ["03", "In conversation", contacted],
            ["04", "Completed", completed],
          ].map(([number, label, value]) => (
            <div className="admin-stat" key={number}>
              <div className="admin-stat-top">
                <span className="admin-stat-number">
                  {number}
                </span>

                <span className="admin-stat-value">
                  {value}
                </span>
              </div>

              <p className="admin-stat-label">
                {label}
              </p>
            </div>
          ))}
        </section>

        <section className="admin-section">
          <div className="admin-section-heading">
            <div>
              <p className="admin-eyebrow">
                Client pipeline
              </p>

              <h2 className="admin-section-title">
                Recent inquiries
              </h2>
            </div>

            <span className="admin-records">
              {total.toString().padStart(2, "0")} records
            </span>
          </div>

          <div className="admin-table-wrap">
            {loading ? (
              <div className="admin-empty">
                Loading inquiries...
              </div>
            ) : inquiries.length === 0 ? (
              <div className="admin-empty">
                <p>No inquiries yet.</p>
                <p>
                  New project requests will appear here.
                </p>
              </div>
            ) : (
              <div className="admin-table-scroll">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Company</th>
                      <th>Project</th>
                      <th>Budget</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {inquiries.map((inquiry) => (
                      <tr key={inquiry.id}>
                        <td>
                          <div className="admin-client">
                            {inquiry.name}
                          </div>

                          <div className="admin-email">
                            {inquiry.email}
                          </div>
                        </td>

                        <td>
                          {inquiry.company || "—"}
                        </td>

                        <td>
                          {inquiry.projectType}
                        </td>

                        <td>
                          {inquiry.budget || "—"}
                        </td>

                        <td>
                          <select
                            value={inquiry.status}
                            onChange={(e) =>
                              updateStatus(
                                inquiry.id,
                                e.target.value
                              )
                            }
                            className={`admin-status ${getStatusClass(
                              inquiry.status
                            )}`}
                          >
                            {statuses.map((status) => (
                              <option
                                key={status}
                                value={status}
                              >
                                {status.replace("_", " ")}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <footer className="admin-footer">
          Siteique / Private Studio Console
        </footer>
      </div>
    </main>
  );
}