import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayer/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Player = ({ playerPromise, setCoin, coin }) => {
    const playersData = use(playerPromise);
    const [selectedType, setSelectedType] = useState("available");


    //selected player 
    const [selectedPlayers, setSelectedPlayers] = useState([]);


    // console.log(playersData);
    return (
        <div className='container mx-auto m-8 mb-8 '>

            <div className='grid grid-cols-1 gap-5 md:flex justify-between'>
                {
                    selectedType === "available" ? <h2 className='mb-2 p-2 items-center rounded-2xl font-bold border-orange-200 border-2 text-4xl btn'>Available Players</h2> :
                        <h2 className='mb-2 p-2 items-center rounded-2xl border-2 font-bold text-4xl btn border-orange-200'>Selected Players({selectedPlayers.length}/{playersData.length})</h2>


                }
                <div className='mb-8'>
                    <button onClick={() => setSelectedType("available")} className={` ${selectedType === "available" ? "bg-yellow-400" : "bg-white"} border-1 rounded-r-none rounded-l-2xl p-2 btn`}>Available</button>
                    <button onClick={() => setSelectedType("selected")} className={` ${selectedType === "selected" ? "bg-yellow-400" : "bg-white"} border-1 p-2 rounded-l-none rounded-r-2xl btn `}>Selected({selectedPlayers.length})</button>
                </div>
            </div>


            {selectedType === "available" ? <AvailablePlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} playersData={playersData}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} />}        </div>
    );
};

export default Player;