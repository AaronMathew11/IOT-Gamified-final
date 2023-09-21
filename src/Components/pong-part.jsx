import React from "react";
import "../Styling/pong.css";

export default function pong()
{
    const customFontStyle = {
        fontFamily: 'Pixeloid Sans', 
    };

    return(
        <div className="pong">
            <div className="gif"></div>
            <div className="title-punch">
                <h1 style={customFontStyle} className="title-heading">IOT GAMIFIED</h1>
                <p className="punchline">Hero line ... some punch line here</p>    
            </div>
            <button style={customFontStyle} class="btn btn--action">Register Now</button>
        </div>
    );
}