import React from "react";
import Card from "./Card";
import Rating from "./Rating";

const Places = () => {
  return (
    <>
    <div id="staff">
      <div
        style={{
          color: "white",
          background: "linear-gradient(to right, #000428, #004e92)",
          fontSize: "    clamp(2rem, -1.5rem + 8vw, 4rem)",
          textAlign: "center",
        }}
      >
        𝒮𝓉𝒶𝒻𝒻
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
          background: "linear-gradient(to right, #000428, #004e92)",
          padding: "50px"
        }}
      >
        <Card
          title="Nas"
          img="https://picsum.photos/id/231/200/300"
          rating = {<Rating/>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium blanditiis, quidem deserunt sunt maiores soluta ut quo"
        />
        <Card
          title="Kendrick"
          img="https://picsum.photos/id/227/200/300"
          rating = {<Rating/>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium blanditiis, quidem deserunt sunt maiores soluta ut quo"
        />
        <Card
          title="Eminem"
          img="https://picsum.photos/id/243/200/300"
          rating = {<Rating/>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium blanditiis, quidem deserunt sunt maiores soluta ut quo"
        />
        <Card
          title="Biggie"
          img="https://picsum.photos/id/250/200/300"
          rating = {<Rating/>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium blanditiis, quidem deserunt sunt maiores soluta ut quo"
        />
        <Card
          title="Tupac"
          img="https://picsum.photos/id/247/200/300"
          rating = {<Rating/>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium blanditiis, quidem deserunt sunt maiores soluta ut quo"
        />
        <Card
          title="J.Cole"
          img="https://picsum.photos/id/231/200/300"
          rating = {<Rating/>}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium blanditiis, quidem deserunt sunt maiores soluta ut quo"
        />
      </div>
      </div>
    </>
  );
};

export default Places;
