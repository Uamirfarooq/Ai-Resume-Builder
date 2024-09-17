import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FromSection from '../../component/FromSection'
import PreviewSection from '../../component/PreviewSection'
import dummydata from '@/data/dummydata'
import { ResumeInfoContext } from '@/contectApi/ResumeContext'

const EditResume = () => {
    const [resumeInfo, setResumeInfo] = useState(dummydata)
    const { resumeId } = useParams()
    useEffect(() => {
        setResumeInfo(dummydata)
    }, [])
    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            {/* <div>EditResume{resumeId}</div> */}
            <Container sx={{ maxWidth: "lg", pb:6, display: "grid", gridTemplateColumns: { sx: "repeat(1, 1fr)", md: "repeat(2, 1fr)", gap: 10, } }}>
                <FromSection />
                <PreviewSection />
            </Container>
        </ResumeInfoContext.Provider>
    )
}

export default EditResume