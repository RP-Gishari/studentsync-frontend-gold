import { Routes, Route, useLocation } from "react-router-dom";
import StudentList from "./pages/StudentList";
import GetStudent from "./pages/getSingleStudent";
import AddStudent from "./pages/AddStudent";
import DeleteStudent from "./pages/deleteStudent";
import StudentDetailPage from "./components/StudentDetailPage";

const AppRoutes = () => {
  const location = useLocation();
  const state = location.state || {};

  return (
    <div>
      <Routes location={state?.background || location}>
        <Route path="/" element={<StudentList />} />
        <Route path="/student/:id" element={<GetStudent />} />
        <Route path="/students/:id" element={<StudentDetailPage />} />
        <Route path="/add_student" element={<AddStudent />} />
        <Route path="/delete/:id" element={<DeleteStudent />} />
      </Routes>

      {state?.background && (
        <Routes>
          <Route path="/add_student" element={<AddStudent />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
