import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './auth/sign-up/index.jsx'
import Home from './Pages/Home.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './Pages/Resume/[resumeId]/edit/editResume.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: 'Dashboard',
        element: <Dashboard />,
      },
      {
        path: 'dashboard/Resume/:resumeId/edit',
        element: <EditResume />,
      }
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/sign-up',
    element: <Signup />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
