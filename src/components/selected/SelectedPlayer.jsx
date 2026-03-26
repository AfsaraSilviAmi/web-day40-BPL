import React from 'react';
import SelectCard from '../selectCard/SelectCard';

const SelectedPlayer = ({selectPlay, setSelectPlay, setCoin}) => {
   
    return (
        <div>
           {
           selectPlay.length === 0? (<div className='flex flex-col items-center'>
            <p className='text-2xl font-bold'>No Players Selected Yet</p>
            <p className='text-gray-400 text-lg'>Please Select Your Player</p>
           </div>
          

           ) : (selectPlay.map(selPlayer => <SelectCard key={selPlayer.playerId} selectPlay={selectPlay} selPlayer={selPlayer} setSelectPlay={setSelectPlay} setCoin={setCoin}></SelectCard>))
           }
        </div>
    );
};

export default SelectedPlayer;