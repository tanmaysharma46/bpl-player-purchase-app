import React from 'react';
import { toast } from 'react-toastify';
import fImg from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
        <div className="bg-[#06091A] h-[789px] w-auto">

         <div className='pt-40 md:pt-60  '>

               <div className='flex justify-center items-center h-60 md:h-64 '>
                <img src={fImg}alt="" />
            </div>
            {/* main div */}
            <div className='grid grid-cols-1 justify-items-center md:flex justify-around'>
                <div>
                    <h2 className='text-white text-2xl font-semibold'>About us</h2>
                    <p className='text-[#FFFFFF] text-[16px]'>We are a passionate team  <br />dedicated to providing the best  <br />services to our customers.</p>
                </div>

                <div>
                    <h2 className='text-white  font-semibold text-2xl'>Quick Links</h2>
                       <ul style={{ listStyleType: "circle" }} className= 'circle-list text-white'>
                        <li>Home </li>
                        <li>Service </li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-white space-y-4'>
                    <h2 className='text-2xl font-semibold'>Subscribe</h2>
                    <p className='text-[16px]'>Subscribe to our newsletter for the latest updates.</p>
                    <div className=''>
                     
                     <input type="text" className='bg-white text-black h-10 p-4 rounded-l-2xl' placeholder='Enter your email' />
                        <button  onClick={()=>toast("Subscribed")} className='btn mb-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-l-none rounded-r-2xl'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />
            <p className='text-white text-center mt-5'>@2024 Your Company All Rights Reserved.</p>
         </div>

        </div>
        </div>
    );
};

export default Footer;