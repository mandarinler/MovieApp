import React from 'react'
import Movies from '@/components/Movies';

const page = async ({params}) => {
  const  keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=561e3df53b11dde2513e453fcb79b2ba&query=${keyword}&language=en-US`)
    const data = await res.json();
  return (
    <div>
        {
            !data?.results ? 
            <div>
                No results found
            </div>
            :
            <div className='flex items-center justify-center flex-wrap gap-3'>
                 {data?.results?.map((dt,i) => (
                 <Movies key={i} dt={dt}/>
             ))}
             </div>

        }
    </div>
  )
}

export default page
