import React, { useState, useContext, useEffect } from "react";
import "./creategroupcard.style.css";
import { NotesContext } from "../../contextAPI/NotesProvider";

function CreateGroupCard() {
  const { state, dispatch } = useContext(NotesContext);
  const [color, setColor] = useState();

  useEffect(() => {
    const createGroupCard = document.querySelector(
      ".create-group-card-container"
    );
    if (state.isCreating) {
      createGroupCard.style.display = "flex";
    } else {
      createGroupCard.style.display = "none";
    }
  }, [state.isCreating]);

  const handleCloseCreateGroup = (e) => {
    if (e.target.id === "outer-container") {
      setColor(null);
      document.getElementById("group-name").value = "";
      dispatch({ type: "TOGGLE_CREATING" });
    }
  };

  const handleSelectColor = (e) => {
    setColor(e.target.className);
  };

  const handleCreateGroup = () => {
    const groupName = document.getElementById("group-name").value;
    if (groupName === "") {
      alert("Please enter a group name.");
      return;
    }
    if (!color) {
      alert("Please select a color.");
      return;
    }
    if(state.groups.some((group) => group?.name?.toLowerCase() === groupName.toLowerCase())) {
      alert("Group name already exists. Please choose a different name.");
      return;
    }

    const nameAfterSpace = groupName.split(" ")[1];

    const thumbnailName =
      groupName.charAt(0).toUpperCase() +
      (nameAfterSpace ? nameAfterSpace.charAt(0).toUpperCase() : "");

    const newGroup = {
      id: Date.now(),
      name: groupName,
      color: color,
      thumbnailName: thumbnailName,
      notes: [],
    };

    dispatch({ type: "ADD_GROUP", payload: newGroup });
    dispatch({ type: "TOGGLE_CREATING" });
    document.getElementById("group-name").value = "";
    setColor(null);
  };

  return (
    <div
      className="create-group-card-container"
      id="outer-container"
      onClick={handleCloseCreateGroup}
    >
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
            <input
              type="radio"
              onClick={handleSelectColor}
              name="group-colour"
              className="purple"
            />
            <input
              type="radio"
              onClick={handleSelectColor}
              name="group-colour"
              className="pink"
            />
            <input
              type="radio"
              onClick={handleSelectColor}
              name="group-colour"
              className="cyan"
            />
            <input
              type="radio"
              onClick={handleSelectColor}
              name="group-colour"
              className="orange"
            />
            <input
              type="radio"
              onClick={handleSelectColor}
              name="group-colour"
              className="blue"
            />
            <input
              type="radio"
              onClick={handleSelectColor}
              name="group-colour"
              className="skyblue"
            />
          </div>
        </div>

        <div className="group-create-button-container">
          <button onClick={handleCreateGroup} className="group-create-button">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupCard;
