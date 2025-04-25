import React from "react";
import "./notescard.style.css";

function NotesCard({note}) {
  return (
    <div className="notes-card-container">
      <p>
        {note.text}
      </p>

      <h5>
        {note.date} &nbsp; &nbsp;
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#353535" />
        </svg>
        &nbsp; &nbsp;{note.time}
      </h5>
    </div>
  );
}

export default NotesCard;
