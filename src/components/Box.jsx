import React from "react";

function Box(props){
    return(
        <div className="bg-red-500 h-[250px] w-[250px]">
            <h1 className="text-center">{props.head}</h1>
            <p className="text-center">{props.content}</p>
        </div>
    )
}

export default Box