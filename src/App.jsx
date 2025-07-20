import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import StudentDetailPage from "./components/StudentDetailPage";
import "./App.css";
// import StudentProfileForm from "./pages/StudentProfileForm";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/student/:id" element={<StudentDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
