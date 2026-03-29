import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayer/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Player = ({ playerPromise, setCoin, coin }) => {
    const playersData = use(playerPromise);
    const [selectedType, setSelectedType] = useState("available");

    // Selected players state
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
            
            {/* Header Section: Title and Tab Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
                
                {/* Dynamic Title */}
                <div className="space-y-1">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {selectedType === "available" ? (
                            "Available Players"
                        ) : (
                            <div className="flex items-center gap-3">
                                Selected Players
                                <span className="text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-600 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                                    {selectedPlayers.length} / {playersData.length}
                                </span>
                            </div>
                        )}
                    </h2>
                    <p className="text-slate-500 text-sm font-medium">
                        {selectedType === "available" 
                            ? `Build your dream squad from ${playersData.length} world-class athletes.` 
                            : `Manage your current lineup and balance.`}
                    </p>
                </div>

                {/* Modern Tab Navigation (Glassmorphism Style) */}
                <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-inner">
                    <button 
                        onClick={() => setSelectedType("available")}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                            selectedType === "available" 
                            ? "bg-white dark:bg-orange-500 text-slate-900 dark:text-white shadow-md scale-100" 
                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        }`}
                    >
                        Available
                    </button>
                    
                    <button 
                        onClick={() => setSelectedType("selected")}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                            selectedType === "selected" 
                            ? "bg-white dark:bg-orange-500 text-slate-900 dark:text-white shadow-md scale-100" 
                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        }`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {/* Component Rendering with Animation (Subtle Fade Effect) */}
            <div className="animate-in fade-in duration-700">
                {selectedType === "available" ? (
                    <AvailablePlayers 
                        selectedPlayers={selectedPlayers} 
                        setSelectedPlayers={setSelectedPlayers} 
                        coin={coin} 
                        setCoin={setCoin} 
                        playersData={playersData} 
                    />
                ) : (
                    <SelectedPlayers 
                        selectedPlayers={selectedPlayers} 
                        setSelectedPlayers={setSelectedPlayers} 
                        coin={coin} 
                        setCoin={setCoin} 
                        setSelectedType={setSelectedType} // Added: To navigate back easily
                    />
                )}
            </div>
        </div>
    );
};

export default Player;