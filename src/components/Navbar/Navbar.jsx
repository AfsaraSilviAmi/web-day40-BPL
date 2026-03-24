import React from 'react';
import LogoImg from '../../assets/logo.png'
import CoinImg from '../../assets/dollar-coin.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="text-xl"><img src={LogoImg} alt="" /></a>
  </div>
  <button className="btn flex font-semibold text-[16px]">
      <span>$60,000,000</span>
      <span>Coins</span>
      <span><img src={CoinImg} alt="" /></span>
  </button>
</div>
        </div>
    );
};

export default Navbar;