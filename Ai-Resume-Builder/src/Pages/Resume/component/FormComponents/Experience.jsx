import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { TextField, Typography, Box, Button, Divider } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';

const Experience = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        if (resumeInfo?.experience) {
            setExperiences(resumeInfo.experience);
        }
    }, [resumeInfo]);

    const handleOnChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, [name]: value } : exp
        );
        setExperiences(updatedExperiences);
        setResumeInfo((prevState) => ({
            ...prevState,
            experience: updatedExperiences,
        }));
    };

    const handleAddExperience = () => {
        setExperiences((prevExperiences) => [
            ...prevExperiences,
            { role: '', company: '', description: '', duration: '' },
        ]);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
        setResumeInfo((prevState) => ({
            ...prevState,
            experience: updatedExperiences,
        }));
    };

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', m: 3 }}>
                Experience
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {experiences.map((exp, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 2 }}>
                        <TextField
                            label="Role"
                            variant="outlined"
                            name="role"
                            onChange={(e) => handleOnChange(index, e)}
                            value={exp.role || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="Company"
                            variant="outlined"
                            name="company"
                            onChange={(e) => handleOnChange(index, e)}
                            value={exp.company || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            name="description"
                            onChange={(e) => handleOnChange(index, e)}
                            value={exp.description || ''}
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="Duration"
                            variant="outlined"
                            name="duration"
                            onChange={(e) => handleOnChange(index, e)}
                            value={exp.duration || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDeleteExperience(index)}
                            sx={{ mt: 1 }}
                        >
                            Delete Experience
                        </Button>
                        <Divider />
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddExperience}
                    sx={{ mt: 2 }}
                >
                    Add Experience
                </Button>
            </Box>
        </>
    );
};

export default Experience;
