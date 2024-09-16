import { Box, Card, Typography } from '@mui/material'
import { PlusSquare } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeNail = ({ item }) => {

    return (
        <Link to={`/dashboard/resume/${item.resumeid}/edit`}>
            <Card
                // onClick={} 
                sx={{
                    height: 250,
                    backgroundColor: "#e2e8f0",
                    boxShadow: 10,
                    border: "4px dashed  #94a3b8 ",
                    borderRadius: 2,
                    transition: "transform 0.2s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        boxShadow: 10,

                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}
            >
                <Typography>{item.title}</Typography>
            </Card>
        </Link>
    )
}

export default ResumeNail