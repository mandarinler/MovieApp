import React from 'react'
import Image from 'next/image';
import {AiFillStar} from "react-icons/ai"
import Link from 'next/link';

const getMovie = async(id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=561e3df53b11dde2513e453fcb79b2ba`)
    return await res.json();
}



const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
    console.log(movieDetail,"moviedetail")
  return (
    <div className='relative min-h-screen'>
        <Image className='object-cover' fill src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path || movieDetail?.poster_path }`}/>
        <div className='absolute p-7 bg-gradient-to-b from-amber-600 '>
            <div className='text-4xl font-bold'>{movieDetail?.title}</div>
            <div className='text-md w-1/2'>{movieDetail?.overview}</div>
            <div className='flex items-center gap-1 font-bold my-4'>{ movieDetail?.vote_average} <AiFillStar/> {movieDetail?.release_date}</div>
            <Link target='blank' href={`https://www.imdb.com/title/${movieDetail.imdb_id}/`} className='border w-40 bg-white text-black font-semibold hover:opacity-80 transition-opacity p-2 rounded-lg text-center text-lg cursor-pointer'>IMDb page</Link>
        </div>
    </div>
  )
}

export default Page
