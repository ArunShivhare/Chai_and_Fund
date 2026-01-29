"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Dashboard = () => {

    const { data: session, status } = useSession()
       const router = useRouter()
    
        useEffect(() => {
        if (status === "unauthenticated") {
          router.push("/")
        }
      }, [status, router])

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
