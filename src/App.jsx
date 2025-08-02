import React, {useEffect,useState, useRef } from 'react'

import Home from './components/mainpage'
import { motion } from "framer-motion";
import CircularGallery from './components/Circulargallery'
import { ArrowDown } from "lucide-react";
import ProjectsSection from './components/ProjectSection'
import ResumePage from './components/Resume'
import Contact from './components/CONTACT.JSX'
import GitHubSection from './components/GithubSection'

import MyStory from './components/MyStory'
import Experience from './components/Experience'


// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const parallax = useRef(null)
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <div className="w-full overflow-x-hidden">

      
      
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      
    
         <div  style={{position: 'relative'}}>
 <Home></Home>
 
</div>

         
<section id="skills" className="w-full bg-black h-[50rem] px-4 py-12 flex flex-col items-center justify-center ">
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    className="text-center items-center justify-center"
  >
    <div className="inline-block px-8 py-6  backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
        SKILLS
      </h3>
    </div>
  </motion.div>

  {/* 👇 Arrow Animation */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    }}
    className="mt-6"
  >
    <ArrowDown size={40} strokeWidth={1.5} className="text-white" />
  </motion.div>

  
    <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
  
</section>
<section id='ms'>
  <MyStory></MyStory>
</section>
<section id='exp'>

  <Experience></Experience>
</section>

<section id='projects'>
  <ProjectsSection></ProjectsSection>
</section>

<GitHubSection></GitHubSection>
<section id="Resume">
  <ResumePage></ResumePage>
</section>


    <section id='connect'>
       <Contact></Contact>  
    
    </section>
       
    </div>
    
    </div>
  )
}
