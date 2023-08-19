import React from 'react'
import './global.css'
import Header from '@/components/header'
import Providers from './Providers'
import Tabs from '@/components/Tabs'

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body >
            <Providers>
            <Header/>
            <Tabs/>
            {children}
            </Providers>
        </body>
    </html>
  )
}

export default layout

