import React from "react";
import { Link } from "react-scroll";
import "./Navlist.css";

function Navlist() {
  return (
    <>
      <div className="navlist">
        <div className="navOptions">
          <Link to="home" spy={true} smooth={true} offset={-150} duration={500}>
            <li className="option">Home</li>
          </Link>
          <Link
            to="places"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <li className="option">Places</li>
          </Link>
          <Link to="staff" spy={true} smooth={true} offset={-150} duration={500}>
            <li className="option">Staff</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <li className="option">Contact Us</li>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navlist;
