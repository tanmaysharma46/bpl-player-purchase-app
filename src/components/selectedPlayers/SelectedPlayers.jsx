import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);
    const handleDeleteSelectedPlayer = (player) => {
        console.log("selectedPlayer", selectedPlayers);
        // console.log("clicked");
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)

        console.log("filter", filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)

    }

    return (
        <div className='flex-1'>

            {selectedPlayers.length === 0 ?
                <div>
                    <hr />
                    <h2 className='text-center'>No players Selected</h2>
                    <p className='text-center'> Go to available to select players</p>
                    <hr />
                </div>
                :
                selectedPlayers.map((player, index) => (
                    <div className='grid grid-cols-1 md:flex items-center gap-6 justify-between bg-yellow-50 p-5 rounded-2xl m-5' key={index}>
                        <div className='flex gap-2 items-center'>
                            <img className='h-[100px] w-auto rounded-2xl' src={player.playerImg} alt="" />
                            <div>
                                <h2 className='flex text-3xl items-center gap-2 font-bold'>
                                    <FaRegUserCircle />
                                    {player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>

                        </div>
                        <button onClick={() => handleDeleteSelectedPlayer(player)} className='btn text-red-500
                        '>
                            <MdDeleteOutline></MdDeleteOutline>
                        </button>


                    </div>
                ))
            }
        </div>

    );
};

export default SelectedPlayers;