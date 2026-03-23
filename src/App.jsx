import { Suspense } from 'react';
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Navbar from './components/Navbar/Navbar'

function App() {
  const AllPlayerPromise = fetch('AllPlayers.json').then((res)=>res.json());

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback="Loading...">
        <AllPlayers AllPlayerPromise={AllPlayerPromise}></AllPlayers>
      </Suspense>
    </>
  )
}

export default App
