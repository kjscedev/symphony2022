import React, { useEffect } from "react";
import LatinPop from "../components/LatinPop";
import "./Home.css";

const Home = (props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container" style={{}}>
      {/* header */}
      <div className="col">
        <div className="contact">
          <img alt="youtube" className="icons" src="/assets/youtube.png"></img>
          <img alt="twitter" className="icons" src="/assets/twitter.png"></img>
          <img
            alt="facebook"
            className="icons"
            src="/assets/facebook.png"
          ></img>
          <img alt="insta" className="icons" src="/assets/insta.png"></img>
        </div>
      </div>
      {/* main */}
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5">
        <div className="col">
          {/* logo */}
          <div className="d-flex justify-content-center align-items-center">
            <img
              alt="Symphony"
              className="logo"
              src="/assets/logo_Sym.png"
            ></img>
          </div>
          <div className="gallery-container">
            {/* gallery */}
            {/* <img alt="Gallery" className="logo" src="/assets/gallery.png"></img> */}
            <LatinPop/>

            {/* icons  */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="gal-aftermovie">
                <img
                  alt="gallery"
                  className="gallery"
                  src="/assets/gallery-icon.png"
                ></img>
                Gallery
              </div>
              <div className="am-container">
                <img
                  alt="aftermovie"
                  className="gallery"
                  src="/assets/aftermovie.png"
                ></img>
                Aftermovie
              </div>
            </div>
          </div>
        </div>

        {/* game  */}
        <div className="col">
          <div className="gamecontainer">
            <div>
              <p style={{ color: "red", fontWeight: "bold" }}>High Score:</p>
            </div>
          </div>

          <canvas id="myCanvas" width="500" height="300"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
