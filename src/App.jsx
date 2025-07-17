import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import GetStudent from "./pages/getSingleStudent";
import AddStudent from "./pages/AddStudent";
import "./App.css";
import DeleteStudent from "./pages/deleteStudent";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/student/:id" element={<GetStudent />} />
            <Route path="/add_student" element={<AddStudent />} />
            <Route path="/student/:id" element={<DeleteStudent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
