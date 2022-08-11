import React,{ useState } from "react";

function Rating() {
  const [rate, setRate] = useState(0);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setRate(value)
  }
  return (
      <div className="star" style={{display:"flex", fontSize:"25px", justifyContent:"center"}}>
        {stars.map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(index + 1)}
              style={{
                color: `${rate > index ? "yellow" : "grey"}`,
                cursor: "pointer"
              }}
            >★</div>
          )
        })}
      </div>      
  );
};
export default Rating;
