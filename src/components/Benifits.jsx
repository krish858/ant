import React from "react";
import Box from "./Box";


function Benifits(){
    return(
        <>
        <h1 className="text-5xl pt-10 text-center text-[#ff4500]">The Benifits</h1>
        <p className="text-xl text-center text-white">Lorem ipsum dolor sit amet  elit.</p>
        <p className="text-xl text-center text-white">ducimus voluptas perferendis dolor?</p> 
        <div className="features my-4">
            <Box head="Reflection Fee" content="A modest reflection fee of 1.55% ensures equitable wealth distribution among token holders,incentivizing long-term holding and participation" />
            <Box head="Redistribution" content="Nearly 1% of each transaction is redistributed to existing holders, rewarding loyalty and commitment to the project."/>
            <Box head="Charity Pool" content="A percentage of each transaction (0.34%) is earmarked for a charity pool, empowering the community to support charitable causes and make a positive impact beyond the cryptocurrency space."/>
        </div>
        </>
    )
}

export default Benifits