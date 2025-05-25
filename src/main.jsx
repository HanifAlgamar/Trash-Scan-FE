import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import Edukasi from './edukasi.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/about",
//     element: <About/>,
//   },
//   {
//     path: "/edukasi",
//     element: <Edukasi/>,
//   }
// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/edukasi" element={<Edukasi />} />
      </Routes>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}

  </StrictMode>,  
)
