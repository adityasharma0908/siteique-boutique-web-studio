import { useState, type FormEvent } from "react";
import "./Admin.css";

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({
  onLogin,
}: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
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
        throw new Error(
          data.message || "Invalid credentials."
        );
      }

      localStorage.setItem(
        "siteique_token",
        data.token
      );

      onLogin();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-page admin-login-page">
      <div className="admin-shell admin-login-shell">

        <header className="admin-header">
          <div className="admin-brand">
            <span className="admin-dot" />
            <span className="admin-brand-name">
              SITEIQUE
            </span>
          </div>

          <span className="admin-private">
            Private access
          </span>
        </header>

        <div className="admin-login-content">
          <div className="admin-login-box">

            <div className="admin-login-intro">
              <p className="admin-eyebrow">
                Studio / Login
              </p>

              <h1 className="admin-login-title">
                Welcome back.
              </h1>

              <p className="admin-login-subtitle">
                Access the private Siteique studio console.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="admin-login-form"
            >
              <div className="admin-field">
                <label>Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="admin@siteique.com"
                  required
                />
              </div>

              <div className="admin-field">
                <label>Password</label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="admin-error">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="admin-login-button"
              >
                <span>
                  {loading
                    ? "Signing in..."
                    : "Enter studio"}
                </span>

                <span>→</span>
              </button>
            </form>

            <p className="admin-login-note">
              Authorized Siteique personnel only.
            </p>
          </div>
        </div>

        <footer className="admin-footer">
          Siteique / Digital studio
        </footer>
      </div>
    </main>
  );
}