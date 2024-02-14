import React from "react"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import ImageSec from "./components/ImageSec"
import krypto from "./assets/krypto.png"
import Features from "./components/Features"
import Benifits from "./components/Benifits"



function App() {
  

  return (
    <>
    <NavBar/>
    <div className="firstpage  h-auto w-full">
      <Home/>
      <ImageSec/>
      <div className="krypto py-7">
      <img src={krypto} alt="image not loaded" />
      </div>
      <Features/>
      <Benifits/>
    </div>
    
    </>
  )
}

export default App
