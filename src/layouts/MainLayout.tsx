// src/layouts/MainLayout.tsx
import {ReactNode} from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='flex-grow mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
