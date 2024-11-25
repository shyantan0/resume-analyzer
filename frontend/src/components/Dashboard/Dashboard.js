import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Overview</h3>
          <p>Welcome to your dashboard</p>
        </div>
        <div className="dashboard-card">
          <h3>Statistics</h3>
          <p>Your stats will appear here</p>
        </div>
        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <p>Recent activities will be listed here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 