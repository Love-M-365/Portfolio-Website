import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiCode, FiMonitor, FiTerminal, FiSettings, FiZap } from "react-icons/fi";
import love from "../assets/love.png"
import "./ProfileCard.css";

const ProfileCard3D = () => {
  return (
    <div className="profile-card-outer">
      {/* Floating Dev Icons (no images used!) */}
      <FiCode className="float-icon icon1" />
      <FiMonitor className="float-icon icon2" />
      <FiTerminal className="float-icon icon3" />
      <FiSettings className="float-icon icon4" />
      <FiZap className="float-icon icon5" />

      {/* Main Card */}
      <div className="profile-card-3d">
        <div className="photo-wrapper">
          <img src={love} alt="Love Maggo" className="cutout-photo" />
        </div>

        <h2 className="name">Love Maggo</h2>
        <p className="title">Frontend Developer | React & UI/UX</p>
        <p className="bio">
          Building expressive, functional UIs with clean code. Obsessed with smooth interfaces and solving real-world problems.
        </p>

        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank"><FaTwitter /></a>
        </div>

        <a href="/your-resume.pdf" className="resume-button" download>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ProfileCard3D;
