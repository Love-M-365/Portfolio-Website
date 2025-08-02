import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Name from './Name';
import me from '../assets/finalpic.jpeg';
import TextPressure from './Hello';
import CurvedLoop from "./CurvedLoop";

import { Menu, X } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
     { label: "MyStory", link: "#ms" },
    { label: "Experience", link: "#exp" },
    { label: "Resume", link: "#Resume" },
    { label: "Connect", link: "#connect" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const [menuOpen, setMenuOpen] = useState(false);

 
  return (
    <div className="min-h-screen  font-sans text-white overflow-hidden bg-black">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob1" />
  {/* Blob 2 */}
     <div className="absolute top-1/3 right-20 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-2xl animate-blob2" />
  {/* Blob 3 */}
  
  {/* Blob 4 */}
  <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob4" />
  {/* Blob 5 */}
  <div className="absolute top-1/4 left-[55%] w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob5" />
  {/* Blob 6 */}
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-2xl animate-blob6" />

      {/* NAVBAR */}
   <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md p-3 shadow-md border-b border-white/10"
          : "bg-transparent p-4"
      }`}
      style={{ fontFamily: "poppins" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between md:justify-center">
     

        {/* Hamburger Icon */}
        <div className="md:hidden absolute top-8 right-6">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Centered Links on Desktop */}
        <div className="hidden md:flex gap-6 text-sm md:text-base absolute left-1/2 transform -translate-x-1/2">
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

     {/* Mobile Dropdown */}
{menuOpen && (
  <div className="md:hidden px-6 pb-4 flex flex-col items-center space-y-3 bg-black/80 backdrop-blur-md">
    {navLinks.map((nav, i) => (
      <motion.a
        key={i}
        href={nav.link}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setMenuOpen(false); // 👈 closes the menu
        }}
        className="text-white text-base px-4 py-2 w-full text-center rounded hover:bg-white/10 hover:text-[#7fdf7c] transition-all duration-300"
      >
        {nav.label}
      </motion.a>
    ))}
  </div>
)}

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
  className="pt-28 px-4 sm:px-6 md:px-20 min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 relative z-10"
>
  {/* Left: Text Section */}
  <motion.div
    className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="w-full flex justify-center md:justify-center">
      <div className="scale-[0.4] sm:scale-50 md:scale-75 lg:scale-90 origin-top transition-transform duration-500">
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
          minFontSize={250}
        />
      </div>
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#85c1e9] font-bold">I AM</h1>
    <Name />
    <p className="text-base sm:text-lg mt-5 text-[whitesmoke] leading-relaxed max-w-xl mx-auto md:mx-0">
      A Full Stack Developer who enjoys building clean, user-friendly, and meaningful digital experiences. From crafting responsive interfaces to exploring smart backend systems, I love turning ideas into real-world solutions. Driven by curiosity and creativity, I strive to write code that not only works — but makes an impact.
    </p>
  </motion.div>

  {/* Right: Profile Image + Tags */}
  <motion.div
    className="w-full md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0 z-10"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="relative w-[240px] sm:w-[270px] md:w-[320px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 p-2 border border-white/10 shadow-lg transform hover:scale-105 transition duration-500">
      <img
        src={me}
        alt="me"
        className="w-full h-auto object-cover rounded-2xl"
      />
    </div>

    {/* BADGES */}
    <div className="flex flex-wrap justify-center mt-4 gap-2 sm:gap-3 px-4">
      {["Frontend Dev", "Backend Dev", "MERN Stack","Web Dev"].map((tag, i) => (
        <span
          key={i}
          className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:border-[#7fdf7c] hover:text-[#7fdf7c]"
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
