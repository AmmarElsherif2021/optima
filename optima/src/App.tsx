import { useState } from 'react'
import Home from './Routes/Home/Home';
import Linear from './Routes/Linear/Linear';
import NonLinear from './Routes/NonLinear/NonLinear';
import Discrete from './Routes/Discrete/Discrete';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './App.css'

function Routes() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/linear',
            element: <Linear />
          },
          {
            path: '/non-linear',
            element: <NonLinear />
          },
          {
            path: '/discrete',
            element: <Discrete />
          }
        ]
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

function App() {


  return (
    <>

      <h1>This is Optima</h1>
      <Routes />

    </>
  )
}

export default App
