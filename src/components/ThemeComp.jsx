"use client"
import React from 'react'
import {MdDarkMode,MdLightMode} from 'react-icons/md'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme,theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMode = theme === "system" ? systemTheme : theme 
  return (
    <div>
        {
        mounted&& (
            themeMode === "dark" ? 
            <MdLightMode onClick={() => setTheme('light')} className='cursor-pointer' size={25}/>
            :
            <MdDarkMode onClick={() => setTheme('dark')} className='cursor-pointer' size={25}/>
        )
        }

    </div>
  )
}

export default ThemeComp
