import React from 'react';
import dollarImg from "../../assets/dollar 1.png";
import { HiMenuAlt2 } from "react-icons/hi"; // Modern menu icon

const Navbar = ({ coin }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu & Branding */}
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              <HiMenuAlt2 size={24} className="text-slate-700 dark:text-slate-300" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-xl italic">B</span>
              </div>
              <h1 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                BPL <span className="text-blue-600 italic">2026</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Fixture', 'Teams', 'Schedules'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Coin Badge Section */}
          <div className="flex items-center">
            <div className="group relative flex items-center gap-3 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
              
              {/* Coin Amount */}
              <div className="flex flex-col items-end leading-none">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">My Balance</span>
                <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  {coin.toLocaleString()}
                </span>
              </div>

              {/* Dollar Icon with Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={dollarImg} 
                  alt="Coin" 
                  className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Decorative Pulse Dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;