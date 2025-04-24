import React from "react";
import "./creategroupcard.style.css";

function CreateGroupCard() {
  return (
    <div className="create-group-card-container">
      <div className="create-group-card">
        <h3>Create New Group</h3>

        <div className="create-group-name-input">
          <label htmlFor="group-name">Group Name</label>
          <input
            type="text"
            id="group-name"
            name="group-name"
            placeholder="Enter Group Name"
          />
        </div>

        <div className="create-group-color-input">
          <p htmlFor="group-colour">Choose Colour</p>
          <div className="color-picker-container">
            <button
              name="group-colour"
              className="purple"
            ></button>
            <button
              name="group-colour"
              className="pink"
            ></button>
            <button
              name="group-colour"
              className="cyan"
            ></button>
            <button
              name="group-colour"
              className="orange"
            ></button>
            <button
              name="group-colour"
              className="blue"
            ></button>
            <button
              name="group-colour"
              className="skyblue"
            ></button>
          </div>
        </div>

        <div className="group-create-button-container">
          <button className="group-create-button">Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupCard;
