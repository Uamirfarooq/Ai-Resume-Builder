import { SignIn } from '@clerk/clerk-react'
import { Container } from '@mui/material'

import React from 'react'

const Signup = () => {
  return (
    <Container sx={{maxWidth: "lg", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <SignIn />
    </Container>
 
  )
}

export default Signup