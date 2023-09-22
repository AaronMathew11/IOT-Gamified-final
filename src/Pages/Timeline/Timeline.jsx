import React, { useState } from "react";
import "./timeline.css";
import "./style2.css";
import "./stylescopy.css";

function Timeline() {

  const [sub1,setSub1] = useState();
  const [sub2, setSub2] = useState();
  const [sub3, setSub3] = useState();


  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{width:"70%", marginTop:40}}>
      <div style={{display:"flex", flexDirection:'row',marginTop:"120px", padding:40, alignItems:'center', justifyContent:'center', gap:180, }} className="content-container">
        <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
          <div style={{display:"flex",}}>
          <div style={{height:"100px",borderRadius:"20px", width:"100px", backgroundColor:"#15191F", padding:"20px", alignItems:'center', justifyContent:"center", display:"flex", marginRight:30}}>Sub1</div>
          <div style={{height:"100px",borderRadius:"20px", width:"100px", backgroundColor:"#15191F", padding:"20px", alignItems:'center', justifyContent:"center", display:"flex"}}>Sub2</div>
          </div>
          <div style={{height:"100px",borderRadius:"20px", width:"100px", backgroundColor:"#15191F", padding:"20px", alignItems:'center', justifyContent:"center", display:"flex", marginTop:30}}>Sub3</div>
        </div>
        <div>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <h1 style={{paddingLeft:"40px", marginTop:80}}>TimeLine</h1>
      <section class='section-timeline'>
        <div class='container'>
          <ul class='timeline'>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
            <li class=''>
              <div class='content'>
                <h3>Header</h3>
                <p>This is some text description for nothing.</p>
              </div>
            </li>
          </ul>
        </div> 
      </section>
      </div>
    </div>
  );
}

export default Timeline;
