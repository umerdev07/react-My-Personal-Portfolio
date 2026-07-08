import React from 'react'
import ContactCard from '../../componets/Section7Components/ContactCard'

const ContactUs = () => {
  return (
      <section className="w-full py-60 lg:py-20">
            {/* Badge */}
            <div className="flex justify-center">
                <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-[#09192a]/80 px-6 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.12)]">

                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
                        Get in Touch
                    </p>

                </div>
            </div>

            {/* Heading */}
            <div className="mt-8 text-center">

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="text-white">
                        Let's Build  {" "}
                    </span>

                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                        Together
                    </span>

                    <p className="mx-auto font-medium mb-5 mt-6 max-w-3xl text-lg text-gray-400 p-5">
                        Open to full-time roles, internships, and exciting collaborations
                    </p>

                </h2>
                <ContactCard/>
            </div>
        </section>  )
}

export default ContactUs