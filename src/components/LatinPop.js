import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./LatinPop.css";

const LatinPop = () => {
  const trendingEvents = [
    { id: 1, name: "img1", img_url: "/assets/1.png" },
    { id: 2, name: "img2", img_url: "/assets/2.png" },
    { id: 3, name: "img3", img_url: "/assets/3.png" },
    { id: 4, name: "img3", img_url: "/assets/4.png" },
    { id: 5, name: "img3", img_url: "/assets/5.png" },
    { id: 6, name: "img3", img_url: "/assets/6.png" },
    { id: 7, name: "img3", img_url: "/assets/7.png" },
    { id: 8, name: "img3", img_url: "/assets/8.png" },
    { id: 9, name: "img3", img_url: "/assets/9.png" },
  ];
  const [principalImage, setPrincipalImage] = useState(
    Array.isArray(trendingEvents) && trendingEvents.length > 0
      ? trendingEvents[0]
      : null
  );
  const [inImage, setInImage] = useState(true);

  useEffect(() => {
    let counter = 0;
    let intervalSetClass;

    if (Array.isArray(trendingEvents) && trendingEvents.length > 1) {
      intervalSetClass = setInterval(() => {
        setInImage(true);
        setPrincipalImage(JSON.parse(JSON.stringify(trendingEvents[counter])));
        counter += 1;

        if (counter === trendingEvents.length) {
          counter = 0;
        }

        setTimeout(() => {
          setInImage(false);
        }, 1000);
      }, 2500);
    }

    return () => {
      clearInterval(intervalSetClass);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="principal-image-container">
        <CSSTransition
          // key={principalImage.id}
          in={inImage}
          appear
          timeout={{ enter: 500, exit: 2000 }}
          classNames="my-node"
        >
          <img alt={principalImage.name} src={principalImage.img_url} height="300" width="300"/>
        </CSSTransition>
      </div>
    </div>
  );
};

export default LatinPop;
