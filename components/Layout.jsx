import React from 'react'
import { Header, Navbar } from './index'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout