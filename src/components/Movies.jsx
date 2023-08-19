"use client"
import React from 'react'
import Image from 'next/image'
import {AiFillStar} from "react-icons/ai"
import { useRouter } from 'next/navigation'

const Movies = ({dt}) => {
    const router = useRouter()

  return (
    <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[430px]  imgContainer flex justify-center items-center relative cursor-pointer'>
        <Image className='object-cover' width={430} height={300} src={`https://image.tmdb.org/t/p/original${dt?.backdrop_path || dt?.poster_path }`}/>
        <div className='absolute p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 ease-in-out transition-opacity bg-gradient-to-r from-amber-600 '>
            <div className='text-2xl font-bold'>{dt?.title}</div>
            <div className='flex items-center gap-1'>{ dt?.vote_average.toPrecision(2)} <AiFillStar/> {dt?.release_date}</div>
            
        </div>
    </div>
  )
}

export default Movies
