import React, { use } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa6';

const AllPlayers = ({AllPlayerPromise}) => {
    const players = use(AllPlayerPromise)
    return (
        <div className='w-11/12 mx-auto grid md:grid-cols-3 gap-6'>
           {
             players.map(player => <div className="card bg-base-100 shadow-sm p-2">
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
         <button className='btn'>Choose Player</button>
    </div>
  </div>
  

</div>)
           }
        </div>
    );
};

export default AllPlayers;