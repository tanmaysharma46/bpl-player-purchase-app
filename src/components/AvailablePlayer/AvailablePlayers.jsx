import React from 'react';
import Card from '../card/Card';
import { BsPeopleFill } from 'react-icons/bs';

const AvailablePlayers = ({ playersData, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    
    return (
        <div className="w-full">
            {/* Optional: Info Bar for Available Pool */}
            <div className="flex items-center gap-3 mb-8 px-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                    <BsPeopleFill size={20} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-none">
                        Player Pool
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                        Showing all {playersData?.length || 0} scouted talents
                    </p>
                </div>
            </div>

            {/* Main Grid Section */}
            {playersData && playersData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-20">
                    {playersData.map((player, index) => (
                        <div 
                            key={player.id || index} 
                            className="animate-in fade-in slide-in-from-bottom-5 duration-500 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Card 
                                setSelectedPlayers={setSelectedPlayers} 
                                selectedPlayers={selectedPlayers} 
                                coin={coin} 
                                setCoin={setCoin} 
                                player={player} 
                            />
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State for No Data */
                <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] bg-slate-50/30">
                    <div className="animate-pulse text-slate-300 mb-4">
                        <BsPeopleFill size={64} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-500">Scouting in progress...</h2>
                    <p className="text-slate-400 text-sm">Please wait while we fetch the latest BPL players.</p>
                </div>
            )}
        </div>
    );
};

export default AvailablePlayers;