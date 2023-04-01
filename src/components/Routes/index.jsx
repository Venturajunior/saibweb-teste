import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Clients from '../../pages/Clients';
import ManageClients from '../../pages/ManageClients';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/manageclients" element={<ManageClients />} />
    </Routes>
  );
}