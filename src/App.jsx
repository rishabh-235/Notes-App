import "./App.css";
import Home from "./components/Home.jsx";
import NoteEditor from "./components/noteeditor/NoteEditor.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesDisplay from "./components/notesdisplay/NotesDisplay.jsx";
import useIsMobile from "./hooks/useIsMobile.js";

function App() {
  const isMobile = useIsMobile();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {isMobile ? (
            ""
          ) : (
            <Route path="/" element={<NoteEditor />}>
              <Route index element={<LandingPage />} />
              <Route path="/notes" element={<NotesDisplay />} />
            </Route>
          )}
        </Route>

        {isMobile && (
          <Route path="/notes" element={<NoteEditor />}>
            <Route path="" element={<NotesDisplay />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
