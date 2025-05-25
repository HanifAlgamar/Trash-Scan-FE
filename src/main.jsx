import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import Edukasi from './edukasi.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/edukasi",
    element: <Edukasi/>,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,  
)
