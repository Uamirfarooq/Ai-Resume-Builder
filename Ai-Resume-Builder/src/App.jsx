
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Navbar from "./components/Custom/Navbar"
import { Box } from '@mui/material';


function App() {
  const { user, isLoaded, isSignedIn } = useUser();


  if (!isSignedIn && isLoaded) return <Navigate to="/auth/sign-up" />;

  return (
    <>
      <Box sx={{
        background: 'linear-gradient(to right, #fbb6ce, #d6a0ff, #7f56d9)',
      }}>
        <Navbar />
        <Outlet />
      </Box>
    </>
  )
}

export default App
