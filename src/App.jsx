import React from 'react'
import Section1 from './pages/section1/Section1'
import Section2 from './pages/section2/Section2'
import Section3 from './pages/section3/Section3'
import Navbar from './componets/Section1Components/navbar/Navbar'
import Section4 from './pages/section4/Section4'
import Section5 from './pages/section5/Section5'

import UnderConstruction from './pages/UnderConstruction'

const App = () => {
  return (
    <div className='bg-[#07091a]'>
      {/* <UnderConstruction/> */}
      <Navbar />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default App