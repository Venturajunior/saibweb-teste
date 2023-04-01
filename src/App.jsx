import React from 'react';
import './styles/global.css'
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./components/Routes";
import { ClientsProvider } from './contexts/ClientContext';

export default function App() {
  return (
    <BrowserRouter>
      <ClientsProvider>
        <CustomRoutes />
      </ClientsProvider>
    </BrowserRouter>
  );
}
