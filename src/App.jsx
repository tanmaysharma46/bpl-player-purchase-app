import Navbar from './components/navbar/Navbar'
import './App.css'
import Banner from './components/banner/Banner'
import Player from './components/players/Player'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer'
import Subscribe from './components/newSection/Subscribe'

const fetchPlayer = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();
  const [coin ,setCoin]=useState(5000000);

  return (
    <>
      <nav>
        <Navbar coin={coin} />
      </nav>

      <main>
        <Banner />

        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <Player coin={coin} setCoin={setCoin} playerPromise={playerPromise} />
        </Suspense>

      </main>
      <footer>
        <Subscribe></Subscribe>
        <Footer></Footer>
        
      </footer>
      {/* react toastify */}
    <ToastContainer/>

    </>
  )
}

export default App