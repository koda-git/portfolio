"use client";

import React from "react";

const projects = {
  "Full-Stack & Web Apps": [
    {
      title: "Shuttletrak",
      description:
        "Real-time shuttle tracker using Apple's FindMy BLE network and spoofed Raspberry Pi/ESP32 beacons. Coordinates are decrypted via Anisette-authenticated fetches and visualized with a Flask + Flutter stack.",
      link: "https://github.com/koda-git/shuttletrak",
      image: "https://github.com/koda-git/shuttletrak/blob/main/images/scr1.jpeg?raw=true",
    },

    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js and TailwindCSS. Originally deployed via Docker and Kubernetes, now hosted on GitHub Pages. Serves as a professional hub for projects and co-op outreach.",

      link: "https://github.com/koda-git/portfolio",
      image: "portfolio-project.png",
    },
    {
      title: "Alloy",
      description:
        "Java-based banking system with modular backend architecture. Features secure user login, account handling, forum posting, and SQL-backed session/authentication via Tomcat and MariaDB.",
      link: "https://github.com/koda-git/alloy",
      image: "https://raw.githubusercontent.com/koda-git/alloy/refs/heads/main/alloy_demo4.png",
    },
  ],
  "Tools & Utilities": [
    {
      title: "mdblogger",
      description:
        "A lightweight static blog generator for Markdown posts. Built with SCSS, containerized with Docker, and currently hosted on GitHub Pages.",
      link: "https://github.com/koda-git/mdblogger",
      image: "mdblogger-project.png",
    },
    {
      title: "DeckyBatteryHealth",
      description:
        "A utility written in Python for extracting and visualizing Steam Deck battery health data. Focused on user transparency and long-term device diagnostics.",
      link: "https://github.com/koda-git/DeckyBatteryHealth",
      image: "steamdeck.png",
    },
    {
      title: "kodbot2",
      description:
        "A modern Discord bot written in Rust, continuing a legacy Python version. Focused on slash command support, modular design, and custom server tooling.",
      link: "https://github.com/koda-git/kodbot2",
      image: "discord-logo.png",
    },
  ],
  "Systems & Infrastructure": [
    {
      title: "nix-config",
      description:
        "Personal NixOS system configuration including development environment setup, package definitions, and reproducible builds.",
      link: "https://github.com/koda-git/nix-config",
      image: "nixos-logo.png",
    },
    {
      title: "unraid-config",
      description:
        "Configuration and notes for managing a personal UnRAID server setup, including Docker containers, storage pools, and automation tools.",
      link: "https://github.com/koda-git/unraid-config",
      image: "unraid-logo.png",
    },
    {
      title: "Crust",
      description:
        "On-Going Forked Rust-based compiler project focused on exploring lexing and memory-safe design. Modified to deepen understanding of systems programming and language design.",
      link: "https://github.com/koda-git/crust",
      image: "crust-project.png",
    },
  ],
};

const Projects = () => {
  return (
    <section className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="font-display text-white mb-4">My Projects</span>
        </h2>
      </div>

      {Object.entries(projects).map(([category, items], idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-white text-2xl font-semibold mb-6">{category}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {items.map((project, index) => (
              <div
                key={index}
                className="bg-[#181818] rounded-lg p-6 flex flex-col h-full"
              >
                <div className="w-full h-60 flex items-center justify-center mb-4 rounded-lg overflow-hidden bg-[#181818]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain rounded"
                  />
                </div>

                <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
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
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;