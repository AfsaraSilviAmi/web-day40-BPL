import React, { use } from 'react';
import UserImg from '../../assets/user-1.png'

const AllPlayers = ({AllPlayerPromise}) => {
    const players = use(AllPlayerPromise)
    return (
        <div className='w-11/12 mx-auto'>
           {
             players.map(player => <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src={player.image}
      alt="Cricket Players" />
  </figure>
  <div className="">
    <div className='flex mt-2'>
        <img src={UserImg} alt="" />
    </div>
    
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)
           }
        </div>
    );
};

export default AllPlayers;