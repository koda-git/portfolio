import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-4 mt-auto">
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
      </div>
      <div className="text-center text-sm">&copy; {currentYear} Meow Meow</div>
    </footer>
  );
};

export default Footer;
