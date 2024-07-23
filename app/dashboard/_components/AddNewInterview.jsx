"use client"
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { chatSession, ChatSession } from '../../../utils/GeminiAIModel'
const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
}));

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const GreenButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'green',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
}));
const AddNewInterview = () => {
  const [open, setOpen] = useState(false);
  const [jobPosition,setJobPositoin] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience,setJobExperience] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event)=>{
    console.log(jobPosition,jobDesc,jobExperience)
    const InputPromt = "Job position :"+jobPosition+",Job Description:"+jobDesc+"Years of Experience:"+jobExperience+",DEpending on Job Position,Job DEscription & Year of Experience give us"+process.env.NEXT_PUBLIC_INTERVIEW_QUESITON_COUNT+"interview question along with Answer in Json Format, Give us quesion and answer feild on Json"
    console.log(chatSession)
    const result = await chatSession.sendMessage(InputPromt);
    console.log(result.response.text())
    
  }

  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
        <h2 className='font-bold text-lg text-center'>+ Add New</h2>
      </div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="custom-dialog-title"
        aria-describedby="custom-dialog-description"
      >
        <CustomDialogTitle id="custom-dialog-title">
          Tell us More About Yourself
        </CustomDialogTitle>
        <CustomDialogContent>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Job Position/Role
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Ex. Full Stack Developer"
            fullWidth
            onChange={(event)=> setJobPositoin(event.target.value)}
          />
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Job Description/Tech Stack
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Ex. React, Angular, Node.js, MySQL, etc."
            fullWidth
            onChange={(event)=> setJobDesc(event.target.value)}
          />
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Years of Experience
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Ex. 5"
            fullWidth
            onChange={(event)=> setJobExperience(event.target.value)}
          />
        </CustomDialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <GreenButton onClick={handleSubmit}>Start Interview</GreenButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
