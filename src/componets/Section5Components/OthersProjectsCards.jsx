import React from "react";
import ReuseableProjectsCards from "./ReuseableProjectsCards";

const OthersProjectsCards = () => {
  return (
    <div className="mx-auto max-w-[93%] sm:px-6 lg:px-8 mt-10">
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mx-5
          items-stretch
        "
      >
        <ReuseableProjectsCards
          projectIconImg="https://static.vecteezy.com/system/resources/thumbnails/055/041/208/small/sprout-of-plant-3d-icon-illustration-3d-render-png.png"
          projectTitle="EcoScan"
          projectDescription="AI-powered mobile application that identifies recyclable items through image scanning, provides recycling guidance, and rewards users for promoting sustainable waste management."
          projectSkills={["Flutter", "Gemini API", "Recycler", "DIY"]}
          theme="emerald"
          demoLink="#"
          githubLink="https://github.com/umerdev07/EcoScan-AI-Smart-Recycling-Assistant"
        />

        <ReuseableProjectsCards
          projectIconImg="src\assets\alarm.png"
          projectTitle="SafeBeacon"
          projectDescription="Emergency safety application that enables users to send instant SOS alerts, share live location with trusted contacts, and access essential safety features during critical situations."
          projectSkills={["Java", "Firebase", "Twilio"]}
          theme="orange"
          demoLink="#"
          githubLink="https://github.com/umerdev07/SafeBeacon-Alert-Alarm-"
        />

        <ReuseableProjectsCards
          projectIconImg="src\assets\picture.png"
          projectTitle="AuraWall"
          projectDescription="Native Android wallpaper application with a dedicated admin panel for managing wallpaper collections, categories, and uploads, allowing users to browse, download, and save high-quality wallpapers."
          projectSkills={["Kotlin", "Firebase", "Android"]}
          theme="violet"
          demoLink="#"
          githubLink="https://github.com/umerdev07/AuraWalls"
        />

        <ReuseableProjectsCards
          projectIconImg="src\assets\shopping.png"
          projectTitle="E-Commerce Shopping App"
          projectDescription="Full-featured e-commerce application with secure authentication, product browsing, shopping cart, and cloud-based image management for a seamless shopping experience."
          projectSkills={["Flutter", "Firebase", "Cloudinary"]}
          theme="cyan"
          demoLink="#"
          githubLink="https://github.com/umerdev07/E-commerce-Shopping-App"
        />
        <ReuseableProjectsCards
          projectIconImg="src\assets\scan.png"
          projectTitle="OCR Scanner App"
          projectDescription="A Flutter-based OCR application that extracts text from images, stores scanned results locally, and provides a fast and convenient document digitization experience."
          projectSkills={["Flutter", "OCR", "Image"]}
          theme="pink"
          demoLink="#"
          githubLink="https://github.com/umerdev07/PakText"
        />
        <ReuseableProjectsCards
          projectIconImg="src\assets\checklist.png"
          projectTitle="My To-Do"
          projectDescription="A productivity application featuring secure authentication, task management with CRUD operations, Google Sign-In, and multilingual support powered by Firebase."
          projectSkills={["Kotlin", "Firebase", "Firestore"]}
          theme="indigo"
          demoLink="#"
          githubLink="https://github.com/umerdev07/My-Todos"
        />
        <ReuseableProjectsCards
          projectIconImg="src\assets\supply.png"
          projectTitle="Inventory Manager"
          projectDescription="A desktop inventory management system built with C# and .NET, featuring stock tracking, CRUD operations, and SQL Server database integration."
          projectSkills={["C#", ".Net", "SQL Server"]}
          theme="amber"
          demoLink="#"
          githubLink="https://github.com/umerdev07/Inventory-Management-System-Desktop-Application"
        />
        <ReuseableProjectsCards
          projectIconImg="src\assets\sentiment-analysis.png"
          projectTitle="Sentiment Analysis"
          projectDescription="A machine learning project that analyzes Amazon product reviews using NLP techniques to classify customer sentiment after data preprocessing and feature engineering."
          projectSkills={["Python", "NLP", "Machine Learning", "Data Science"]}
          theme="rose"
          demoLink="#"
          githubLink="https://github.com/umerdev07/Amazon-Product-Review-Sentimental-Analysis"
        />
        <ReuseableProjectsCards
          projectIconImg="src\assets\read.png"
          projectTitle="Text Summarizer"
          projectDescription="A Python-based NLP application that generates concise summaries from lengthy text while preserving the key information and overall context."
          projectSkills={["Python#", " NLP", "Text Preprocessing"]}
          theme="sky"
          demoLink="#"
          githubLink="#"
        />
      </div>
    </div>
  );
};

export default OthersProjectsCards;