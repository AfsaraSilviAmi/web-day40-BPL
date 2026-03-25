import React from 'react';
import Card from '../Cards/Card';

const AvailablePlayers = ({players, setCoin, coin, selectPlay, setSelectPlay}) => {
    return (
         <div className='w-11/12 mx-auto grid md:grid-cols-3 gap-6'>
           {
             players.map(player =><Card key ={player.playerId} player= {player} setCoin={setCoin} coin ={coin} selectPlay={selectPlay} setSelectPlay={setSelectPlay}></Card> )
           }
        </div>
    );
};

export default AvailablePlayers;