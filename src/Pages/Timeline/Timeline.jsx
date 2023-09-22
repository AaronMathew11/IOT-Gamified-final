import React, { useState } from "react";
import "./timeline.css";
import "./style2.css";
import "./stylescopy.css";

function Timeline() {

  const [sub1, setSub1] = useState(true);
  const [sub2, setSub2] = useState(false);
  const [sub3, setSub3] = useState(false);

  function onClickSub1()
  {
    setSub1(true);
    setSub2(false);
    setSub3(false);
  };

  function onClickSub2()
  {
    setSub1(false);
    setSub2(true);
    setSub3(false);
  };

  function onClickSub3()
  {
    setSub1(false);
    setSub2(false);
    setSub3(true);
  };

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{width:"70%", marginTop:40}}>
      <div style={{display:"flex", flexDirection:'row',marginTop:"120px", padding:40, alignItems:'center', justifyContent:'center', gap:180, }} className="content-container">
        <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
          <div style={{display:"flex",}}>
          <div onClick={onClickSub1} style={{height:"100px",borderRadius:"20px", width:"100px", backgroundColor:"#15191F", padding:"20px", alignItems:'center', justifyContent:"center", display:"flex", marginRight:30}}>Sub1</div>
          <div onClick={onClickSub2} style={{height:"100px",borderRadius:"20px", width:"100px", backgroundColor:"#15191F", padding:"20px", alignItems:'center', justifyContent:"center", display:"flex"}}>Sub2</div></div>
          <div onClick={onClickSub3} style={{height:"100px",borderRadius:"20px", width:"100px", backgroundColor:"#15191F", padding:"20px", alignItems:'center', justifyContent:"center", display:"flex", marginTop:30}}>Sub3</div>
        </div>
        {
          sub1 && <div>
            <h2>Heading 1</h2>
            <p>
              This is supposed to be a long paragraph 1.
            </p>
          </div>
        }
        {
          sub2 && <div>
            <h2>Heading 2</h2>
            <p>
            This is supposed to be a long paragraph 2.
            </p>
          </div>
        }
        {
          sub3 && <div>
            <h2>Heading 3</h2>
            <p>
            This is supposed to be a long paragraph 3.
            </p>
          </div>
        }
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
