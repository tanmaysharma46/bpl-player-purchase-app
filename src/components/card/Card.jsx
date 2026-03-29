import React from 'react';
import { FaFlag, FaRegUserCircle, FaCheckCircle, FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    
    // 🔥 Pro Logic: Directly check against the unique player name/ID
    const isSelected = selectedPlayers.some(p => p.playerName === player.playerName);

    const handleChoosePlayer = () => {
        if (isSelected) return; // Prevent action on already selected player

        if (player.price > coin) {
            toast.error("Insufficient Funds! Need more coins.", {
                theme: "colored",
                icon: "💰"
            });
            return;
        }

        setCoin(coin - player.price);
        setSelectedPlayers([...selectedPlayers, player]);
        toast.success(`${player.playerName} joined your lineup! 🏏`);
    };

    return (
        <div className="relative group bg-white dark:bg-slate-950 rounded-3xl p-5 shadow-2xl shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-orange-100 dark:hover:shadow-orange-950/20 hover:-translate-y-2 overflow-hidden">
            
            {/* Background Decorative Gradient Dot (Visible on Hover) */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-orange-200/50 rounded-full blur-2xl group-hover:opacity-70 transition-opacity"></div>

            {/* Image Section with Floating Badges */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={player.playerImg}
                    alt={player.playerName}
                />
                
                {/* Floating Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg">
                    <FaStar className="text-yellow-400" size={12} />
                    <span className="font-extrabold text-sm text-slate-800 dark:text-white">{player.rating}</span>
                    <span className="text-xs text-slate-400">/ 10</span>
                </div>

                {/* Country Flag Badge (Absolute Right) */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 backdrop-blur-sm rounded-lg text-white">
                    <FaFlag className="text-white/80" size={14} />
                    <span className="text-xs font-semibold tracking-wide uppercase">{player.playerCountry}</span>
                </div>
            </div>

            {/* Player Info Section */}
            <div className="mt-6 px-1">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-orange-100/70 dark:bg-orange-950/30 rounded-full text-orange-600">
                            <FaRegUserCircle size={22} />
                        </div>
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight truncate max-w-[200px]">
                            {player.playerName}
                        </h2>
                    </div>
                    <span className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase rounded-lg">
                        {player.playerType}
                    </span>
                </div>

                <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800/50 mb-5"></div>

                {/* Modern Stat Grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <div>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Batting</p>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">{player.battingStyle}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Bowling</p>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">{player.bowlingStyle}</p>
                    </div>
                </div>

                {/* Price and Action Section */}
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-800">
                    <div>
                        <p className="text-[11px] text-slate-400 font-bold uppercase">Price</p>
                        <p className="text-2xl font-black text-slate-950 dark:text-white tracking-tighter">
                            <span className="text-lg font-bold text-orange-500 mr-1">$</span>
                            {player.price.toLocaleString()}
                        </p>
                    </div>

                    <button 
                        disabled={isSelected}
                        onClick={handleChoosePlayer}
                        className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all active:scale-95 ${
                            isSelected 
                            ? "bg-emerald-100 text-emerald-700 cursor-not-allowed border border-emerald-200" 
                            : "bg-slate-950 text-white hover:bg-orange-600 hover:shadow-orange-500/30 dark:bg-orange-500 dark:hover:bg-orange-600"
                        }`}
                    >
                        {isSelected ? (
                            <>
                                <FaCheckCircle className="animate-pulse" />
                                Selected
                            </>
                        ) : (
                            "Choose Player"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;