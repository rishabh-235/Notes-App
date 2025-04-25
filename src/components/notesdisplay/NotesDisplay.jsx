import React, { useContext, useEffect, useState } from "react";
import "./notesdisplay.style.css";
import NotesCard from "../notes/NotesCard";
import { Link } from "react-router-dom";
import { NotesContext } from "../../contextAPI/NotesProvider";

function NotesDisplay() {
  const { state, dispatch } = useContext(NotesContext);
  const { selectedGroup } = state;
  const [notesText, setNotesText] = useState("");

  useEffect(() => {
    console.log(selectedGroup);
  }, []);

  const handleInputChange = (event) => {
    setNotesText(event.target.value);
  };

  const handleSaveNote = () => {
    if (notesText.trim() !== "") {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const now = new Date();
      const formattedDate = `${now.getDate()} ${
        months[now.getMonth()]
      } ${now.getFullYear()}`;
      const newNote = {
        text: notesText,
        date: formattedDate,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      dispatch({
        type: "ADD_NOTE",
        payload: { groupId: selectedGroup.id, note: newNote },
      });
      setNotesText("");
    }
  };

  return (
    <div className="notes-display-container">
      <div className="notes-display-header">
        <div className="notes-display-header-left">
          <Link to="/">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className={`thumb-nail ${selectedGroup?.color}`}>{selectedGroup?.thumbnailName}</div>
        </div>
        <p>{selectedGroup?.name}</p>
      </div>

      <div className="notes-display">
        {selectedGroup?.notes.length > 0 &&
          selectedGroup.notes.map((note, index) => (
            <NotesCard key={index} note={note} />
          ))}
      </div>

      <div className="notes-input">
        <textarea
          name="note"
          id="note"
          placeholder="Enter Your Text here..."
          value={notesText}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {!notesText && <img src="https://img.icons8.com/material-sharp/96/CCCCCC/sent.png" alt="Save" className="save-button" />}
      {notesText && <img
        onClick={handleSaveNote}
        src="https://img.icons8.com/material-sharp/96/001F8B/sent.png"
        alt="Save"
        className="save-button"
      />}
    </div>
  );
}

export default NotesDisplay;
