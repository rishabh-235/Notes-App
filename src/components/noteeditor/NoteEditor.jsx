import React from "react";
import "./noteeditor.style.css";
import { Outlet } from "react-router-dom";


function NoteEditor() {
  return (
    <>
      <div className="note-editor-container">
        <Outlet />
      </div>
    </>
  );
}

export default NoteEditor;
