import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AddItems from './Components/AddItems'
import { useUser } from '@clerk/clerk-react'
import GlobleApi from '../../Service/GlobleApi'
import ResumeNail from './Components/ResumeNail'

const Dashboard = () => {
  const { user } = useUser()
  const [items, setItems] = React.useState([])
  const GetResumeList = () => {
    GlobleApi.GetResumeById(user?.primaryEmailAddress?.emailAddress).then(resp => {
      console.log(resp.data.data)
      setItems(resp.data.data)
    }), (error => console.log(error));

  }

  useEffect(() => { user && GetResumeList() }, [user])
  return (
    <Container sx={{ userSelect: "none", maxWidth: "lg", height: "100vh", display: "flex", justifyContent: "center" }}>
      <Container>
        <Typography sx={{ userSelect: "none", font: "message-box", fontSize: 40, marginTop: 10, marginBottom: 1 }}>
          My Resume
        </Typography>
        <Typography sx={{ marginBottom: 10 }}>
          Start and Explore Ai-Resume for your Next Job
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)", }, gap: 2 }}>
          <AddItems />
          {items.map((item, index) => {
            return <ResumeNail item={item} key={index} />
          })}
        </Box>
      </Container>
    </Container>
  )
}

export default Dashboard