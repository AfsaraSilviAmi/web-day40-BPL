import { Suspense } from 'react';
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Players from './components/Players/Players';

function App() {
  const AllPlayerPromise = fetch('AllPlayers.json').then((res)=>res.json());

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Players></Players>
      <Suspense fallback={
        <div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
        }>
        <AllPlayers AllPlayerPromise={AllPlayerPromise}></AllPlayers>
      </Suspense>
    </>
  )
}

export default App
