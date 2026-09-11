import { useEffect, useState } from "react";

interface Inquiry {
  id: number;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  status: string;
  createdAt: string;
}

function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem(
    "siteique_token"
  );

  const fetchInquiries = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inquiries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch inquiries");
      }

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

  const updateStatus = async (
    id: number,
    status: string
  ) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/inquiries/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      fetchInquiries();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("siteique_token");
    window.location.reload();
  };

  const total = inquiries.length;

  const newCount = inquiries.filter(
    (item) => item.status === "NEW"
  ).length;

  const contactedCount = inquiries.filter(
    (item) => item.status === "CONTACTED"
  ).length;

  const completedCount = inquiries.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  if (loading) {
    return (
      <div className="container py-5">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <p className="text-muted mb-1">
            SITEIQUE
          </p>

          <h1 className="fw-bold">
            Admin Dashboard
          </h1>
        </div>

        <button
          className="btn btn-outline-dark"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* Stats */}

      <div className="row g-4 mb-5">

        <div className="col-md-3">
          <div className="service-card p-4">
            <p className="text-muted">
              Total Inquiries
            </p>

            <h2 className="fw-bold">
              {total}
            </h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="service-card p-4">
            <p className="text-muted">
              New
            </p>

            <h2 className="fw-bold">
              {newCount}
            </h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="service-card p-4">
            <p className="text-muted">
              Contacted
            </p>

            <h2 className="fw-bold">
              {contactedCount}
            </h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="service-card p-4">
            <p className="text-muted">
              Completed
            </p>

            <h2 className="fw-bold">
              {completedCount}
            </h2>
          </div>
        </div>

      </div>

      {/* Inquiries */}

      <div className="service-card p-4">

        <h3 className="fw-bold mb-4">
          Project Inquiries
        </h3>

        {inquiries.length === 0 ? (
          <p className="text-muted">
            No inquiries yet.
          </p>
        ) : (
          <div className="table-responsive">

            <table className="table align-middle">

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
                      <strong>
                        {inquiry.name}
                      </strong>

                      <br />

                      <small className="text-muted">
                        {inquiry.email}
                      </small>
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
                        className="form-select"
                        value={inquiry.status}
                        onChange={(e) =>
                          updateStatus(
                            inquiry.id,
                            e.target.value
                          )
                        }
                      >
                        <option value="NEW">
                          NEW
                        </option>

                        <option value="CONTACTED">
                          CONTACTED
                        </option>

                        <option value="IN_PROGRESS">
                          IN PROGRESS
                        </option>

                        <option value="COMPLETED">
                          COMPLETED
                        </option>
                      </select>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;