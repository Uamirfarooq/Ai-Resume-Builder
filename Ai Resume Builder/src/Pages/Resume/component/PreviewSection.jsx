import React, { useContext } from 'react';
import { Container, Box, Typography, Grid, Divider, List, ListItem, ListItemText } from '@mui/material';
import { ResumeInfoContext } from '@/contectApi/ResumeContext';

// Sample Data (you can replace this with dynamic data)
const resumeData = {
    name: "Harper Russo",
    contactInfo: {
        phone: "+123-456-7890",
        email: "hello@reallygreatsite.com",
        social: "@reallygreatsite",
        address: "123 Anywhere St., Any City, ST 12345"
    },
    profileSummary: `I am a proficient Business Operations Manager with a strong focus on achieving outcomes, possessing
  notable expertise in media management and assuming leadership responsibilities. I have demonstrated
  exceptional leadership capabilities while overseeing and directing media operations in North America and the
  APAC region.`,
    strengthsAndExpertise: [
        "P&L Management",
        "Business Development",
        "Strategic Planning",
        "Financial Reporting",
        "Negotiation Skills",
        "Client Relationship Management",
        "Team Leadership",
        "Communication",
        "Operations Management"
    ],
    professionalExperience: [
        {
            role: "Operations Manager",
            company: "Ginyard International Co.",
            duration: "October 2019 - Present",
            description: `Demonstrated exceptional leadership by overseeing nationwide operations, resulting in a phenomenal
      growth rate of 120% within two years. Played a pivotal role in spearheading the conception and
      execution of subscription video-on-demand over-the-top streaming products.`,
            accomplishments: [
                "Achieved 120% growth in operations within two years.",
                "Led the execution of subscription video-on-demand products."
            ]
        },
        {
            role: "Business Development Manager",
            company: "Giggling Platypus Co.",
            duration: "August 2017 - September 2019",
            description: `Drove the organisation to remarkable achievements, realising an exceptional growth rate of 180% over
      two years. Proactively identified solutions to enhance the sales team's capabilities.`,
            accomplishments: [
                "Achieved 180% growth over two years.",
                "Enhanced sales team's capabilities."
            ]
        }
    ]
};

// Component to display resume sections
const ResumePage = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    console.log(resumeInfo);
    

    const { name, contactInfo, profileSummary, strengthsAndExpertise, professionalExperience } = resumeInfo;

    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>{name}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {contactInfo.phone} · {contactInfo.email} · {contactInfo.social}
                </Typography>
                <Typography variant="body1">{contactInfo.address}</Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Profile Summary */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Business Operations Manager</Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>{profileSummary}</Typography>
            </Box>

            {/* Strengths and Expertise */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Strengths and Expertise</Typography>
                <Grid container spacing={2}>
                    {strengthsAndExpertise.map((skill, index) => (
                        <Grid item xs={6} sm={4} key={index}>
                            <Typography variant="body1">• {skill}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Professional Experience */}
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Professional Experience</Typography>
                {professionalExperience.map((job, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{job.role}</Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'gray' }}>{job.company} | {job.duration}</Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>{job.description}</Typography>
                        <List dense>
                            {job.accomplishments.map((acc, i) => (
                                <ListItem key={i} sx={{ py: 0 }}>
                                    <ListItemText primary={`• ${acc}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

// Main App Component to render Resume
const PreviewSection = () => {
    return (
        <div>
            <ResumePage data={resumeData} />
        </div>
    );
};

export default PreviewSection;
