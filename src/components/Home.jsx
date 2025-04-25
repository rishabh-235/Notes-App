import React, { useContext } from "react";
import GroupList from "./grouplist/GroupList";
import { Outlet } from "react-router-dom";
import CreateGroupCard from "./creategroupcard/CreateGroupCard";
import { NotesContext } from "../contextAPI/NotesProvider";

function Home() {
  const { state } = useContext(NotesContext);

  return (
    <div className="app-container">
      <GroupList />
      <CreateGroupCard />
      <Outlet />
    </div>
  );
}

export default Home;
