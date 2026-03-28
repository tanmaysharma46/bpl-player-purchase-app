import React, { useState } from 'react';
import { FaFlag, FaRegUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';


const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    const [IsSelected, setIsSelected] = useState(false);
    const handleChoosePlayer = () => {

        if (player.price > coin) {
            toast.warning("You do not have enough money!")
        }
        else {
            setCoin(coin - player.price);
            setIsSelected(true);

            toast.success(`${player.playerName} is selected`)
            setSelectedPlayers([...selectedPlayers, player])

        }

    }
    return (
        <>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        className='rounded-2xl h-[300px] p-4 rounded-2xl w-auto'
                        src={player.playerImg}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <FaRegUserCircle />

                        {player.playerName}</h2>
                    <div className='flex gap-2'>
                        <FaFlag />
                        <p>{player.playerCountry}</p>

                        <button className='btn btn-ghost'>{player.playerType}</button>
                    </div>
                    <div className="divider"></div>

                    <h2 className='font-bold'>Rating: {player.rating} </h2>
                    <div className='flex justify-around'>
                        <p className='font-bold'>{player.battingStyle}</p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-semibold'>Price :${player.price}</p>
                        <button disabled={IsSelected ? true : false} onClick={() => handleChoosePlayer()} className='btn'>{IsSelected === true ? "Selected" : "Choose Player"} </button>

                    </div>



                </div>
            </div>
        </>
    );
};

export default Card;