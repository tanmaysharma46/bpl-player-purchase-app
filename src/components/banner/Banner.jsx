import React from 'react';
import bannerImg from '../../assets/bg-shadow.png'; // Background shadow/pattern
import nImg from '../../assets/banner-main.png';   // Main mascot/cricket icon
import { toast } from 'react-toastify';

const Banner = ({ setCoin, coin }) => {
    
    const handleClaimCredit = () => {
        const creditAmount = 6000000;
        setCoin(coin + creditAmount);
        toast.success(`$${creditAmount.toLocaleString()} Credits Added to your Wallet! 💰`, {
            position: "top-center",
            theme: "colored"
        });
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            <div 
                className="relative min-h-[550px] flex flex-col items-center justify-center rounded-[2.5rem] overflow-hidden bg-[#06091A] shadow-2xl shadow-blue-900/20"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-black/60 pointer-events-none"></div>

                {/* Main Visual Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6">
                    
                    {/* Floating Mascot Image */}
                    <div className="mb-4 animate-float">
                        <img 
                            className="w-48 md:w-64 drop-shadow-[0_20px_50px_rgba(231,254,41,0.3)]" 
                            src={nImg} 
                            alt="Cricket Banner Main" 
                        />
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight">
                        Assemble Your Ultimate <br /> 
                        <span className="text-[#E7FE29]">Dream 11</span> Cricket Team
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-slate-300 text-lg md:text-2xl font-medium tracking-wide opacity-90">
                        Beyond Boundaries, Beyond Limits
                    </p>

                    {/* Pro Action Button */}
                    <div className="pt-4">
                        <div className="p-1.5 border border-[#E7FE29]/30 rounded-[1.5rem] inline-block transition-all hover:border-[#E7FE29]">
                            <button 
                                onClick={handleClaimCredit}
                                className="px-8 py-4 bg-[#E7FE29] hover:bg-[#d4e924] text-black font-black text-lg rounded-[1.2rem] transition-all transform active:scale-95 shadow-[0_0_20px_rgba(231,254,41,0.4)]"
                            >
                                Claim Free Credit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Glow */}
                <div className="absolute -bottom-24 w-full h-48 bg-blue-600/20 blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
};

export default Banner;