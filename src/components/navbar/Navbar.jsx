import React from 'react';
import dollarImg from "../../assets/dollar 1.png"
const Navbar = ({ coin }) => {
  return (
    <>
      <div className="navbar m-8 container mx-auto bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">BPL</a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between gap-2 
    border-1 border-red-50 btn font-extrabold p-3 rounded-2xl">
            {coin} Coins
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>




    </>
  );
};

export default Navbar;