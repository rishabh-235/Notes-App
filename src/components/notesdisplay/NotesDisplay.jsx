import React from "react";
import "./notesdisplay.style.css";
import NotesCard from "../notes/NotesCard";
import { Link } from "react-router-dom";

function NotesDisplay() {
  return (
    <div className="notes-display-container">
      <div className="notes-display-header">
        <div className="notes-display-header-left">
          <Link to="/">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="thumb-nail">M</div>
        </div>
        <p>My Notes</p>
      </div>

      <div className="notes-display">
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>

      <div className="notes-input">
        <textarea
          name="note"
          id="note"
          placeholder="Enter Your Text here..."
        ></textarea>
      </div>

      {/* <img src="https://img.icons8.com/material-sharp/96/CCCCCC/sent.png" alt="Save" className="save-button" /> */}
      <img
        src="https://img.icons8.com/material-sharp/96/001F8B/sent.png"
        alt="Save"
        className="save-button"
      />
    </div>
  );
}

export default NotesDisplay;
