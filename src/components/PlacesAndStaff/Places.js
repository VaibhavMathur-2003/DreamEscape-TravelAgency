import React from "react";
import Card from "./Card";

const Places = () => {
  return (
    <>
    <div id="places">
      <div
        style={{
          color: "#000428",
          backgroundImage:
            "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
          fontSize: "    clamp(2rem, -1.5rem + 8vw, 4rem)",
          textAlign: "center",
          paddingTop: "3vw",
        }}
      >
        𝒫𝓁𝒶𝒸𝑒𝓈
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
          paddingTop: "30px",
          paddingBottom: "2vw",
        }}
      >
        <Card title="Goa" img="https://picsum.photos/id/231/200/300" />
        <Card title="Kashmir" img="https://picsum.photos/id/227/200/300" />
        <Card title="Rajasthan" img="https://picsum.photos/id/243/200/300" />
        <Card title="Ladakh" img="https://picsum.photos/id/244/200/300" />
        <Card title="Nicobar" img="https://picsum.photos/id/247/200/300" />
        <Card title="Andaman" img="https://picsum.photos/id/231/200/300" />
      </div>
      </div>
    </>
  );
};

export default Places;
