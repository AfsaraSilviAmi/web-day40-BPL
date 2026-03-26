import React from 'react';
import BannerShadow from '../../assets/bg-shadow.png'
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='relative mt-25'>
            <div className='bg-white rounded-lg shadow-2xl px-36 py-8 -top-16 left-1/2 absolute transform -translate-x-1/2 z-20 space-y-4' style={{backgroundImage: `url(${BannerShadow})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
                <h1 className='text-2xl font-bold text-center'>Subscribe to our Newsletter</h1>
                <p className='text-gray-500'>Get the latest Updates and News Right in your inbox!</p>
                <div className='flex justify-center gap-4'>
  <div className='w-full'> 
    <label className="input validator rounded-xl">
      <input type="email" placeholder="Enter Your Email" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn bg-linear-to-r from-pink-300 to-yellow-400 rounded-lg">Subscribe</button>
</div>
            </div>
            <footer className="pt-36 bg-black text-white p-10">
                <div className='mb-10 text-center'>
                    <img src={footerLogo} alt="" className='mx-auto' />
                </div>
  <div className='flex flex-wrap justify-around gap-16'>
    <div className='max-w-55'>
    <h6 className="font-bold text-xl text-white mb-2">About Us</h6>
    <p className='text-gray-300'>We are a passionate team dedicated to providing the best services to our customers.</p>
  </div>
  <nav className='text-left flex flex-col'>
    <h6 className="font-bold text-xl text-white">Quick Links</h6>
    <ul className='list-disc list-inside text-gray-300'>
      <li><a href="" className='link link-hover'>Home</a></li>
      <li><a href="" className='link link-hover'>Service</a></li>
      <li><a href="" className='link link-hover'>About</a></li>
      <li><a href="" className='link link-hover'>Contact</a></li>
    </ul>
  </nav>
  <form>
    <h6 className="font-bold text-xl text-white mb-2">Subscribe</h6>
    <p className='text-gray-300'>Subscribe to our newsletter for the latest updates.</p>
    <fieldset className="w-80 mt-4">
      <div className="join">
        <input
          type="email"
          placeholder="Enter your Email"
          className="input join-item text-gray-500" 
          required/>
        <button className="btn bg-linear-to-r from-pink-300 to-yellow-400 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </div>
</footer>
        </div>
    );
};

export default Footer;