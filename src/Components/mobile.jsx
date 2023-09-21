import React from "react";
import "../Styling/mobile.css"
import quad from "../Images/quadrilateral.png";
import phone from "../Images/iphone.png";

export default function mobile()
{
    return(
        <div className="phone-box">
            <img src={quad} alt="quadrilateral" className="quad"/>
            <img src={phone} alt="iphone" className="iPhone"/>
            <div className="app-head-desc">
                <h4 className="app-heading">Download the IOT Gamified App</h4>
                <p className="app-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula a lorem posuere condimentum. Pellentesque iaculis ante ut leo tincidunt</p>
            </div>
            
        </div>
    );
}