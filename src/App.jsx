import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";

import "./App.css";
import StudentProfileForm from "./pages/StudentProfileForm";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentProfileForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
