import { useState } from "react";

interface AdminLoginProps {
  onLogin: (token: string) => void;
}

function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("siteique_token", data.token);

      onLogin(data.token);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="service-card p-5"
        style={{
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <h1 className="fw-bold mb-2">
          SITEIQUE
        </h1>

        <p className="text-muted mb-4">
          Admin Dashboard
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="admin@siteique.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="text-danger mb-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary-custom w-100"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;