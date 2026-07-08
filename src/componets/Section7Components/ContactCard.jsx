import React from 'react'
import LeftContentContactUs from '../../pages/section7/LeftContentContactUs'
import RightContentContactUs from '../../pages/section7/RightContentContactUs'

const ContactCard = () => {
  return (
    <section className="max-w-[90%] mx-auto lg:px-10 py-13">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <LeftContentContactUs />
        <RightContentContactUs />
      </div>
    </section>
  )
}

export default ContactCard