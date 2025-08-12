"use client"
import { set } from 'mongoose'
import Link from 'next/link'
import React, { useState } from 'react'

const Shortenpage = () => {
    const [url, setUrl] = useState('')
    const [shortLink, setShortLink] = useState('')
    const [isShortened, setIsShortened] = useState(false)
    const [shortenedUrl, setShortenedUrl] = useState({ url: '', shortLink: '' })

    const handleChange = (e) => {
        if (e.target.name === 'url') {
            setUrl(e.target.value)
        } else if (e.target.name === 'shortLink') {
            setShortLink(e.target.value)
        }
    }

    const generateUrl = async () => {
        if (url && shortLink) {
            setIsShortened(true)
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url, shortLink }),
            })
            const response = await res.json()
            if (response.success) {
                setShortenedUrl(() => ({ url: response.data.url, shortLink: response.data.shortLink }))
            }
            setIsShortened(false)
            setUrl('')
            setShortLink('')
        } else {
            alert('Please enter both URL and short link')
        }
    }
    return (
        <div className='flex flex-col gap-4 sm:mx-auto max-w-xl my-10 bg-purple-200 p-6 rounded-md mx-2'>
            <h1 className='text-2xl font-semibold'>Generate short links of your URLs</h1>
            <div className='flex flex-col gap-2'>
                <input
                    name='url'
                    value={url}
                    className='px-4 py-2 outline-purple-400 outline rounded-lg bg-white focus-within:outline-purple-500 focus-within:outline-2'
                    type="text"
                    placeholder='Enter your URL'
                    onChange={handleChange} />
                <input
                    name='shortLink'
                    value={shortLink}
                    className='px-4 py-2 outline-purple-400 outline bg-white rounded-lg focus-within:outline-purple-500 focus-within:outline-2'
                    type="text"
                    placeholder='Enter your preffered short link'
                    onChange={handleChange} />
                <button
                    onClick={generateUrl}
                    className='bg-purple-500 hover:bg-purple-600 ring-black hover:ring-2 my-4 text-white px-4 py-2 rounded-lg transition-all duration-100 cursor-pointer'>Generate</button>
            </div>
            {shortenedUrl.shortLink && (
                <div className='flex flex-col gap-4 text-wrap break-words'>
                    <h2 className='text-2xl font-semibold'>Your Short Link</h2>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>URL:</span>
                        <span className='text-sm text-gray-400'>{shortenedUrl.url}</span>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-lg font-semibold'>Short Link:</div>
                        <div className='flex gap-1 items-center'>
                            <Link href={`/${shortenedUrl.shortLink}`} target='_blank' className='hover:underline text-purple-700'>
                                <span>{`https://bitlinks-open.vercel.app/${shortenedUrl.shortLink}`}</span>
                            </Link>
                            <span onClick={(e) => navigator.clipboard.writeText(`https://bitlinks-open.vercel.app/${shortenedUrl.shortLink}`)}>
                                <video
                                src="/copy.mp4" 
                                onMouseOver={(e) => e.currentTarget.play()} 
                                className='mix-blend-darken relative cursor-pointer' 
                                width={35}></video>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shortenpage
