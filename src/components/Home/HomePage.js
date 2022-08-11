import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [active, setActive] = useState(1);
  const prev = () => {
    {
      active > 1 ? setActive(active - 1) : setActive(4);
    }
  };
  const next = () => {
    {
      active < 4 ? setActive(active + 1) : setActive(1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      <div className="home" id="home">
      𝔇𝔯𝔢𝔞𝔪 𝔈𝔰𝔠𝔞𝔭𝔢
      </div>
      <div className="slider">
        <button className="sliderButton" onClick={() => prev()}>
          ◄
        </button>

        <div className={active === 1 ? "active" : "inactive"}>
          <img src="https://picsum.photos/id/243/1140/500" alt="" />
        </div>
        <div className={active === 2 ? "active" : "inactive"}>
          <img src="https://picsum.photos/id/242/1140/500" alt="" />
        </div>
        <div className={active === 3 ? "active" : "inactive"}>
          <img src="https://picsum.photos/id/250/1140/500" alt="" />
        </div>
        <div className={active === 4 ? "active" : "inactive"}>
          <img src="https://picsum.photos/id/244/1140/500" alt="" />
        </div>
        <button className="sliderButton" onClick={() => next()}>
          ►
        </button>
      </div>
    </>
  );
};

export default HomePage;
