import React from 'react'
import image from "../../assets/wellcomeimg.png";
import "./landingpage.style.css"

function LandingPage() {
  return (
    <div className="landing-page-container">
    <img src={image} alt="Pocket Notes Logo" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>

        <h6>
          <span className="material-symbols-outlined">lock</span>end-to-end
          encrypted
        </h6>
    </div>
  )
}

export default LandingPage