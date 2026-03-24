import React, { useState } from 'react';

const Players = () => {
    const [playerTog, setPlayerTog]= useState("available")
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto my-4'>
             {
                playerTog === "available" ? (<h2 className='font-bold text-2xl'>Available Players</h2>) : (<h2 className='font-bold text-2xl'>Selected Players(0/12)</h2>)
             }
            <div className="join grid grid-cols-2">
  <button onClick={()=>setPlayerTog("available")} className={`join-item btn ${playerTog === "available" ? "bg-[#E7FE29]" : ""}`}>Available</button>
  <button onClick={()=>setPlayerTog("selected")} className={`join-item btn ${playerTog === "selected" ? "bg-[#E7FE29]" : ""}`}>Selected(0)</button>
</div>
        </div>
    );
};

export default Players;