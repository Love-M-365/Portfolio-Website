import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Name from './Name';
import me from '../assets/me.jpeg';
import TextPressure from './Hello';
import CurvedLoop from "./CurvedLoop";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Resume", link: "/resume.pdf", download: true },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen relative font-sans text-white overflow-hidden bg-[#0f172a]">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob1" />
  {/* Blob 2 */}
     <div className="absolute top-1/3 right-20 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-2xl animate-blob2" />
  {/* Blob 3 */}
  
  {/* Blob 4 */}
  <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-green-500 opacity-20 rounded-full blur-3xl animate-blob4" />
  {/* Blob 5 */}
  <div className="absolute top-1/4 left-[55%] w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob5" />
  {/* Blob 6 */}
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400 opacity-20 rounded-full blur-2xl animate-blob6" />

      {/* NAVBAR */}
      {/* NAVBAR */}
<nav    className={`w-full uppercase  fixed top-0 left-0 z-50 transition-all duration-500 
        ${scrolled ? "bg-black/70 backdrop-blur-md shadow-md border-b border-white/10" : "bg-transparent"}
      `}
      style={{fontFamily:"poppins"}}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center justify-center space-y-2 font-poppins">
       
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {navLinks.map((nav, i) => (
              <motion.a
                key={i}
                href={nav.link}
                whileTap={{ scale: 0.95, boxShadow: "0 0 10px #7fdf7c" }}
                whileHover={{ scale: 1.1 }}
                {...(nav.download && { download: true })}
                className="relative px-3 py-1 text-white transition-all duration-300 rounded hover:bg-white/10 hover:text-[#7fdf7c] active:scale-95"
              >
                {nav.label}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>


      {/* Hero Scrolling Text */}
      <CurvedLoop
        marqueeText="Code ✦ Create ✦ Elevate ✦"
        speed={3}
        curveAmount={150}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      {/* Main Section */}
      <section
        id="home"
        className="pt-28 ml-8 min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 px-6 md:px-20 relative z-10"
      >
        {/* Left: Text Section */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex justify-center md:justify-start">
            <div className="scale-50 md:scale-75 lg:scale-90 origin-top-left transition-transform duration-500">
              <TextPressure
                text="Hello!"
                flex={false}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={222}
              />
            </div>
          </div>

          <h1 className="text-3xl text-[#85c1e9] md:text-4xl font-bold">I AM</h1>
          <Name />
          <p className="text-lg mt-5 text-[whitesmoke] leading-relaxed max-w-xl mx-auto md:mx-0">
            A Full Stack Developer who enjoys building clean, user-friendly, and meaningful digital experiences. From crafting responsive interfaces to exploring smart backend systems, I love turning ideas into real-world solutions. Driven by curiosity and creativity, I strive to write code that not only works — but makes an impact.
          </p>
        </motion.div>

        {/* Right: Profile Image */}
<motion.div
  className="md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0 z-10"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="relative w-[270px] md:w-[320px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 p-2 border border-white/10 shadow-lg transform hover:scale-105 transition duration-500">
    <img
      src={me}
      alt="me"
      className="w-full h-auto object-cover rounded-2xl"
    />
  </div>

  {/* BADGES - Centered Below Image */}
  <div className="flex flex-wrap justify-center mt-4 gap-3">
    {["Frontend Dev", "Backend Dev", "MERN Stack"].map((tag, i) => (
      <span
        key={i}
        className="text-sm px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:border-[#7fdf7c] hover:text-[#7fdf7c]"
      >
        {tag}
      </span>
    ))}
  </div>
</motion.div>


      </section>
    </div>
  );
}
