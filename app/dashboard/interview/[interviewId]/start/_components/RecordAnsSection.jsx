"use client"
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import Webcam from 'react-webcam'
import {Button} from '@mui/material'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
const RecordAnsSection = () => {
  const [userAnswer,setUserAnswer] = useState('')

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  useEffect(()=>{
    results.map((result)=>{
      setUserAnswer(prevAns => prevAns+result?.transcript)
    })
  },[results])

  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
      <Image src={'/webcam.png'} width={300} height={300} className='absolute'/>
      <Webcam
        mirrored={true}
        style={{height:300,
        width:'100%',
        zIndex:10
        }}
      />
      </div>
      <Button variant="outline" style={{backgroundColor:'#90EE90',marginTop:10}}
      onClick={isRecording?stopSpeechToText:startSpeechToText}
       >
      {
        isRecording? <h2 >
        <Mic/> 'Recording...'
        </h2>: 'Recoed Answer'
      }
      </Button>
      <Button onClick={()=>console.log(userAnswer)}>Show User Answer</Button>
    </div>
  )
}

export default RecordAnsSection
