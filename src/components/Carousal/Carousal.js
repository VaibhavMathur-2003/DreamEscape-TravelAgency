import React, { useEffect, useState } from "react";
import BigCard from "./BigCard";
import {Link} from 'react-router-dom'
import "./Carousal.css";

const Carousal = () => {
  const [change, setChange] = useState(0);
  const prev = () => {
    {
      change > 1 ? setChange(change - 1) : setChange(3);
    }
  };
  const next = () => {
    {
      change < 3 ? setChange(change + 1) : setChange(1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setChange((change) => (change < 3 ? change + 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div style={{color: "white",
          background: "linear-gradient(to right, #000428, #004e92)",
          fontSize: "    clamp(2rem, -1.5rem + 8vw, 4rem)",
          textAlign: "center",
          paddingTop:"30px"
          }}>
      𝒫𝒶𝒸𝓀𝒶𝑔𝑒𝓈
    </div>
      <div
        style={{
          background: "linear-gradient(to right, #000428, #004e92)",
          display: "flex",
        }}
      >
        <button className="sliderButton" onClick={() => prev()}>
          ◄
        </button>
        <div className="carousal">
          <div
            className="carousalInner"
            style={{ transform: `translateX(${-change * 53}%)` }}
          >
            <Link to="/goa">
              {" "}
              <BigCard
                img="https://picsum.photos/id/231/1140/500"
                title="Goa Tour"
                description="Price: $300"
              />
            </Link>
            <Link to="/kashmir">
              {" "}
              <BigCard
                img="https://picsum.photos/id/235/1140/500"
                title="Kashmir Tour"
                description="Price: $300"
              />
            </Link>
            <Link to="/ladakh">
              {" "}
              <BigCard
                img="https://picsum.photos/id/244/1140/500"
                title="Ladakh Tour"
                description="Price: $300"
              />
            </Link>
            <Link to="/rajasthan">
              {" "}
              <BigCard
                img="https://picsum.photos/id/243/1140/500"
                title="Rajasthan Tour"
                description="Price: $300"
              />
            </Link>
            <Link to="/andaman">
              {" "}
              <BigCard
                img="https://picsum.photos/id/250/1140/500"
                title="Andaman Tour"
                description="Price: $300"
              />
            </Link>
          </div>
        </div>
        <button className="sliderButton" onClick={() => next()}>
          ►
        </button>
      </div>
    </>
  );
};

export default Carousal;
