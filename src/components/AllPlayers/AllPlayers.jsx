import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from '../selected/SelectedPlayer';

const AllPlayers = ({AllPlayerPromise, setCoin, coin}) => {
    const players = use(AllPlayerPromise)
    const [playerTog, setPlayerTog]= useState("available");
    const[selectPlay, setSelectPlay] = useState([]);
    
    return (
        <div>
           <div className='flex justify-between items-center w-11/12 mx-auto my-4'>
             {
                playerTog === "available" ? (<h2 className='font-bold text-2xl'>Available Players</h2>) : (<h2 className='font-bold text-2xl'>Selected Players({selectPlay.length}/{players.length})</h2>)
             }
            <div className="join grid grid-cols-2">
  <button onClick={()=>setPlayerTog("available")} className={`join-item btn ${playerTog === "available" ? "bg-[#E7FE29]" : ""}`}>Available</button>
  <button onClick={()=>setPlayerTog("selected")} className={`join-item btn ${playerTog === "selected" ? "bg-[#E7FE29]" : ""}`}>Selected({selectPlay.length})</button>
</div>
        </div>
        {
          playerTog === "available"? (<AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectPlay={setSelectPlay} selectPlay={selectPlay}></AvailablePlayers>): (<SelectedPlayer selectPlay={selectPlay}></SelectedPlayer>)
        }
           
        </div>
    );
};

export default AllPlayers;