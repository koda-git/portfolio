"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Intro = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="font-display text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
              I'm Jaeho{" "}
            </span>
            <br />
            <div className="relative min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]">
              <TypeAnimation
                sequence={[
                  "a Computer Science Student",
                  1000,
                  "Systems & Cloud Developer",
                  1000,
                  "Systems & Cloud Developer",
                  1000,
                  "Distributed Systems Enthusiast",
                  1000,
                  "Developer Who Builds at Scale",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <p className="font-medium text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl">
            I'm a Computer Science student at McMaster University, building scalable systems and applications.
            From full-stack development to machine learning workflows, I focus on solving real-world challenges.
            Always learning, optimizing, and shipping.
          </p>
          <div className="font-sans">
            <Link href="/contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-200 text-white">
                Reach me
              </button>
            </Link>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mr-4 mb-4 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-50 hover:bg-blue-800 text-white"
            >
              {" "}
              <span className="block bg-[#121212] hover:bg-blue-800 rounded-full px-5 py-2">
                My Projects
              </span>
            </button>

            <Link href="https://blog.jaeho.me">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-50 hover:bg-blue-800 text-white">
                {" "}
                <span className="block bg-[#121212] hover:bg-blue-800 rounded-full px-5 py-2">
                  My Blog
                </span>
              </button>
            </Link>
          </div>
        </div>

        <a
          href="https://github.com/koda-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="col-span-5 place-self-center mt-4 lg:mt-0 relative">
            <div className="rounded-full overflow-hidden bg-[#181818] w-500 h-400 lg:w-[400px] lg:h-[400px] absolute">
              <img
                src="https://avatars.githubusercontent.com/koda-git"
                alt="Avatar"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={320}
                height={320}
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Intro;
