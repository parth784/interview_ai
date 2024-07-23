import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = ({children}) => {
  return (
    <div>
      Dashboard
      <UserButton/>
    </div>
  )
}

export default page
