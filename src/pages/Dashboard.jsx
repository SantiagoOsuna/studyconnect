import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardView from "../components/DashboardView";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return <DashboardView onLogout={handleLogout} />;
}

export default Dashboard;