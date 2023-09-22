import React from "react";
import "./about-page.css";
import logo from "../../Images/iothinc-logo.png";
import image from "../../Images/dots.png";

function About() {
  return (
    <div style={{ padding: "40px",  }}>
      <div
        style={{
          marginTop: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <h1 style={{ marginBottom: 50 }}>
            Meet the people behind IOT Gamified
          </h1>
          <div className='content-container'>
            <img src={logo} height={200} width={400} id='page-logo' alt="logo"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>

        <div style={{ width: "70%" }}>
          <h1 style={{ marginTop: 60, marginBottom: 60, textAlign: "left" }}>
            Designers
          </h1>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
          </div>
        </div>

        <div style={{ width: "70%" }}>
          <h1 style={{ marginTop: 80, marginBottom: 60, textAlign: "left" }}>
            Developers
          </h1>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
          </div>
        </div>

        <div style={{ width: "70%" }}>
          <h1 style={{ marginTop: 80, marginBottom: 60, textAlign: "left" }}>
            Management Team
          </h1>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 160,
            }}
          >
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
            <div className='team-member'>
              <div
                style={{
                  backgroundColor: "black",
                  height: 200,
                  width: 200,
                  borderRadius: 900,
                  marginBottom: 20,
                }}
              ></div>
              <p>Name here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
