import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { Box, TextField, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';
import FormStepper from './Fromstepper';

const FromSection = () => {


    return (
        <Box
            component="form"
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
            <FormStepper />


        </Box>
    );
};

export default FromSection;
