import React from 'react'
import ReuseableAboutmeCards from '../../componets/Section2Components/ReuseableAboutmeCards'
import cyanMedal from "../../assets/cyanMedal.png";
import purpleMedal from "../../assets/purpleMedal.png";


const Certificates = () => {
    return (
        <section className="w-full py-20 ">
            {/* Badge */}
            <div className="flex justify-center">
                <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-[#09192a]/80 px-6 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.12)]">

                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
                        Certifications
                    </p>

                </div>
            </div>

            {/* Heading */}
            <div className="mt-8 text-center">

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="text-white">
                        Continuous  {" "}
                    </span>

                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                        Learning
                    </span>

                    <p className="mx-auto font-medium mb-10 mt-6 max-w-3xl text-lg text-gray-400 p-5">
                        Professional certifications validating my breadth of skills

                    </p>

                </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-10'>
                    <ReuseableAboutmeCards
                        icon={cyanMedal}
                        iconType="image"
                        title="Android App Development"
                        subtitle="NAVTTC · 2024"
                        circleBg="bg-cyan-400/10"
                        circleBorder="border-cyan-400"
                        hoverBg="hover:bg-cyan-500/5"
                        hoverBorder="hover:border-cyan-500"
                    />
                    <ReuseableAboutmeCards
                        icon={purpleMedal}
                        iconType="image"
                        title="Introduction to Generative AI"
                        subtitle="Simplilearn SkillUp · 2025"
                        circleBg="bg-purple-400/10"
                        circleBorder="border-purple-400"
                        hoverBg="hover:bg-purple-500/5"
                        hoverBorder="hover:border-purple-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default Certificates