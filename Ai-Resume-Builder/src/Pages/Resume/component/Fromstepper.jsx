import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoSection from './FormComponents/InfoSection';
import Education from './FormComponents/Education';
import Projects from './FormComponents/Projects';
import Skills from './FormComponents/Skills';
import Experience from './FormComponents/Experience';

const steps = ['Info', 'Experience', 'Projects', 'Education', 'Skills'];

export default function FormStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [validateInfoSection, setValidateInfoSection] = React.useState(null);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (activeStep === 0) {
            // Validate InfoSection before proceeding
            if (validateInfoSection) {
                const isValid = validateInfoSection();
                if (!isValid) return; // Prevent moving to the next step if validation fails
            }
        }

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - your Resume is Ready
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 && <InfoSection onValidate={(validate) => setValidateInfoSection(() => validate)} />}
                    {activeStep === 1 && <Experience />}
                    {activeStep === 2 && <Projects />}
                    {activeStep === 3 && <Education />}
                    {activeStep === 4 && <Skills />}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
