import React from 'react'
import ResuseableSocialCards from '../../componets/Section2Components/ResuseableSocialCards'
import "remixicon/fonts/remixicon.css";

const LeftContentContactUs = () => {
  return (
    <div>
      <h3 className='text-start ml-2 mb-6 text-lg text-gray-400'>
        I'm always excited to connect with engineers, designers, and founders building ambitious products. Whether you have a job opportunity, want to collaborate on a project, or just want to talk tech — my inbox is always open.
      </h3>
      <div className='space-y-3'>
      <ResuseableSocialCards
        icon={<i className="ri-mail-line"></i>}
        socialName="umeryousaf2020@gmail.com"
        onClick={() => {
          window.location.href = "mailto:umeryousaf2020@gmail.com";
        }} />
      <ResuseableSocialCards
        icon={<i className="ri-phone-line"></i>}
        socialName="+92 3090778893"
        onClick={() => {
          window.location.href = "mailto:umeryousaf2020@gmail.com";
        }} />
      <ResuseableSocialCards
        icon={<i className="ri-github-line"></i>}
        socialName="https://github.com/umerdev07"
        onClick={() => window.open("https://github.com/umerdev07", "_blank")}
      />
      <ResuseableSocialCards
        icon={<i className="ri-linkedin-fill"></i>}
        socialName="LinkedIn"
        onClick={() => window.open("https://www.linkedin.com/in/umer-yousaf2020/", "_blank")}
      />
    </div>
    </div>
  )
}

export default LeftContentContactUs