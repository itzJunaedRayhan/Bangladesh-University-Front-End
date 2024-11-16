import {
  LibraryIcon,
  LabFacilityIcon,
  ResearchIcon,
  DigitalEducationIcon,
  CoCurricularIcon,
} from './HomeSubNavigationIcons'
import React, {ReactElement} from 'react'

interface NavigationItem {
  title: string
  icons: ReactElement // Ensures the icons are valid React elements
}

// Data Array
export const HomeSubNavigationData: NavigationItem[] = [
  {title: 'Library', icons: <LibraryIcon />},
  {title: 'Lab Facility', icons: <LabFacilityIcon />},
  {title: 'Research', icons: <ResearchIcon />},
  {title: 'Digital Education', icons: <DigitalEducationIcon />},
  {title: 'Co-curricular', icons: <CoCurricularIcon />},
]
