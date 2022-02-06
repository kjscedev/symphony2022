import { flexbox } from "@mui/system";
import React, { useEffect } from "react";
import Center from "../components/utils/Center";
import "./Home.css"

const Home = (props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="col">
          <img className="logo" src="/assets/logo_Sym.png"></img>
          <div className="gallery-container">
            <img className="logo" src="/assets/gallery.png"></img>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div>
              <img className="gallery" src="/assets/gallery-icon.png"></img>
                gallery</div>
              <div>
              <img className="gallery" src="/assets/aftermovie.png"></img>
              aftermovie
                </div>
            </div>
          </div>

        
        </div>
        <div className="col">{"GAME"}</div>
  </div>
</div>
  );
};

export default Home;
