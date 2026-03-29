import React from 'react';
import { FaRegUserCircle, FaPlus } from 'react-icons/fa';
import { MdDeleteOutline, MdOutlinePayments } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin, setSelectedType }) => {
    
    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(p => p.playerName !== player.playerName);
        
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
        
        toast.info(`${player.playerName} removed. $${player.price} refunded!`, {
            icon: "💰",
            position: "bottom-right"
        });
    };

    return (
        <div className="w-full max-w-5xl mx-auto min-h-[400px]">
            {selectedPlayers.length === 0 ? (
                /* Enhanced Empty State */
                <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                        <FaRegUserCircle size={40} className="text-slate-300" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Your Squad is Empty</h2>
                    <p className="text-slate-500 text-center mb-8 max-w-xs">
                        You haven't selected any frontier players yet. Start building your dream team!
                    </p>
                    <button 
                        onClick={() => setSelectedType("available")}
                        className="flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                        <FaPlus size={14} /> Add Players
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {selectedPlayers.map((player, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col md:flex-row items-center gap-6 justify-between bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 md:p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-900/50 transition-all duration-300 animate-in slide-in-from-bottom-4"
                        >
                            {/* Player Info Left */}
                            <div className="flex items-center gap-5 w-full">
                                <div className="relative">
                                    <img 
                                        className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-2xl border-4 border-slate-50 dark:border-slate-800 shadow-md" 
                                        src={player.playerImg} 
                                        alt={player.playerName} 
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-white dark:border-slate-900">
                                        <MdOutlinePayments size={14} />
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2 leading-tight">
                                        {player.playerName}
                                    </h2>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            {player.playerType}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                        <span className="text-sm font-bold text-orange-500">
                                            +${player.price} Refund
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Delete Action Right */}
                            <div className="flex items-center gap-4 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 dark:border-slate-800">
                                <button 
                                    onClick={() => handleDeleteSelectedPlayer(player)}
                                    className="p-4 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-2xl transition-all duration-300 active:scale-90"
                                    title="Remove Player"
                                >
                                    <MdDeleteOutline size={32} />
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    {/* Add More Button below the list */}
                    <div className="pt-6 flex justify-start px-2">
                        <button 
                            onClick={() => setSelectedType("available")}
                            className="px-6 py-3 border-2 border-slate-900 dark:border-orange-500 dark:text-orange-500 text-slate-900 font-bold rounded-2xl hover:bg-slate-900 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all active:scale-95"
                        >
                            Add More Players
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectedPlayers;