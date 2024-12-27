
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBarSite';
import './style.css'
import Banner from './components/Banner/Banner';


function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
      //se a pagina estiver no topo, esconde a navbar
      window.onscroll = () => {
        if (window.scrollY === 0) {
          setShowNavBar(false);
        } else {
          setShowNavBar(true);
        }
      }
  },[])

  return (
    <>
      <NavBar show={showNavBar} />
      <Banner />
    </>
  );
}

export default App;
