"use client";

import React from "react";

const projects = [
  {
    title: "Shuttletrak",
    description:
      "A transportation tracking application that uses Apple's FindMy mesh network and Bluetooth Low Energy (BLE) beacons to track shuttle locations",
    link: "https://github.com/koda-git/shuttletrak",
    image:
      "https://github.com/koda-git/shuttletrak/blob/main/images/scr1.jpeg?raw=true",
  },
  {
    title: "Crust",
    description:
      "Hobby rust compiler and lexer created to simplify creating memory-safe applications.",
    link: "https://github.com/koda-git/crust",
    image: "crust-project.png",
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills, built with Next.js and TailwindCSS, designed to provide a professional online presence.",
    link: "https://github.com/koda-git/portfolio",
    image: "portfolio-project.png",
  },
];

const Projects = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-12 text-center mb-8">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="font-display text-white mb-4">My Projects</span>
          </h2>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="col-span-12 lg:col-span-4 p-4">
            <div className="bg-[#181818] rounded-lg p-6 h-full flex flex-col">
              <h3 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <div className="bg-[#181818] rounded-lg p-6 h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded-lg"
                />{" "}
              </div>
              <p className="text-[#ADB7BE] flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 text-white text-center"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
