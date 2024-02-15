import React from "react";

function Box(props){
    return(
        <div className="baksa rounded-lg h-[250px] w-[250px]">
            <b><h1 className="text-center pt-3 text-xl text-[#ff4500]">{props.head}</h1></b>
            <p className="text-center p-1 text-white">{props.content}</p>
        </div>
    )
}

export default Box