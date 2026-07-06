import React from 'react'
import Skills from '../Section4Components/Skills'
import ReuseableDemoAndGitButton from './ReuseableDemoAndGitButton'
import "remixicon/fonts/remixicon.css";

const FinalYearLeftContentCard = () => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <span
                    className={`
            rounded-full
            items-start
            border
            border-cyan-500/20
            text-cyan-400
            bg-cyan-500/10
            px-3 py-1
            text-[10px] sm:text-xs
            font-semibold
          `}
                >
                    <i className="ri-star-line text-cyan-400 text-sm"></i> Featured Final Year Project
                </span>

            </div>
            <div className='mt-4'>
                <h3 className='text-start text-xl sm:text-2xl font-bold text-white'>AI-Powered Real-Time <br />
                    Translation Platform</h3>
            </div>

            <div className='mt-4'>
                <h3 className='text-start text-gray-400 font-medium'>AI-powered video conferencing platform with real-time bilingual speech translation (English ↔ Urdu), live captions, secure authentication, and seamless cross-language communication.</h3>
            </div>

            {/* Skills */}
            <Skills skills={["React", "FastAPI", "Node.js", "WebRTC", "NLP", "Socket.io"]} color="cyan" className="mt-4" />

            <div className='mt-4 flex items-center gap-4'>
                  <ReuseableDemoAndGitButton
                        btnText="Live Demo"
                        btnIcon="ri-arrow-right-up-box-line"
                        textHoverColor="hover:text-white"
                        roundedBtn="rounded-2xl"
                        height="h-12"
                        width="w-fit"
                        border="border-none"
                        bgColor="bg-gradient-to-r from-cyan-400 to-violet-500"
                        onClick={() =>
                            window.open("https://github.com", "_blank")
                        }
                   />
                    <ReuseableDemoAndGitButton
                        btnText="GitHub"
                        btnIcon="ri-github-fill"
                        textHoverColor="hover:text-white"
                        roundedBtn="rounded-2xl"
                        height="h-12"
                        width="w-fit"
                        bgColor="bg-[#182032]"
                        onClick={() =>
                            window.open("https://github.com", "_blank")
                        }
                   />
            </div>
        </div>
    )
}

export default FinalYearLeftContentCard