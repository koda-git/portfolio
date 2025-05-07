import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" font-display text-white py-4 mt-auto">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
        <a href="https://blog.jaeho.me" className="hover:underline">
          Blog
        </a>
      </div>
      <div className="text-center text-sm">
        &copy; {currentYear}{" "}
        <a
          href="https://github.com/koda-git"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          koda-git
        </a>
      </div>
    </footer>
  );

}

export default Footer;


