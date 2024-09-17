import React, { useContext, useState, useEffect } from 'react';
import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { TextField, Typography, Box, Button, Divider } from '@mui/material';

const Skills = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        if (resumeInfo?.skills) {
            setSkills(resumeInfo.skills);
        }
    }, [resumeInfo]);

    const handleOnChange = (index, e) => {
        const { value } = e.target;
        const updatedSkills = skills.map((skill, i) =>
            i === index ? value : skill
        );
        setSkills(updatedSkills);
        setResumeInfo((prevState) => ({
            ...prevState,
            skills: updatedSkills,
        }));
    };

    const handleAddSkill = () => {
        setSkills((prevSkills) => [...prevSkills, '']);
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
        setResumeInfo((prevState) => ({
            ...prevState,
            skills: updatedSkills,
        }));
    };

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', m: 3 }}>
                Skills
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {skills.map((skill, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignContent: "center", justifyContent: "space-between",gap: 3, }}>
                            <TextField
                                label="Skill"
                                variant="outlined"
                                value={skill || ''}
                                onChange={(e) => handleOnChange(index, e)}
                                fullWidth
                                sx={{ backgroundColor: '#f9f9f9' }}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleDeleteSkill(index)}
                                sx={{ mt: 1 }}
                            >
                                Delete 
                            </Button>
                        </Box>
                        <Divider />
                    </Box>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddSkill}
                    sx={{ mt: 2 }}
                >
                    Add Skill
                </Button>
            </Box>
        </>
    );
};

export default Skills;
