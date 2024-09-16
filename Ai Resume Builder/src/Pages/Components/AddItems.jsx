import { useUser } from '@clerk/clerk-react';
import { Box, Card, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Typography } from '@mui/material';
import { Loader2, PlusSquare } from 'lucide-react';
import React, { useState } from 'react';
import GlobleApi from "../../../Service/GlobleApi"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddItems = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resumeTitle, setResumeTitle] = useState("");

    const { user } = useUser()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onCreate = async () => {
        setLoading(true)
        const uuid = uuidv4();
        const data = {
            data: {
                title: resumeTitle,
                resumeid: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        }
        await GlobleApi.CreateNewResume(data).then(resp => {
            console.log(resp);
            setLoading(false)
        }, (error) => {
            console.log(error);
            setLoading(false)
        })

        setResumeTitle('')
        navigate(`/dashboard/resume/${uuid}/edit`)
        handleClose()

    }

    return (
        <Box>
            <Card
                onClick={handleClickOpen} // Use handleClickOpen to open the dialog
                sx={{
                    height: 250,
                    backgroundColor: "#e2e8f0",
                    boxShadow: 10,
                    border: "4px dashed  #94a3b8 ",
                    borderRadius: 2,
                    transition: "transform 0.2s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        boxShadow: 10,

                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}
            >
                <PlusSquare size={40} color='#94a3b8' />
            </Card>
            <Dialog

                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Create New Resume</Typography>
                    <DialogContentText sx={{ marginBottom: 2 }} id="alert-dialog-slide-description">
                        Add a title for your New Resume
                    </DialogContentText>
                    <Box sx={{ width: 500, maxWidth: '100%' }}>
                        <TextField fullWidth value={resumeTitle} label="Title" id="title" onChange={(e) => setResumeTitle(e.target.value)} />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ mr: 2, mb: 2 }}>
                    <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" color="success" disabled={!resumeTitle || loading} onClick={onCreate}>{loading ? <Loader2 className='animate-spin' /> : "Create"}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddItems;
