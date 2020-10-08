import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>David Arena</h1>
        <div className="info-bar">
          <p className="info-item">davidarena@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
          className="info-link"
          to={{ pathname: "https://instagram.com/d.p.arena" }}
          target="_blank"
          >Instagram</Link>
          <Link 
          className="info-link"
          to={{ pathname: "https://open.spotify.com" }}
          target="_blank"
          >Spotify</Link>
          <Link 
          className="info-link"
          to={{ pathname: "https://www.linkedin.com/in/davidarena1/" }}
          target="_blank"
          >LinkedIn</Link>
        </div>
      </div>
      <div className="nav-background">
        <Link 
          classname="nav-link"
          to={{ pathname: "/about" }}
          >About</Link>
        <Link 
          className="nav-link"
          to={{ pathname: "/experience" }}
          >Experience
        </Link>
        <Link 
          className="nav-link"
          to={{ pathname: "/projects" }}
          >Projects
        </Link>
        <Link 
          className="nav-link"
          to={{ pathname: "/education" }}
          >Education
        </Link>
      </div>
    </>
  );
}
