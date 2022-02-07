import { flexbox } from "@mui/system";
import React, { useEffect } from "react";
import Center from "../components/utils/Center";
import "./Home.css"

const Home = (props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container" style={{background}}>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="col">
          <img className="logo" src="/assets/logo_Sym.png"></img>
          <div className="gallery-container">
            <img className="logo" src="/assets/gallery.png"></img>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div className="gal-aftermovie">
                <img className="gallery" src="/assets/gallery-icon.png"></img>
                  Gallery
              </div>
              <div>
                <img className="gallery" src="/assets/aftermovie.png"></img>
                  Aftermovie
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="contact">
            <img className="icons" src="/assets/youtube.png"></img>
            <img className="icons" src="/assets/twitter.png"></img>
            <img className="icons" src="/assets/facebook.png"></img>
            <img className="icons" src="/assets/insta.png"></img>
          </div>
          <div className="gamecontainer">
            <div>
              <p style={{color:"red",fontWeight:"bold"}}>High Score:</p>
            </div>
          </div>
        </div>
  </div>
</div>
  );
};

export default Home;
