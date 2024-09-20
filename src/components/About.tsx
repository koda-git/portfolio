"use client";

import React from "react";
import {
  FaPython,
  FaRust,
  FaJs,
  FaDocker,
  FaAws,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaWindows,
  FaApple,
  FaReact,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiC,
  SiHaskell,
  SiGnubash,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiKubernetes,
  SiGooglecloud,
  SiAnsible,
  SiJenkins,
  SiOpenbsd,
  SiRust,
} from "react-icons/si";

const About = () => {
  return (
    <section className="min-h-screen bg-[#121212] py-16">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
              About Me
            </span>
          </h2>
          <p className="text-[#ADB7BE] text-xl mt-16">
            I'm Jason (Jaeho), a passionate Computer Science student and
            full-stack software engineer with over 5 years of experience.
          </p>  
        </div>

        <div className="max-w-3xl mx-auto text-[#ADB7BE] text-lg">
          <p className="mb-6">
            My journey began with building small applications and has grown into
            expertise in full-stack development, cloud computing, and DevOps. I
            love creating efficient, scalable solutions using technologies like
            Python, Rust, Docker, and Kubernetes.
          </p>

          <h3 className="text-white text-2xl font-bold mb-4">Tech Stack</h3>
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
                  <SiHaskell className="text-blue-600" size={32} />
                  <span className="text-sm text-white mt-2">Haskell</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiGnubash className="text-green-500" size={32} />
                  <span className="text-sm text-white mt-2">Bash</span>
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Web Development:
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                <li className="flex flex-col items-center">
                  <FaHtml5 className="text-orange-500" size={32} />
                  <span className="text-sm text-white mt-2">HTML</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaCss3Alt className="text-blue-500" size={32} />
                  <span className="text-sm text-white mt-2">CSS</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiTypescript className="text-blue-500" size={32} />
                  <span className="text-sm text-white mt-2">TypeScript</span>
                </li>
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
              </ul>
            </div>

            {/* Cloud/DevOps */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Cloud/DevOps:
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
                  <FaAws className="text-orange-500" size={32} />
                  <span className="text-sm text-white mt-2">AWS</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiGooglecloud className="text-blue-300" size={32} />
                  <span className="text-sm text-white mt-2">Google Cloud</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiAnsible className="text-red-500" size={32} />
                  <span className="text-sm text-white mt-2">Ansible</span>
                </li>
                <li className="flex flex-col items-center">
                  <SiJenkins className="text-red-600" size={32} />
                  <span className="text-sm text-white mt-2">Jenkins</span>
                </li>
              </ul>
            </div>

            {/* Operating Systems */}
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Operating Systems:
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
              </ul>
            </div>
          </div>

          <h3 className="text-white text-2xl font-bold mb-4">Experience</h3>
          <p className="mb-6">
            Currently, I am a student at McMaster University, specializing in
            databases, algorithms, and machine learning. I have led multiple
            projects, including Shuttletrak—a real-time shuttle tracking system,
            and Crust—a Rust-based hobby compiler.
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
