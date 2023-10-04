import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import Home from './pages/Home.jsx'
import Orcamento from './pages/Orcamento.jsx'
import Painel from './pages/Painel'
import PainelCheckboxs from './pages/PainelCheckboxs'
import Footer from './components/Footer';
import Sucesso from './components/Sucesso';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/orçamento',
    element: <Orcamento />
  },
  {
    path: '/painel',
    element: <Painel />
  },
  {
    path: '/painel/checkboxs',
    element: <PainelCheckboxs />
  },
  {
    path: '/sucesso',
    element: <Sucesso />
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);




