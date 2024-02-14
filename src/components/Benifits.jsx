import React from "react";
import Box from "./Box";


function Benifits(){
    return(
        <>
        <h1 className="text-5xl py-10 text-center text-[#ff4500]">FishyInu Features</h1>
        <p className="text-xl text-center text-white">Lorem ipsum dolor sit amet  elit.</p>
        <p className="text-xl text-center text-white">ducimus voluptas perferendis dolor?</p> 
        <div className="features my-4">
            <Box head="hi" content="lodeya hi" />
            <Box head="hi" content="lodeya hi"/>
            <Box head="hi" content="lodeya hi"/>
        </div>
        </>
    )
}

export default Benifits