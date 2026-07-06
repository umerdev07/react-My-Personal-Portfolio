import React from "react";
import FinalYearLeftContentCard from "./FinalYearLeftContentCard";
import FinalYearRightContentCard from "./FinalYearRightContentCard";
import ReuseableProjectsCards from "./ReuseableProjectsCards";

const FinalYearProjects = () => {
  return (
    <div className="mt-10">

      {/* Featured Project */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#0F172A]
            p-6
            sm:p-8
            lg:p-10
            flex
            flex-col
            lg:flex-row
            gap-10
            items-center
          "
        >
          <div className="w-full lg:w-1/2">
            <FinalYearLeftContentCard />
          </div>

          <div className="w-full lg:w-1/2">
            <FinalYearRightContentCard />
          </div>
        </div>
      </div>

      {/* Other Projects */}
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
        <div
          className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            mx-5
          "
        >
          <ReuseableProjectsCards
            projectIconImg="/images/ecoscan.png"
            projectTitle="EcoScan"
            projectDescription="AI-powered mobile application that identifies recyclable items through image scanning, provides recycling guidance, and rewards users for promoting sustainable waste management."

            projectSkills={[
              "Flutter",
              "Gemini API",
              "Scan",
            ]}

            skillsColor="emerald"

            iconBgColor="bg-emerald-500/10"
            borderColor="border-emerald-500/20"
            cardBorderColor="border-emerald-500/20"

            demoLink="#"
            githubLink="#"
          />

          <ReuseableProjectsCards
            projectIconImg="/images/crypto.png"
            projectTitle="SafeBeacon"
            projectDescription="Emergency safety application that enables users to send instant SOS alerts, share live location with trusted contacts, and access essential safety features during critical situations."

            projectSkills={[
              "React",
              "REST API",
              "JavaScript",
            ]}

            skillsColor="orange"

            iconBgColor="bg-orange-500/10"
            borderColor="border-orange-500/20"
            cardBorderColor="border-orange-500/20"

            demoLink="#"
            githubLink="#"
          />

          <ReuseableProjectsCards
            projectIconImg="/images/aurawall.png"
            projectTitle="AuraWall"
            projectDescription="Native Android wallpaper application with a dedicated admin panel for managing wallpaper collections, categories, and uploads, allowing users to browse, download, and save high-quality wallpapers."

            projectSkills={[
              "Kotlin",
              "Firebase",
              "Android",
            ]}

            skillsColor="violet"

            iconBgColor="bg-violet-500/10"
            borderColor="border-violet-500/20"
            cardBorderColor="border-violet-500/20"

            demoLink="#"
            githubLink="#"
          />

          <ReuseableProjectsCards
            projectIconImg="/images/chat.png"
            projectTitle="E-Commerce Shopping App"
            projectDescription="Full-featured e-commerce application with secure authentication, product browsing, shopping cart, and cloud-based image management for a seamless shopping experience."

            projectSkills={[
              "FastAPI",
              "React",
              "PostgreSQL",
            ]}

            skillsColor="cyan"

            iconBgColor="bg-cyan-500/10"
            borderColor="border-cyan-500/20"
            cardBorderColor="border-cyan-500/20"

            demoLink="#"
            githubLink="#"  
          />
        </div>
      </div>
      </div>
  );
};

export default FinalYearProjects;