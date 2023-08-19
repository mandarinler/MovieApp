"use client"
import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Header = () => {
    const router = useRouter()
    const [keyword,setKeyword] = useState("")
    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name:'Sign in',
            url: '/login'
        }
    ]

    const searchFunc = (e) =>{
      if(e.key === "Enter" && keyword.length >=3){
        router.push(`/search/${keyword}`)
        setKeyword("")
      }
    }
    const searchFuncIcon = () =>{
      if ( keyword.length >= 3){
        router.push(`/search/${keyword}`)
        setKeyword("")
      }
    }


  return (
    <div className='flex items-center gap-10 h-20 p-5'>
      <Link href={"/"} className='bg-amber-700 rounded-lg p-3 text-lg font-bold sm:text-2xl'>MovieApp</Link>
      <div className='flex items-center gap-2 border-2 hover:border-3 border-gray-400 hover:border-white transition p-3 flex-1 rounded-lg'>
        <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} type='text' placeholder='Search for Movies' className='outline-none flex-1 bg-transparent'/>
        <button onClick={searchFuncIcon}><BsSearch size={25}/></button>
      </div>
      <ThemeComp/>  
      {
        menu.map((mn,i) => (
            <MenuItem mn={mn} key={i}/>
        ))
      }
    </div>
  )
}

export default Header
