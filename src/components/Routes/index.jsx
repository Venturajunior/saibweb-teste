import { Routes, Route } from 'react-router-dom';
import Clients from '../../pages/Clients';
import ManageClients from '../../pages/ManageClients';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Clients />} />
      <Route path="/manageclients" element={<ManageClients />} />
    </Routes>
  );
}