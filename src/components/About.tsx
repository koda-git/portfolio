"use client";

import React from "react";
import {
  FaPython, FaJava, FaLinux, FaWindows, FaApple, FaReact, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaGithub,
} from "react-icons/fa";
import {
  SiRust, SiC, SiHaskell, SiTailwindcss, SiNextdotjs, SiTypescript, SiGnubash,
  SiFlask, SiFlutter, SiDart, SiMariadb, SiSqlite, SiApachetomcat,
  SiAnsible, SiKubernetes, SiNixos, SiUnraid, SiGooglecloud, SiOpenbsd,
  SiEspressif, SiRaspberrypi, SiPostgresql
} from "react-icons/si";


const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2019;
  return (
    <section className="min-h-screen bg-[#121212] py-3">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">


          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
              About Me
            </span>
          </h2>


          <p className="font-medium text-[#ADB7BE] text-xl mt-16">
            I'm Jaeho, a Computer Science student with over {yearsOfExperience} years of software development experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-[#ADB7BE] text-lg">
          <p className="mb-6">
            My journey began with building small applications and has grown into
            expertise in full-stack development, cloud computing, and DevOps. I
            love creating efficient, scalable solutions using technologies like
            Python, Rust, Docker, and Kubernetes.
          </p>

          <h3 className="font-display text-white text-2xl font-bold mb-4">Tech Stack</h3>
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Languages:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                <li className="flex flex-col items-center">
                  <FaPython className="text-yellow-500" size={32} />
                  <span className="text-sm text-white mt-2">Python</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiRust className="text-orange-600" size={32} />
                  <span className="text-sm text-white mt-2">Rust</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaJava className="text-orange-500" size={32} />
                  <span className="text-sm text-white mt-2">Java</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiC className="text-gray-500" size={32} />
                  <span className="text-sm text-white mt-2">C</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiGnubash className="text-green-500" size={32} />
                  <span className="text-sm text-white mt-2">Bash</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiHaskell className="text-blue-600" size={32} />
                  <span className="text-sm text-white mt-2">Haskell</span>
                </li>
              </ul>
            </div>

            {/* Web & App Frameworks */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Web & App Development:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                <li className="flex flex-col items-center">
                  <SiNextdotjs className="text-white" size={32} />
                  <span className="text-sm text-white mt-2">Next.js</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaReact className="text-blue-200" size={32} />
                  <span className="text-sm text-white mt-2">React</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiTailwindcss className="text-teal-500" size={32} />
                  <span className="text-sm text-white mt-2">TailwindCSS</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiFlask className="text-gray-400" size={32} />
                  <span className="text-sm text-white mt-2">Flask</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiFlutter className="text-sky-400" size={32} />
                  <span className="text-sm text-white mt-2">Flutter</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiDart className="text-blue-500" size={32} />
                  <span className="text-sm text-white mt-2">Dart</span>
                </li>
              </ul>
            </div>

            {/* Backend & Databases */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Backend & Databases:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                <li className="flex flex-col items-center">
                  <SiMariadb className="text-sky-600" size={32} />
                  <span className="text-sm text-white mt-2">MariaDB</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiSqlite className="text-blue-400" size={32} />
                  <span className="text-sm text-white mt-2">SQLite</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiApachetomcat className="text-yellow-500" size={32} />
                  <span className="text-sm text-white mt-2">Tomcat</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiPostgresql className="text-blue-400" size={32} />
                  <span className="text-sm text-white mt-2">PostgreSQL</span>
                </li>
              </ul>
            </div>

            {/* Infrastructure & Tooling */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Infrastructure & Tooling:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                <li className="flex flex-col items-center">
                  <FaDocker className="text-blue-600" size={32} />
                  <span className="text-sm text-white mt-2">Docker</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiKubernetes className="text-blue-500" size={32} />
                  <span className="text-sm text-white mt-2">Kubernetes</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiAnsible className="text-red-500" size={32} />
                  <span className="text-sm text-white mt-2">Ansible</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiNixos className="text-gray-300" size={32} />
                  <span className="text-sm text-white mt-2">NixOS</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiUnraid className="text-orange-500" size={32} />
                  <span className="text-sm text-white mt-2">UnRAID</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaGithub className="text-white" size={32} />
                  <span className="text-sm text-white mt-2">GitHub Pages</span>
                </li>
              </ul>
            </div>

            {/* OS & Platforms */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                OS & Platforms:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                <li className="flex flex-col items-center">
                  <FaLinux className="text-yellow-500" size={32} />
                  <span className="text-sm text-white mt-2">Linux</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaWindows className="text-blue-600" size={32} />
                  <span className="text-sm text-white mt-2">Windows</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaApple className="text-gray-500" size={32} />
                  <span className="text-sm text-white mt-2">MacOS</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiOpenbsd className="text-green-500" size={32} />
                  <span className="text-sm text-white mt-2">OpenBSD</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiEspressif className="text-orange-400" size={32} />
                  <span className="text-sm text-white mt-2">ESP32</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiRaspberrypi className="text-pink-500" size={32} />
                  <span className="text-sm text-white mt-2">Raspberry Pi</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-white text-2xl font-bold mb-4">Experience</h3>
          <p className="mb-6">
            Currently, I am a student at McMaster University, specializing in
            databases, algorithms, and machine learning.
          </p>
          <p>
            Beyond academics, I am actively involved in self-hosting projects,
            managing personal cloud infrastructure using Kubernetes and Docker.
            I enjoy solving complex technical challenges and continuously
            growing my knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
