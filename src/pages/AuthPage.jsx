import React from 'react';
import { Auth } from '../components/Auth';
import { SAAS } from '../components/SAAS';
import { Self } from '../components/Self';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function AuthPage() {
  return (
    <Router>
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route index element={<SAAS />} />
        <Route path="saas" element={<SAAS />} />
        <Route path="self-hosted" element={<Self />} />
      </Route>
    </Routes>
  </Router>
  );
}

