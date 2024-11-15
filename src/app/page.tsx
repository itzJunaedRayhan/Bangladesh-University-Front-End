// src/app/page.tsx

import HeroSection from '../components/hero-section/HeroSection'
import UpdatedNews from '@/components/updated-news/UpdatedNews'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <UpdatedNews />
    </div>
  )
}

export default HomePage
