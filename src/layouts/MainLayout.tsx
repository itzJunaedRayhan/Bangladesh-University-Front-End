// src/layouts/MainLayout.tsx
import {ReactNode} from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
