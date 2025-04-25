import React , { useContext } from "react";
import "./groupList.style.css";
import GroupListButton from "../grouplist_button/GroupListButton";
import { NotesContext } from "../../contextAPI/NotesProvider";

function GroupList() {
  const { state, dispatch } = useContext(NotesContext);

  const handleShowCreateGroup = () => {
    dispatch({ type: "TOGGLE_CREATING" });
  }

  return (
    <div className="group-list-container">
      <h1>Pocket Notes</h1>

      <div className="group-list">
        {state.groups.map((group, index) => (
          <GroupListButton
            key={index}
            group={group}
          />
        ))}
      </div>

      <button onClick={handleShowCreateGroup} className="add-group-button">
      </button>
    </div>
  );
}

export default GroupList;
