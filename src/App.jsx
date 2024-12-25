import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/app/*" element={<DashboardPage />} />
        <Route path="/" element={<Navigate to="/app/repositories" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

