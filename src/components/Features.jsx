import React from "react";
import Box from "./Box";


function Features(){
    return(
        <>
        <h1 className="text-5xl text-center text-[#ff4500]">Fishy Inu Features</h1>
        <p className="text-xl text-center text-white">Lorem ipsum dolor sit amet  elit.</p>
        <p className="text-xl text-center text-white">ducimus voluptas perferendis dolor?</p> 
        <div className="features my-4">
            <Box head="Token Burn" content="Instant token burn with each transaction(0.19%) reduces the total token supply continously, increasingly scarcity and potentially driving up the value of each token overtime" />
            <Box head="Liquidity Pool" content="A portion of each transaction(0.39%) is allocated to the liquidity pool,ensuring stability and facilitating smooth trading"/>
        </div>
        </>
    )
}

export default Features