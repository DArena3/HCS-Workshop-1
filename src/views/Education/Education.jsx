import React, { useState } from "react"
import Harvard from "../../assets/harvard.jpeg";
import LHS from "../../assets/lhs.jpeg";

function EducationItem(props) {
    return (
      <div
        onClick={() => {
          props.setActiveImage(props.image);
          props.setActiveDescription(props.description);
         }}
        >
        <div>
          <h4>{props.title}</h4>
        </div>
      </div>);
  }

export default function EducationScreen() {
    const[activeImage, setActiveImage] = useState("");
    const[activeDescription, setActiveDescription] = useState("");
    return (
        <div className="screen-background">
        <div className="experience-background">
            <h1>Click a school to learn more!</h1>
            <div className="timeline-background">
            <EducationItem
                title="Harvard"
                description="Cool school bro"
                image={Harvard}
                setActiveImage={setActiveImage}
                setActiveDescription={setActiveDescription}
            ></EducationItem>
            <EducationItem
                title="Lexington High School"
                description="lol"
                image={LHS}
                setActiveImage={setActiveImage}
                setActiveDescription={setActiveDescription}
            ></EducationItem>
            </div>
            <div className="highlight-background">
                <img src={activeImage}></img>
                <p>{activeDescription}</p>
            </div>
        </div>
        </div>
    );
}