import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user session (or token) to log out
    sessionStorage.removeItem("user");
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
        {/* Add more nav items here as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
