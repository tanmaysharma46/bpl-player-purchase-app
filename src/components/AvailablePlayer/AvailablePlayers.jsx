// import Card from '../Card';
import React from 'react';
import Card from '../card/Card';

const AvailablePlayers = ({ playersData, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    console.log(playersData);
    // const {playerName,playerCountry}=playersData;
    return (
        <div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    playersData.map((player, index) => {
                        return (

                            <Card key={index} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} player={player}></Card>

                        )

                    })
                }
            </div>



        </div>
    );
};

export default AvailablePlayers;