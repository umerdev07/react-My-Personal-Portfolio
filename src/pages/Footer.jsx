import React, { useState, useEffect } from "react";
import Logo from "../componets/Section1Components/navbar/Logo";
import "remixicon/fonts/remixicon.css";
import ReusableSocialCards from "../componets/Section2Components/ResuseableSocialCards";

const Footer = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <footer className="lg:mt-[100px] mt-[220%] border-t border-gray-700/40 px-6 md:px-10 py-8">

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo */}
        <Logo />

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center order-3 md:order-none">
          © 2025 Muhammad Umer Yousaf · Built with React & ❤️
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-3">

          <ReusableSocialCards
            icon={<i className="ri-github-line"></i>}
            width="w-14"
            height="h-14"
            rounded="rounded-full"
            iconOnly
            onClick={() =>
              window.open("https://github.com/umerdev07", "_blank")
            }
          />

          <ReusableSocialCards
            icon={<i className="ri-linkedin-line"></i>}
            width="w-14"
            height="h-14"
            rounded="rounded-full"
            iconOnly
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/umer-yousaf2020/",
                "_blank"
              )
            }
          />

          <ReusableSocialCards
            icon={<i className="ri-mail-line"></i>}
            width="w-14"
            height="h-14"
            rounded="rounded-full"
            iconOnly
            onClick={() =>
              (window.location.href = "mailto:umeryousaf2020@gmail.com")
            }
          />

          <a href="#home">
            <ReusableSocialCards
              icon={<i className="ri-arrow-up-s-line"></i>}
              width="w-14"
              height="h-14"
              rounded="rounded-full"
              iconOnly
            />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;