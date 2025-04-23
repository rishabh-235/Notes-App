import React from "react";
import "./groupList.style.css";
import GroupListButton from "../grouplist_button/GroupListButton";

function GroupList() {
  return (
    <div className="group-list-container">
      <h1>Pocket Notes</h1>

      <div className="group-list">
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
        <GroupListButton />
      </div>

      <button className="add-group-button">
      </button>
    </div>
  );
}

export default GroupList;
