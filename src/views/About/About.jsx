import React, { useState } from "react";
import "./About.css";
import DavidPic from "../../assets/david.jpg";

function AboutButton(props) {
  return (
    <div
      className="about-button"
      onClick={() => {
        props.setActiveText(props.activeText);
       }}
      >
      <div>
        <h1>Click to learn more about me</h1>
      </div>
    </div>);
}

export default function AboutScreen() {
  const[activeText, setActiveText] = useState("");
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={DavidPic} className="intro-picture" ></img>
        </div>
        <div>
          <div>
            <p>Hi, my name is David Arena</p>
          </div>
          <div>
            <AboutButton
              activeText={
                <div>
                  <h4>There are many cool things about me!</h4>
                  <p>-I took a gap year</p>
                  <p>-I like CS</p>
                </div>
              }
              setActiveText={setActiveText}
            >
            </AboutButton>
          </div>
          <div>
            <p>{activeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
