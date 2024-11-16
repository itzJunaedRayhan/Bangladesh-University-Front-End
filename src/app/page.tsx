// src/app/page.tsx

import HeroSection from '@/components/hero-section/HeroSection'
import UpdatedNews from '@/components/updated-news/UpdatedNews'
import WelcomeSection from '@/components/welcome-section/WelcomeSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <UpdatedNews />
    </div>
  )
}

export default HomePage
