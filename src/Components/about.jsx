import React from "react";
import "../Styling/about.css"
import "../fonts.css";

export default function about()
{
    const customFontStyle = {
        fontFamily: 'Pixeloid Sans', 
    };

    return(
        <div>
            <div className="container about-g align-items-center g-4 py-5">
                <h2 style={customFontStyle}>ABOUT THE EVENT</h2>
                <div className="img-txt-box">
                    <div>
                        <img className="image" src="https://media.istockphoto.com/id/1096052566/vector/stamprsimp2red.jpg?s=612x612&w=0&k=20&c=KVu0nVz7ZLbZsRsx81VBZcuXZ1MlEmLk9IQabO2GkYo=" alt="Sample"/>
                    </div>
                    <div className="about-text-div">
                        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula a lorem posuere condimentum. Pellentesque iaculis ante ut leo tincidunt facilisis. Quisque ut accumsan risus. Etiam pretium cursus suscipit. Nam efficitur iaculis diam, eu porttitor mi fringilla ac. Etiam volutpat sem ex, id tincidunt sem volutpat blandit. Donec sagittis purus ut quam gravida egestas. Sed volutpat viverra nibh ac venenatis. Ut tortor lacus, accumsan id hendrerit eu, condimentum at lectus. Vestibulum venenatis consectetur lectus vitae fringilla. Pellentesque consectetur nisl convallis sem faucibus, a mattis est dictum. Donec placerat, odio vestibulum scelerisque feugiat, quam enim tristique ex, eget euismod lect</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}