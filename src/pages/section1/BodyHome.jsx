import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const BodyHome = () => {
  return (
<div className="flex flex-col md:flex-row items-center justify-between gap-12 px-5 lg:px-10 py-8">
           <LeftContent/>
         <RightContent />
    </div>
  )
}

export default BodyHome