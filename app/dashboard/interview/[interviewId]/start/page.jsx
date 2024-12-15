"use client"
import React, { useState } from 'react'
import { db } from '../../../../../utils/db'
import { MockInterview } from '../../../../../utils/schema'
import { eq } from 'drizzle-orm'
import { useEffect } from 'react'
import QuestionsSection  from './_components/QuestionsSection'
import RecordAnsSection from './_components/RecordAnsSection'
const StartInterview = ({params}) => {
    const [interviewData,setInterviewData]  = useState()
    const [mockInterviewQuestion,setMockInterviewQuestion] = useState()
    const [activeQuestionIndex,setActiveQuestionIndex] = useState(0)
    useEffect(()=>{
        GetInterviewDetails();
    },[])

    const GetInterviewDetails = async ()=>{
        const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId))
    
        console.log(result)
        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        setMockInterviewQuestion(jsonMockResp)
        console.log(jsonMockResp)
        setInterviewData(result[0])
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* {Question} */}
      <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} 
        activeQuestionIndex={activeQuestionIndex}
      />
      {/* {Video/Audio Recording} */}
      <RecordAnsSection/>
    </div>
  )
}

export default StartInterview
