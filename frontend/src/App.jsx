import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import HealthTipsPage from './pages/HealthTipsPage'; // <-- Import
import ReportsPage from './pages/ReportsPage';       // <-- Import
import ProfilePage from './pages/ProfilePage';       // <-- Import

function App() {
  return (
    <Routes>
      {/* Routes WITHOUT Navbar/Footer (Auth Pages) */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Routes WITH Navbar/Footer */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/health-tips" element={<HealthTipsPage />} /> {/* <-- Add Route */}
        <Route path="/reports" element={<ReportsPage />} />       {/* <-- Add Route */}
        <Route path="/profile" element={<ProfilePage />} />       {/* <-- Add Route */}
        {/* Add a placeholder route for settings */}
        <Route path="/settings" element={<ProfilePage />} /> 
      </Route>
    </Routes>
  );
}

export default App;