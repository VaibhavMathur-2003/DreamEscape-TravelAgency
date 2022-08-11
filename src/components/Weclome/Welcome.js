import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <Link to="/homepage">
        <div
          className="welcome"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),
                    url(https://photobest1.com/wp-content/uploads/2018/04/Desktop-HD-Wallpaper-Hawaii.jpeg)`,
            minHeight: "712px",
            textAlign: "center",
            backgroundPosition: "center",
          }}
        >
          <div className="welcomeText">
            <div className="text">𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓣𝓸 𝓓𝓻𝓮𝓪𝓶 𝓔𝓼𝓬𝓪𝓹𝓮</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Welcome;
