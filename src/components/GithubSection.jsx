import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const pinnedRepos = [
  {
    name: "Spend Smart",
    description:
      "A smart expense tracking app with AI-powered bill reading and expense split system.",
    url: "https://github.com/Love-M-365/spendsmart",
  },
  {
    name: "WeSkill",
    description:
      "AI-powered skill-sharing & gig platform with user ranking system.",
    url: "https://github.com/Love-M-365/weskill",
  },
  {
    name: "NextStep",
    description:
      "Career prediction tool based on 8-question AI model.",
    url: "https://github.com/Love-M-365/nextstep",
  },
];

export default function GitHubSection() {
  return (
    <motion.section
      className="w-full bg-[black] text-white py-20 px-6 sm:px-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My GitHub Presence 🚀
        </h2>

        

        {/* GitHub Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
         
           <div className="flex flex-col md:flex-row items-center bg-[#161b22] rounded-xl p-6 md:p-10">
          <img
            src="https://github.com/Love-M-365.png"
            alt="GitHub Avatar"
            className="w-28 h-28 md:w-32 md:h-32  border-4 border-white mb-4 md:mb-0"
          />
          <div className="md:ml-3  text-center md:text-left">
            <h3 className="text-3xl font-semibold">Love Maggo</h3>
            <p className="text-gray-400 text-xl">Full Stack Developer</p>
            <div className="mt-3 flex justify-center md:justify-start gap-3">
              <span className="bg-gray-700 px-3 py-1 text-xs rounded-full">
                Followers: 10+
              </span>
              <span className="bg-gray-700 px-3 py-1 text-xs rounded-full">
                Following: 10+
              </span>
            </div>
           <a
  href="https://github.com/Love-M-365"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition cursor-pointer z-20 relative"
>
  <Github className="w-5 h-5 mr-2" /> Visit GitHub
</a>

          </div>
        </div>
         <img
            src="https://github-readme-stats.vercel.app/api?username=Love-M-365&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="rounded-xl w-full shadow-md"
          />
        </div>

        {/* Contribution Graph */}
        <div className="mt-12">
          <h4 className="text-2xl font-semibold mb-4 text-center">Contributions Heatmap</h4>
          <img
            src="https://ghchart.rshah.org/006400/Love-M-365"
            alt="GitHub Chart"
            className="mx-auto w-full max-w-3xl"
          />
        </div>

        {/* Pinned Repos */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold mb-6 text-center">Pinned Projects</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedRepos.map((repo, i) => (
              <motion.div
  key={i}
  className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition z-10 relative"
  whileHover={{ scale: 1.03 }}
>

                <h5 className="text-xl font-bold text-white">{repo.name}</h5>
                <p className="text-sm text-gray-400 mt-2 mb-4">{repo.description}</p>
               
                   <a
  href={repo.url}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 hover:underline cursor-pointer z-20 relative"
>
  View Repository →
</a>

              
              
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
