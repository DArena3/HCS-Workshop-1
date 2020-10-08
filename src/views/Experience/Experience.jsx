import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
       }}
      >
      <div>
        <h4>{props.title}</h4>
      </div>
    </div>);
}

export default function ExperienceScreen() {
  const[activeTitle, setActiveTitle] = useState("");
  const[activeDescription, setActiveDescription] = useState("");
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
           title="Paytronix Internship"
           description="Quality assurance and engineering"
           setActiveTitle={setActiveTitle}
           setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem
           title="Starbucks Barista"
           description="Made coffee for people"
           setActiveTitle={setActiveTitle}
           setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem
           title="Math Club TA"
           description="Taught afterschool math lessons to kids grades 3-8"
           setActiveTitle={setActiveTitle}
           setActiveDescription={setActiveDescription}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
