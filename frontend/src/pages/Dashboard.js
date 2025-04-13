import React from "react";
import StreakTracker from "../components/StreakTracker";

const Dashboard = () => {
  return (
    <>
      <style>
        {`
          .dashboard-container {
            min-height: 100vh;
            padding: 2rem;
            background-color: #f7fafc; /* light gray */
          }

          .dashboard-title {
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }
        `}
      </style>

      <div className="dashboard-container">
        <h1 className="dashboard-title">📚 Dashboard</h1>
        <StreakTracker />
      </div>
    </>
  );
};

export default Dashboard;
