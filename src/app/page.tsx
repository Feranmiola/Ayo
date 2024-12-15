/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Entrepreneur from "@/Components/Entreprenure";
import Mission from "@/Components/Mission";
import Ideas from "@/Components/Ideas";
import Footer from "@/Components/Footer";
import { useSticky } from "@/Components/UseSticky";
import SEO from "@/Components/SEO";

export default function Home() {
  const [missionRef, isMissionSticky] = useSticky();
  const [ideasRef, isIdeasSticky] = useSticky();
  const [selectedTab, setSelectedTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverColor, setHoverColor] = useState("#B4F405");
  const [prevColor, setPrevColor] = useState("");
  const controls = useAnimation();
  const underlineControls = useAnimation();

  const colors = ["#B4F405", "#47D1FF", "#F8B154"];

  useEffect(() => {
    if (isHovered && window.innerWidth > 640) {
      controls.start({
        y: -10,
        filter: "grayscale(0)",
        transition: { duration: 0.3, ease: "easeOut" },
      });
      underlineControls.start({
        width: "100%",
        transition: { duration: 0.3, ease: "easeOut" },
      });
    } else {
      controls.start({
        y: 0,
        filter: "grayscale(1)",
        transition: { duration: 0.3, ease: "easeOut" },
      });
      underlineControls.start({
        width: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });
    }
  }, [isHovered, controls, underlineControls]);

  const handleHover = () => {
    if (window.innerWidth > 640) {
      setIsHovered(true);
      let newColor;
      do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      } while (newColor === prevColor);
      setHoverColor(newColor);
      setPrevColor(newColor);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window === "undefined") return;

    let scrollTimer = 0;

    // Function to update scrollbar properties
    function updateScrollbar() {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight =
        (window.innerHeight / document.documentElement.scrollHeight) *
        window.innerHeight;
      const scrollTop =
        scrollPercentage * (window.innerHeight - scrollbarHeight);

      document.body.style.setProperty("--scroll-top", `${scrollTop}px`);
      document.body.style.setProperty(
        "--scrollbar-height",
        `${scrollbarHeight}px`
      );

      document.body.classList.add("is-scrolling");

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1000);
    }

    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    updateScrollbar();

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-screen flex flex-col items-center justify-center bg-darkGray">
      <SEO
        title="Ayo | Innovator, Technologist, and Visionary"
        description="Welcome to Ayo’s official website. Explore insights, projects, and expertise in technology, innovation, and creative problem-solving. Discover how Ayo is shaping the future with passion and purpose."
        canonical="httpS://ayo.ceo"
        ogImage=""
        ogType="website"
        twitterHandle=""
      />
      <div className="hidden sm:flex w-[416px] h-[72px] rounded-[500px] items-center absolute z-[9999] top-10 bg-[#181818] justify-center flex-row -space-x-3">
        <div
          onClick={() => {
            setSelectedTab(1);
            scrollToSection("Ayo");
          }}
          className={`flex items-center justify-center z-40 px-5 py-2 rounded-[32px] border-[1px] transition ease-in-out text-base ${
            selectedTab === 1
              ? "bg-white border-transparent font-bold text-[#181818]"
              : "border-[#A8A8A8] cursor-pointer font-semibold bg-[#131313] hover:text-white hover:border-white text-[#A8A8A8]"
          }`}
        >
          Ayo
        </div>
        <div
          onClick={() => {
            setSelectedTab(2);
            scrollToSection("Journey");
          }}
          className={`flex items-center justify-center z-30 px-5 py-2 rounded-[32px] border-[1px] transition ease-in-out text-base ${
            selectedTab === 2
              ? "bg-white border-transparent font-bold text-[#181818]"
              : "border-[#A8A8A8] cursor-pointer font-semibold bg-[#131313] hover:text-white hover:border-white text-[#A8A8A8]"
          }`}
        >
          My Journey
        </div>
        <div
          onClick={() => {
            setSelectedTab(3);
            scrollToSection("blog");
          }}
          className={`flex items-center justify-center z-20 px-5 py-2 rounded-[32px] border-[1px] transition ease-in-out text-base ${
            selectedTab === 3
              ? "bg-white border-transparent font-bold text-[#181818]"
              : "border-[#A8A8A8] cursor-pointer font-semibold bg-[#131313] hover:text-white hover:border-white text-[#A8A8A8]"
          }`}
        >
          Blog
        </div>
        <div
          onClick={() => {
            setSelectedTab(4);
            scrollToSection("contact");
          }}
          className={`flex items-center justify-center z-10 px-5 py-2 rounded-[32px] border-[1px] transition ease-in-out text-base ${
            selectedTab === 4
              ? "bg-white border-transparent font-bold text-[#181818]"
              : "border-[#A8A8A8] cursor-pointer font-semibold bg-[#131313] hover:text-white hover:border-white text-[#A8A8A8]"
          }`}
        >
          Contact
        </div>
      </div>
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          id="Ayo"
          className="flex flex-col sm:flex-row min-h-screen items-center sm:space-x-10 justify-center py-[5rem] sm:py-[10rem]"
        >
          <p className="text-[80px] sm:text-[100px] md:text-[140px] 2xl:text-[181.52px] opacity-50 font-bricolage text-white font-bold mb-4 sm:mb-0">
            Hi, i'm
          </p>
          <div
            id="ahyoh"
            className="flex relative flex-col sm:flex-row items-center"
            onMouseEnter={handleHover}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute hidden sm:flex items-center justify-center -top-10 right-0 sm:right-[16rem] h-[40px] w-[97px] rounded-[12px] bg-[#262626]"
              style={{ color: hoverColor }}
            >
              /aah-yoh/
            </motion.div>
            <motion.div
              className="h-[120px] w-[120px] sm:h-[120px] sm:w-[120px] md:h-[142.95px] md:w-[142.95px] rounded-[27.23px] cursor-grab active:cursor-grabbing mb-4 sm:mb-0"
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              dragElastic={0.05}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileDrag={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={controls}
            >
              <div className="relative group">
                <Image
                  src="https://res.cloudinary.com/debiu7z1b/image/upload/v1733839008/WhatsApp_Image_2024-12-10_at_13.59.19_2005dc79_vmqvdh.webp"
                  alt="Ayo's profile picture"
                  objectFit="cover"
                  width={142.95}
                  height={142.95}
                  className={`rounded-[27.23px] transition-all duration-800 border-[1px] ${
                    isHovered ? "sm:border-white" : "border-transparent"
                  }`}
                />
              </div>
            </motion.div>

            <div className="relative sm:pl-10">
              <div className="relative inline-block">
                <motion.p
                  className="text-[80px] sm:text-[100px] md:text-[140px] 2xl:text-[181.52px] font-bricolage font-bold leading-none"
                  animate={{
                    color:
                      isHovered && window.innerWidth > 640
                        ? hoverColor
                        : "white",
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Ayo
                </motion.p>
                <motion.div
                  className="absolute bottom-[10px] left-0 h-[5px] w-full origin-left hidden sm:block"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ backgroundColor: hoverColor }}
                />
              </div>
            </div>
          </div>
        </div>

        <Entrepreneur />

        <div
          id="Journey"
          ref={missionRef}
          className={`min-h-screen ${
            isMissionSticky ? "sticky top-0 z-10" : ""
          }`}
        >
          <Mission />
        </div>

        <div
          id="blog"
          ref={ideasRef}
          className={`min-h-screen ${isIdeasSticky ? "sticky top-0 z-20" : ""}`}
        >
          <Ideas />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
