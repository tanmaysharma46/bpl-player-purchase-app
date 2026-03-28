import React from 'react';
import { toast } from 'react-toastify';

const Subscribe = () => {
    return (
        <div className='border-2 border-orange-200 container mx-auto relative top-35 bg-transparent  rounded-2xl  h-[384px]'>
            <div className='bg-gradient-to-r space-y-4 p-6 mt-5 from-blue-200 to-orange-200 h-[336px] m-5 rounded-2xl '>

                <h2 className='text-4xl font-extrabold text-center'>Subscribe to our Newsletter</h2>
                <p className='text-[20px] font-semibold text-center'>Get the latest updates and news right in your inbox!</p>
                <div className='grid grid-cols-1 md:flex justify-center items-center'>
                    <input className='bg-white p-4 rounded-2xl md:rounded-l-2xl md:rounded-r-none h-10' type="text" placeholder='Enter Your Email' />
                    <button className='btn mb-2 m-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl md:rounded-l-none rounded-r-2xl' onClick={()=>toast("Subscribed")}>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;