import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router'
import AuthProvide from './ContextAuth/AuthProvide'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvide><RouterProvider router={router}></RouterProvider> <ToastContainer /></AuthProvide>
    
  </StrictMode>,
)
