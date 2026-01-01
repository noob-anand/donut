import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#070B18] border-t border-white/5 text-white w-full ">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="logo font-bold text-2xl flex items-center">
    
        <span className="text-[#F7A6B8]">Don</span>
        <span className="text-[#48c9ea]">ut~</span>
      </div>

        {/* Info */}
        <div className="text-center md:text-left text-sm text-[#F7A6B8]">
          <p>
            Built with <span className="text-red-500">❤️</span> by Anand Sharma
          </p>
          <p className="text-[#48c9ea]">
            anandsharma@gmail.com
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © 2025 Donut~. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;



