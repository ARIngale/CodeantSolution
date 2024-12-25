import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth } from '../components/Auth';
import { SAAS } from '../components/SAAS';
import { Self } from '../components/Self';

function AuthPage() {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<SAAS />} />
        <Route path="saas" element={<SAAS />} />
        <Route path="self-hosted" element={<Self />} />
      </Route>
    </Routes>
  );
}

export default AuthPage;

