import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
const SelectCard = ({selPlayer, setSelectPlay, selectPlay, setCoin}) => {
    const handleDelSelect = (player)=>{
        console.log("DELETE CLICKED", player);
            const updatedList = selectPlay.filter(p => p.playerId !== player.playerId);
            setSelectPlay(updatedList);
            setCoin(prev => prev + player.biddingPrice)
            toast.info(`${player.name} is removed and ${player.biddingPrice} is funded`)
        }
    return (
        
        <div>
            <div>
            
        </div><div className='p-6 border border-gray-300 rounded-xl m-5 '>
                <div className='md:flex justify-between'>
                <div className='md:flex space-x-2'>
                    <img className='h-25 w-37.5 rounded-lg' src={selPlayer.image} alt="" />
                    <div>
                        <p className='font-bold text-xl'>{selPlayer.name}</p>
                        <p className='text-gray-500'>{selPlayer.battingType}</p>
                    </div>

                </div>
                <div>
                   <button onClick={()=>handleDelSelect(selPlayer)} className='btn text-xl text-red-500'><RiDeleteBinLine/></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SelectCard;