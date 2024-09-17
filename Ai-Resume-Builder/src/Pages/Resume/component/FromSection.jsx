import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { Box, TextField, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';

const FromSection = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const handleOnChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setResumeInfo((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSave = (e) => {
        e.preventDefault();
        // Handle save logic here
        console.log("Form submitted with:", resumeInfo);
    };

    return (
        <Box
            component="form"
            onSubmit={onSave}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                padding: 4,
                maxWidth: 500,
                margin: '0 auto',
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', mb: 3 }}>
                Edit Profile
            </Typography>

            <TextField
                label="Full Name"
                variant="outlined"
                name="name"
                onChange={handleOnChange}
                fullWidth
                sx={{ backgroundColor: '#f9f9f9' }}
            />

            <TextField
                label="Title"
                variant="outlined"
                name="title"
                onChange={handleOnChange}
                fullWidth
                sx={{ backgroundColor: '#f9f9f9' }}
            />

            <TextField
                label="Description"
                variant="outlined"
                name="description"
                onChange={handleOnChange}
                fullWidth
                multiline
                rows={4}
                sx={{ backgroundColor: '#f9f9f9' }}
            />

            <TextField
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleOnChange}
                fullWidth
                sx={{ backgroundColor: '#f9f9f9' }}
            />

            <TextField
                label="Mobile Number"
                variant="outlined"
                name="mobile"
                onChange={handleOnChange}
                fullWidth
                sx={{ backgroundColor: '#f9f9f9' }}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{
                    backgroundColor: '#694B08',
                    color: '#fff',
                    padding: '10px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#543A06',
                    },
                }}
            >
                Save
            </Button>
        </Box>
    );
};

export default FromSection;
