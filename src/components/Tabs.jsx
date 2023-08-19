"use client"
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

const Tabs = () => {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")
  const tabs = [  
    {
      name:"Popular",
      url:"popular"
    },
    {
      name:"Top Rated",
      url:"top_rated"
    },
    {
      name:"Upcomings",
      url:"upcoming"
    }
  ]

  return (
    <div className='p-5 m-5 gap-5 bg-gray-100 dark:bg-gray-900 flex item-center justify-center'>
      {
        tabs.map((tab,i) => (
          <Link className={`hover:opacity-70 transition-opacity ${tab.url===genre ? "underline text-amber-600 underline-offset-4" : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
        ))
      }
    </div>
  )
}

export default Tabs
