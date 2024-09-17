import React from 'react';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react';
import { Container, Typography, Button, Box } from '@mui/material';
import ResponsiveAppBar from '@/components/Custom/Navbar';

const Home = () => {
  const { user, isLoading, isSignedIn } = useUser();

  // If Clerk is still loading, we can show a loading message
  if (isLoading) {
    return (
      <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  return (
    <>
    <ResponsiveAppBar />
    <Container 
      maxWidth="lg" 
      sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}
    >
      {/* User is Signed In */}
      {isSignedIn ? (
        <>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4">Welcome back, {user?.firstName}!</Typography>
          </Box>
          
          <Box>
            <SignOutButton>
              <Button variant="contained" color="error">Sign Out</Button>
            </SignOutButton>
          </Box>
        </>
      ) : (
        // User is not signed in
        <>
          <Typography variant="h4" gutterBottom>
            Welcome to Our Ai Resume Builder!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Please sign in to access your account and explore our services.
          </Typography>
          
        </>
      )}
    </Container>
    </>
  );
};

export default Home;
