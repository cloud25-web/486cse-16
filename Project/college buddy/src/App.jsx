import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Schedule from "./pages/Schedule";
import Flashcards from "./pages/Flashcards";
import StudyMatch from "./pages/StudyMatch";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/assignments" element={<Assignments />} />

        <Route path="/schedule" element={<Schedule />} />

        <Route path="/flashcards" element={<Flashcards />} />

        <Route path="/study-match" element={<StudyMatch />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;