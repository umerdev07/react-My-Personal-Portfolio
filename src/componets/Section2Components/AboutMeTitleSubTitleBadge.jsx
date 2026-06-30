import React from 'react'

const AboutMeTitleSubTitleBadge = () => {
  return (
   <section className="w-full flex flex-col items-center text-center">

      {/* Badge */}
      <div className="flex items-center gap-3 bg-[#09192a]/80 border border-cyan-500/30 rounded-full px-6 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.12)]">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          About Me
        </p>
      </div>

      {/* Heading */}
      <div className="mt-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-white">The Developer </span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Behind the Code
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Building software that matters, one thoughtful line at a time
        </p>
      </div>

    </section>
  )
}

export default AboutMeTitleSubTitleBadge