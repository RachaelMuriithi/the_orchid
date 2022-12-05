import React from "react";
// import "./HeroSection.css";

export default function ViewPage() {
  return (
    <div className="about-orchid">
      <div className="about-info">
        <h3>
          Hungry?
          <br />
          You’re in the right place
        </h3>
        <p>
          we believe that great food should be affordable 
          <br/>
          and accessible to
          everyone who wants it.
          <br />
          That’s why we offer our customers a wide variety of options for
          restaurants.
        </p>

        <button className="view-all">Explore More</button>
      </div>
    </div>
  );
}