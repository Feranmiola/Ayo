/* eslint-disable */
// @ts-nocheck
'use client'

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Entrepreneur from "@/Components/Entreprenure";
import Mission from "@/Components/Mission";
import Connect from "@/Components/Connect";
import Ideas from "@/Components/Ideas";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let scrollTimer = 0;
    function updateScrollbar() {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight = (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight;
      const scrollTop = scrollPercentage * (window.innerHeight - scrollbarHeight);

      document.body.style.setProperty('--scroll-top', `${scrollTop}px`);
      document.body.style.setProperty('--scrollbar-height', `${scrollbarHeight}px`);

      document.body.classList.add('is-scrolling');

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);
    }

    window.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);

    updateScrollbar();

    return () => {
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="w-screen h-max flex flex-col bg-darkGray">
      <motion.div
        className="w-full h-full flex flex-col "
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        <motion.div className="flex flex-row items-center space-x-10 justify-center py-[10rem]">
          <p className="text-[181.52px] opacity-50 font-bricolage text-white font-bold">Hi, i'm</p>
          <div className="h-[142.95px] w-[142.95px] rounded-[27.23px]">
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
              alt="Ayo's profile picture"
              objectFit="cover"
              width={142.95}
              height={142.95}
              className="rounded-[27.23px]"
            />
          </div>
          <p className="text-[181.52px] font-bricolage text-white font-bold">Ayo</p>
        </motion.div>

        <Entrepreneur />
        <Mission />
        <Ideas />
        <Connect />
      </motion.div>
    </div>
  );
}