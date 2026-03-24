import React from 'react';
import BannerImg from '../../assets/banner-main.png'
import BannerShadow from '../../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto bg-linear-to-r from-black to-black rounded-3xl mt-4'>
            <div
  className="hero min-h-[60vh] rounded-3xl"
  style={{
    backgroundImage:
      `url(${BannerShadow})`,
  }}
>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-5xl">
        <img className="mx-auto" src={BannerImg} alt="" />
      <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
       Beyond Bounderies Beyond Limits
      </p>
     <button className="p-px bg-[#E7FE29] inline-block rounded-2xl">
  <span className="block p-1.5 bg-black rounded-2xl">
    <span className="btn border-none block px-6 py-2 bg-[#E7FE29] text-black font-semibold rounded-xl">
      Claim Free Credit
    </span>
  </span>
</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;