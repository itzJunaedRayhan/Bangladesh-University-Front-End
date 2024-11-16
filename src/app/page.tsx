// src/app/page.tsx

import HeroSection from '@/components/hero-section/HeroSection'
import HomeSubNavigation from '@/components/home-sub-navigation/HomeSubNavigation'
import UpdatedNews from '@/components/updated-news/UpdatedNews'
import WelcomeSection from '@/components/welcome-section/WelcomeSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeSubNavigation />
      <WelcomeSection />
      <UpdatedNews />
    </div>
  )
}

export default HomePage
