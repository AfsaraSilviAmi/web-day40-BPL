import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa6';

const Card = ({player, setCoin, coin, selectPlay, setSelectPlay}) => {
    const [choose, setChoose] = useState(false);

    const handleChoosePlayer = () =>{
        const newCoin = coin -player.biddingPrice;
         if(newCoin>=0){
           setCoin(coin -player.biddingPrice);
         }else{
            alert("Not enough Coins");
            return;
            
         }
         alert(`${player.name} is Selected`)
         setChoose(true);
         setSelectPlay([...selectPlay, player])
         
         
    }
    return (
        <div>
            <div key={player.playerId} className="card bg-base-100 shadow-sm p-2">
  <figure>
    <img className='rounded-lg w-full h-48 object-cover'
      src={player.image}
      alt="Cricket Players" />
  </figure>
  
  <div>
    <p className='card-title mt-2'><FaUser/>{player.name}</p>
    <div className='flex justify-between mt-3'>
      <p className='flex items-center text-gray-400 gap-1'><FaFlag/>{player.country}</p>
      <button className='btn'>{player.role}</button>
    </div>
    <div className="divider"></div>
    <div className='flex justify-between mb-2'>
         <p className='font-bold'>Rating</p>
         <p>{player.rating}</p>
    </div>
    <div className='flex justify-between mb-2'>
         <p className='font-bold'>{player.battingType}</p>
         <p className='text-gray-400'>{player.bowlingType}</p>
    </div>
    <div className='flex justify-between mt-3 items-center mb-4'>
         <p className='font-bold'>Price: ${player.biddingPrice}</p>
         <button className='btn' onClick={handleChoosePlayer} disabled={choose? true : false}>{choose === true ? "Selected" : "Choose Player"}</button>
    </div>
  </div>
  

</div>
        </div>
    );
};

export default Card;