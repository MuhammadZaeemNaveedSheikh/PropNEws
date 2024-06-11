import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes/main.jsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
