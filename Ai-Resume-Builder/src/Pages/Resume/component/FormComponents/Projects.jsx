import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { TextField, Typography, Box, Button, Divider } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';

const Projects = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (resumeInfo?.projects) {
            setProjects(resumeInfo.projects);
        }
    }, [resumeInfo]);

    const handleOnChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = projects.map((proj, i) =>
            i === index ? { ...proj, [name]: value } : proj
        );
        setProjects(updatedProjects);
        setResumeInfo((prevState) => ({
            ...prevState,
            projects: updatedProjects,
        }));
    };

    const handleAddProject = () => {
        setProjects((prevProjects) => {
            const updatedProjects = [
                ...prevProjects,
                { name: '', description: '', link: '' },
            ];
            setResumeInfo((prevState) => ({
                ...prevState,
                projects: updatedProjects,
            }));
            return updatedProjects;
        });
    };

    const handleDeleteProject = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
        setResumeInfo((prevState) => ({
            ...prevState,
            projects: updatedProjects,
        }));
    };

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', m: 3 }}>
                Projects
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {projects.map((proj, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 2 }}>
                        <TextField
                            label="Project Name"
                            variant="outlined"
                            name="name"
                            onChange={(e) => handleOnChange(index, e)}
                            value={proj.name || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            name="description"
                            onChange={(e) => handleOnChange(index, e)}
                            value={proj.description || ''}
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <TextField
                            label="Link"
                            variant="outlined"
                            name="link"
                            onChange={(e) => handleOnChange(index, e)}
                            value={proj.link || ''}
                            fullWidth
                            sx={{ backgroundColor: '#f9f9f9' }}
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDeleteProject(index)}
                            sx={{ mt: 1 }}
                        >
                            Delete Project
                        </Button>
                        <Divider />
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddProject}
                    sx={{ mt: 2 }}
                >
                    Add Project
                </Button>
            </Box>
        </>
    );
};

export default Projects;
