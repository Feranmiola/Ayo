'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import Entrepreneur from "@/Components/Entreprenure"
import Mission from "@/Components/Mission"
import Ideas from "@/Components/Ideas"
import Footer from "@/Components/Footer"
import { useSticky } from "@/Components/UseSticky"


export default function Home() {
  const [missionRef, isMissionSticky] = useSticky()
  const [ideasRef, isIdeasSticky] = useSticky()
  const containerRef = useRef(null)

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }



  useEffect(() => {
    if (typeof window === "undefined") return

    let scrollTimer = 0
    let currentScrollPosition = 0
    let targetScrollPosition = 0
    let animationFrameId: number | null = null

    function updateScrollbar() {
      const scrollPercentage = targetScrollPosition / (document.documentElement.scrollHeight - window.innerHeight)
      const scrollbarHeight = (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight
      const scrollTop = scrollPercentage * (window.innerHeight - scrollbarHeight)

      document.body.style.setProperty('--scroll-top', `${scrollTop}px`)
      document.body.style.setProperty('--scrollbar-height', `${scrollbarHeight}px`)

      document.body.classList.add('is-scrolling')

      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 1000) as unknown as number
    }

    function smoothScroll() {
      currentScrollPosition += (targetScrollPosition - currentScrollPosition) * 0.1
      if (Math.abs(targetScrollPosition - currentScrollPosition) < 1) {
        currentScrollPosition = targetScrollPosition
        if (animationFrameId) cancelAnimationFrame(animationFrameId)
      } else {
        animationFrameId = requestAnimationFrame(smoothScroll)
      }
      window.scrollTo(0, currentScrollPosition)
      updateScrollbar()
    }




    window.addEventListener('resize', updateScrollbar)

    updateScrollbar()
  }, [])

  return (
    <div className="relative w-screen bg-darkGray">

      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <div className="flex flex-row h-screen items-center space-x-10 justify-center py-[10rem]">
          <p className="text-[181.52px] opacity-50 font-bricolage text-white font-bold">Hi, i'm</p>
          <motion.div
            className="h-[142.95px] w-[142.95px] rounded-[27.23px] cursor-grab active:cursor-grabbing"
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
          >
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
              alt="Ayo's profile picture"
              objectFit="cover"
              width={142.95}
              height={142.95}
              className="rounded-[27.23px]"
            />
          </motion.div>
          <p className="text-[181.52px] font-bricolage text-white font-bold">Ayo</p>
        </div>

        <Entrepreneur />

        <div ref={missionRef} className={`h-screen ${isMissionSticky ? 'sticky top-0 z-10' : ''}`}>
          <Mission />
        </div>

        <div ref={ideasRef} className={`h-screen ${isIdeasSticky ? 'sticky top-0 z-20' : ''}`}>
          <Ideas />
        </div>

        <Footer />
      </motion.div>
    </div>
  )
}