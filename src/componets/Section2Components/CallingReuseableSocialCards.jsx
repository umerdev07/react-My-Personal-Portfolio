import React from "react";
import "remixicon/fonts/remixicon.css";
import ReusableSocialCards from "./ResuseableSocialCards";

const CalliingReuseableSocialCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:mt-3">
      <ReusableSocialCards
        icon={<i className="ri-github-line"></i>}
        socialName="GitHub"
        onClick={() => window.open("https://github.com/umerdev07", "_blank")}
      />

      <ReusableSocialCards
        icon={<i className="ri-linkedin-fill"></i>}
        socialName="LinkedIn"
        onClick={() => window.open("https://www.linkedin.com/in/umer-yousaf2020/", "_blank")}
      />

      <ReusableSocialCards
        icon={<i className="ri-mail-line"></i>}
        socialName="Email"
        onClick={() => {
          window.location.href = "mailto:umeryousaf2020@gmail.com";
        }}
      />

      <ReusableSocialCards
        icon={<i className="ri-phone-line"></i>}
        socialName="Phone"
        onClick={() => {
          window.location.href = "tel:+923090778893";
        }}
      />
    </div>
  );
};

export default CalliingReuseableSocialCards;