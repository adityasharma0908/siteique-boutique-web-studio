import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NavigationBar from "./components/Navbar";
import Process from "./pages/Process";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function AdminLoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin/dashboard");
  };

  return <AdminLogin onLogin={handleLogin} />;
}

function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = localStorage.getItem("siteique_token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <NavigationBar />}

      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route
          path="/testimonials"
          element={<Testimonials />}
        />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <Navigate
              to="/admin/dashboard"
              replace
            />
          }
        />

        <Route
          path="/admin/login"
          element={<AdminLoginPage />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;