import React, { useContext, useState, useEffect } from 'react';
import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { TextField, Typography, Box, Button, Divider } from '@mui/material';

const Education = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        if (resumeInfo?.education) {
            setEducation(resumeInfo.education);
        }
    }, [resumeInfo]);

    const handleOnChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = education.map((edu, i) =>
            i === index ? { ...edu, [name]: value } : edu
        );
        setEducation(updatedEducation);
        setResumeInfo((prevState) => ({
            ...prevState,
            education: updatedEducation,
        }));
    };

    const handleAddEducation = () => {
        setEducation((prevEducation) => [
            ...prevEducation,
            { degree: '', university: '', gpa: '', year: '' },
        ]);
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
        setResumeInfo((prevState) => ({
            ...prevState,
            education: updatedEducation,
        }));
    };

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', m: 3 }}>
                Education
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {education.map((edu, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 2 }}>
                        <TextField
                            label="Degree"
                            variant="outlined"
                            name="degree"
                            onChange={(e) => handleOnChange(index, e)}
                            value={edu.degree || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="University"
                            variant="outlined"
                            name="university"
                            onChange={(e) => handleOnChange(index, e)}
                            value={edu.university || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="GPA"
                            variant="outlined"
                            name="gpa"
                            onChange={(e) => handleOnChange(index, e)}
                            value={edu.gpa || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="Year"
                            variant="outlined"
                            name="year"
                            onChange={(e) => handleOnChange(index, e)}
                            value={edu.year || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDeleteEducation(index)}
                            sx={{ mt: 1 }}
                        >
                            Delete Education
                        </Button>
                        <Divider />
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddEducation}
                    sx={{ mt: 2 }}
                >
                    Add Education
                </Button>
            </Box>
        </>
    );
};

export default Education;
