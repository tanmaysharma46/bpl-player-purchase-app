import React from 'react';
import bannerImg from '../../assets/bg-shadow.png'
import nImg from '../../assets/banner-main.png'
import { toast } from 'react-toastify';


const Banner = () => {
    return (
     <div className='min-h-[60vh] space-y-4 flex-1 p-5 bg-gradient-to-r mx-auto rounded-2xl from-red-500 container to-purple-500' >

<div className='flex justify-center items-center h-64 '>

        <img className=''  src={nImg} alt="" />

            </div>


        <h1 className='font-bold text-[40px] text-[#FFFFFF] text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-center text-[24px]'>Beyond Boundaries Beyond Limits</p>
        <div className='flex justify-center'>
        <button onClick={()=>toast("Claimed")} className='btn items-center w-[184px] h-[48px] flex justify-center rounded-2xl bg-[#E7FE29] text-[16px] font-bold'>Claim Free Credit</button>

        </div>
    </div>
    );
};

export default Banner;