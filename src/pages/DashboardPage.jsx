import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Repositories from '../components/Repositories';
import UnderConstruction from '../components/UnderConstruction';

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Routes>
          <Route path="repositories" element={<Repositories isSidebarOpen={isSidebarOpen} />} />
          <Route path="code-review" element={<UnderConstruction />} />
          <Route path="cloud-security" element={<UnderConstruction />} />
          <Route path="how-to-use" element={<UnderConstruction />} />
          <Route path="settings" element={<UnderConstruction />} />
          <Route path="report" element={<UnderConstruction />} />
          <Route path="*" element={<Navigate to="repositories" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default DashboardPage;

