import React, {useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextPressure from './components/Hello'
import Photo from './components/Photo'
import Name from './components/Name'
import gif from './assets/coding.gif'
import lovely from './assets/lovely.jpeg'
import loveee from './assets/loveee.png'
import ProfileCard from './components/ProfileCard'
import TiltedCard from './components/ProfileCard';
import  Card  from './components/Card'
import Home from './components/mainpage'
import { motion } from "framer-motion";
import CircularGallery from './components/Circulargallery'
import { ArrowDown } from "lucide-react";


// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef(null)
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <div>
      
      <div>
       
       
           <div style={{ display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
}}>

</div>
        <div  style={{position: 'relative'}}>
 <Home></Home>
 
</div>

 
      </div>
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      
      
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        
 <section className='w-[90rem] h-[50rem]   '>
   <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
  className="w-full mt-[10rem] text-center relative overflow-hidden px-4"
>
 
  {/* Foreground animated heading in a glass box */}
  <div className="relative z-10 inline-block px-8 py-6 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
      SKILLS
    </h3>
  </div>
</motion.div>
<div className="mt-8 flex items-center justify-center">
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    }}
    className="text-white/80"
  >
   
  </motion.div>
</div>

   <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
   
 </section>
 
    

  
         
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={loveee} style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>
      </Parallax>
    </div>
    </div>
  )
}
