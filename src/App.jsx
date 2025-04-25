import "./App.css";
import Home from "./components/Home.jsx";
import NoteEditor from "./components/noteeditor/NoteEditor.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotesDisplay from "./components/notesdisplay/NotesDisplay.jsx";
import useIsMobile from "./hooks/useIsMobile.js";
import { useContext } from "react";
import { NotesContext } from "./contextAPI/NotesProvider.jsx";

function App() {
  const { state } = useContext(NotesContext);
  const { selectedGroup } = state;

  const isMobile = useIsMobile();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {!isMobile && (
            <Route path="/" element={<NoteEditor />}>
              <Route index element={<LandingPage />} />
              <Route
                path="/notes"
                element={selectedGroup ? <NotesDisplay /> : <Navigate to="/" />}
              />
            </Route>
          )}
        </Route>

        {isMobile && (
          <Route path="/notes" element={<NoteEditor />}>
            <Route
              path=""
              element={selectedGroup ? <NotesDisplay /> : <Navigate to="/" />}
            />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
