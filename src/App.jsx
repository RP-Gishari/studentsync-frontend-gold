import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import StudentDetailPage from "./components/StudentDetailPage";
import "./App.css";
// import Detail from "./components/Triall";

const App = () => {
  return (
    <Router>
      {/* <Detail /> */}
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
