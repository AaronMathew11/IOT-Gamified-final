import React from "react";
import {
    MDBIcon,
  } from 'mdb-react-ui-kit';
import "../Styling/footer.css";

export default function footer()
{
    return(
        <div className='footer'>
          <a href='#!' >
            <MDBIcon fab icon='medium' />
          </a>

          <a href='#!'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a href='#!'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a href='#!'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a href='#!'>
            <MDBIcon fab icon='youtube' />
          </a>

          <a href='#!'>
            <MDBIcon fab icon='facebook-f' />
          </a>
    </div>
    );
}