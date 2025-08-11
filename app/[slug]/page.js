"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RedirectPage = ({ params}) => {
    const router = useRouter()
    const [message, setMessage] = useState('')
    const resolvedParams = React.use(params);
    const slug = resolvedParams.slug
    
    const redirectUser = async () => {
        
        const res = await fetch('/api/redirect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug }),
        })
        const response = await res.json()
        if (!response.success) {
            setMessage(response.message)
            router.push('/shorten')
        } else {
            router.push(response.data.url)
        }
    }

    useEffect(() => {
        redirectUser()
    }, [])

  return (
    <div className='flex flex-col justify-center items-center gap-4 min-h-[60vh]'>
      <h1 className='text-5xl font-bold'>Redirecting to {slug}</h1>
      {message && <p className='text-2xl text-red-500 underline'>{message}!</p>}
    </div>
  )
}

export default RedirectPage
