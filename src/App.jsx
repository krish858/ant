import React from "react"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

import krypto from "./assets/krypto.png"
import Features from "./components/Features"
import Benifits from "./components/Benifits"
import TokenManagemnet from "./components/TokenManagement"
import Donation from "./components/Donation"
import SocialMediaLinks from "./components/SocialMedailinks"
import Clouds from "./assets/jk.png"

function App() {
  

  return (
    <>
    <div className="h-auto w-full bg-black">
      <Home/>
      <div className="krypto py-7">
      <img src={krypto} alt="image not loaded" />
      </div>
      
      <Features/>
      <Benifits/>
       <TokenManagemnet/>
       <Donation/>
    </div>
    <div className="contact_us w-full ">
        
    </div>
    </>
  )
}

export default App
