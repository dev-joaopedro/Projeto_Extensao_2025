import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cadastro from './Route/Cadastro.jsx';
import CriaUser from './Route/CriaUser.jsx';
import Calendario from './Route/Calendario.jsx';
import Agendar from './Route/Agendar.jsx';
import Agendamentos from './Route/Agendamentos.jsx';
import Cancelar from './Route/Cancelar.jsx';

import './index.css';
import App from './App.jsx';
import './input.css';
import './output.css';
import Home from './Route/Home.jsx';
import Perfil from './Route/Perfil.jsx';

const route = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cadastro />
      },
      {
        path: "criar",
        element: <CriaUser />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "perfil",
        element: <Perfil />
      },
      {
        path: "calendario",
        element: <Calendario />
      },
      {
        path: "agendar",
        element: < Agendar />
      },
      {
        path: "horarios",
        element: < Agendamentos />
      },
      {
        path: "cancelar",
        element: < Cancelar />
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
