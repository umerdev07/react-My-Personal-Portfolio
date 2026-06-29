import React from 'react'
import profilePic from "../../../assets/profile_pic.jpeg";
const logo = () => {
  return (
      <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img className="rounded-full" src={profilePic} alt="profile" />
          </div>
          <h1 className="text-white font-semibold text-lg">
            Umer Yousaf
          </h1>
        </div>

  )
}

export default logo