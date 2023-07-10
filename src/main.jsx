import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from '../views/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cardapio from '../views/Cardapio/Cardapio';
import { DOCES_MOCK } from './mock/DocesMock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
