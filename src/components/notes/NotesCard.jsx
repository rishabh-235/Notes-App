import React from "react";
import "./notescard.style.css";

function NotesCard() {
  return (
    <div className="notes-card-container">
      <p>
        Another productive way to use this tool to begin a daily writing
        routine. One way is to generate a random paragraph with the intention to
        try to rewrite it while still keeping the original meaning. The purpose
        here is to just get the writing started so that when the writer goes
        onto their day's writing projects, words are already flowing from their
        fingers.
      </p>

      <h5>
        9 Mar 2023 &nbsp; &nbsp;
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#353535" />
        </svg>
        &nbsp; &nbsp;10:10 AM
      </h5>
    </div>
  );
}

export default NotesCard;
