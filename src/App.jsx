import { Suspense, useState } from 'react';
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';


function App() {
  const AllPlayerPromise = fetch('AllPlayers.json').then((res)=>res.json());
  const [coin, setCoin] = useState(6000000)

  return (
    <>
      <Navbar coin = {coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
        }>
        <AllPlayers AllPlayerPromise={AllPlayerPromise} setCoin = {setCoin} coin={coin}></AllPlayers>
      </Suspense>
      <Footer></Footer>

       <ToastContainer/>
    </>
  )
}

export default App
