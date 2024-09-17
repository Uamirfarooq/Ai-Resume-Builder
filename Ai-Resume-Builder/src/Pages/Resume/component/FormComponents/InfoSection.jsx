import { ResumeInfoContext } from '@/contectApi/ResumeContext';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile Number must be 10 digits').required('Mobile Number is required'),
});

const InfoSection = ({ onValidate }) => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [errors, setErrors] = React.useState({});

    const handleOnChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setResumeInfo((prevState) => ({ ...prevState, [name]: value }));
    };

    const validate = () => {
        try {
            validationSchema.validateSync(resumeInfo, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
            return false;
        }
    };

    // Trigger validation on component mount or when `onValidate` is called
    React.useEffect(() => {
        if (onValidate) {
            onValidate(validate);
        }
    }, [onValidate]);

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', m: 3 }}>
                Personal Profile
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                    label="Full Name"
                    variant="outlined"
                    name="name"
                    onChange={handleOnChange}
                    value={resumeInfo.name || ''}
                    fullWidth
                    sx={{ backgroundColor: '#f9f9f9' }}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                />
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    onChange={handleOnChange}
                    value={resumeInfo.title || ''}
                    fullWidth
                    sx={{ backgroundColor: '#f9f9f9' }}
                    error={Boolean(errors.title)}
                    helperText={errors.title}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    onChange={handleOnChange}
                    value={resumeInfo.description || ''}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ backgroundColor: '#f9f9f9' }}
                    error={Boolean(errors.description)}
                    helperText={errors.description}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={handleOnChange}
                    value={resumeInfo.email || ''}
                    fullWidth
                    sx={{ backgroundColor: '#f9f9f9' }}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                />
                <TextField
                    label="Mobile Number"
                    variant="outlined"
                    name="mobile"
                    onChange={handleOnChange}
                    value={resumeInfo.mobile || ''}
                    fullWidth
                    sx={{ backgroundColor: '#f9f9f9' }}
                    error={Boolean(errors.mobile)}
                    helperText={errors.mobile}
                />
            </Box>
        </>
    );
};

export default InfoSection;
