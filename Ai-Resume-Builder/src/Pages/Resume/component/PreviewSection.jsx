import React, { useContext } from 'react';
import { Container, Box, Typography, Grid, Divider, List, ListItem, ListItemText, Card, Paper, Button } from '@mui/material';
import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


// Component to display resume sections
const ResumePage = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    console.log(resumeInfo);


    const profile = resumeInfo;

    return (
        <Card
            // onClick={} 
            sx={{
                mt: 2,
                boxShadow: 10,
                borderRadius: 2,
                transition: "transform 0.2s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.002)",
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    boxShadow: 10,
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
            }}
        >
            <Container maxWidth="md" sx={{ fontFamily: 'Playfair , serif' }}>
                {/* Header Section */}
                <Paper elevation={0} sx={{ px: 2, mt: 6 }}>
                    <Typography variant="h4" align="left" sx={{ fontFamily: 'Playfair , serif', color: "#694B08" }}>
                        {profile.name}
                    </Typography>
                    <Typography variant="h6" align="left" sx={{ fontFamily: 'Playfair , serif', color: '#252525', fontStyle: "italic", textTransform: 'uppercase' }}>
                        {profile.title}
                    </Typography>
                    <Box sx={{ border: 1, display: "flex", justifyContent: "space-around",alignContent: "center", borderColor: '#694B08', py: "2px",mb:2 }}>
                        <Typography sx={{ color: "#694B08", fontSize: "10px" }}><Email sx={{mr:1, fontSize: 10 }} /> {profile.email}</Typography>
                        <Typography sx={{ color: "#694B08", fontSize: "10px" }}><PhoneEnabledIcon sx={{ mr: 1, fontSize: 10 }} /> {profile.mobile}</Typography>
                        <Typography sx={{ color: "#694B08", fontSize: "10px" }}><LanguageIcon sx={{ mr: 1, fontSize: 10 }} />PortFolio website</Typography>
                    </Box>
                    <Typography variant="body1" align="center" sx={{ fontFamily: 'Playfair, serif', fontSize: "11px", mb: 2, color: '#333' }}>
                        {profile.description}
                    </Typography>
                </Paper>

                {/* Experience Section */}
                <Paper elevation={0} sx={{ px: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair, serif', fontWeight: 500, color: "#694B08" }}>
                            Experience
                        </Typography>
                        <Divider sx={{ flexGrow: 1, marginLeft: 2, backgroundColor: "#694B08" }} />
                    </Box>
                    {profile.experience.map((exp, index) => (
                        <Box key={index} sx={{ mb: 3, ml: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontFamily: 'Playfair, serif', color: '#000' }}>
                                    {exp.role}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontSize: "10px", fontStyle: 'italic', color: '#6c757d' }}>
                                    {exp.company} | {exp.duration}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ fontFamily: 'Playfair, serif', fontSize: "11px", mb: 2, color: '#333' }}>
                                {exp.description}
                            </Typography>
                        </Box>
                    ))}
                </Paper>

                {/* Projects Section */}
                <Paper elevation={0} sx={{ px: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair, serif', fontWeight: 500, color: "#694B08" }}>
                            Projects
                        </Typography>
                        <Divider sx={{ flexGrow: 1, marginLeft: 2, backgroundColor: "#694B08" }} />
                    </Box>
                    {profile.projects.map((project, index) => (
                        <Box key={index} sx={{ mb: 3, ml: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                                <Typography sx={{ fontFamily: 'Playfair, serif', color: '#000' }}>
                                    {project.name}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ fontFamily: 'Playfair, serif', fontSize: "11px", color: '#333' }}>
                                {project.description}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Playfair, serif', fontSize: "9px", color: '#694B08', textDecoration: 'underline' }}>
                                {project.link}
                            </Typography>
                        </Box>
                    ))}
                </Paper>

                {/* Education Section */}
                <Paper elevation={0} sx={{ px: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair, serif', fontWeight: 500, color: "#694B08" }}>
                            Education
                        </Typography>
                        <Divider sx={{ flexGrow: 1, marginLeft: 2, backgroundColor: "#694B08" }} />
                    </Box>
                    {profile.education.map((exp, index) => (
                        <Box key={index} sx={{ mb: 1, ml: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontSize: "14px", fontFamily: 'Playfair, serif', color: '#694B08' }}>
                                    {exp.university}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontSize: "10px", fontStyle: 'italic', color: '#6c757d' }}>
                                    {exp.year}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{
                                fontFamily: 'Playfair, serif', fontSize: "11px",
                                color: '#333'
                            }}>
                                {exp.degree}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Playfair, serif', fontSize: "11px", color: '#333' }}>
                                GPA: {exp.gpa}
                            </Typography>
                        </Box>
                    ))}
                </Paper>
                {/* Skills Section */}
                <Paper elevation={0} sx={{ px: 2 ,mb: 4}}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair, serif', fontWeight: 500, color: "#694B08" }}>
                            Skills
                        </Typography>
                        <Divider sx={{ flexGrow: 1, marginLeft: 2, backgroundColor: "#694B08" }} />
                    </Box>
                    <Box sx={{ display: "flex", fontFamily: 'Playfair, serif', justifyContent: "space-around" }}>
                        {/* Left column - odd index skills */}
                        <Box >
                            {profile.skills.map((skill, index) =>
                                index % 2 !== 0 ? (
                                    <Box
                                        sx={{ fontSize: "12px", fontFamily: 'Playfair, serif', color: "#694B08" }}
                                        key={index}
                                    >
                                        <FiberManualRecordIcon sx={{ fontSize: "7px" }} />{skill}
                                    </Box>
                                ) : null
                            )}
                        </Box>
                        {/* Right column - even index skills */}
                        <Box>
                            {profile.skills.map((skill, index) =>
                                index % 2 === 0 ? (
                                    <Box
                                        sx={{ fontSize: "12px", fontFamily: 'Playfair, serif', color: "#694B08" }}
                                        key={index}
                                    >
                                        <FiberManualRecordIcon sx={{ fontSize: "7px" }} />{skill}
                                    </Box>
                                ) : null
                            )}
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Card>
    );
};

// Main App Component to render Resume
const PreviewSection = () => {
    return (
        <Box>
            <ResumePage />
        </Box>
    );
};

export default PreviewSection;
