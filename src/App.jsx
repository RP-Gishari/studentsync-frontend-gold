// import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import StudentList from "./pages/StudentList";
// import GetStudent from "./pages/getSingleStudent";
// import AddStudent from "./pages/AddStudent";
// import "./App.css";
// import DeleteStudent from "./pages/deleteStudent";

// /*import { Routes, Route, useLocation } from "react-router-dom";
// import StudentList from "./StudentList";
// import AddStudent from "./AddStudent";

// export default function App() {
//   const location = useLocation();
//   const state = location.state as { background?: Location };

//   return (
//     <>
//        Primary routes: if a background exists, render that instead of the modal path
//       <Routes location={state?.background || location}>
//         <Route path="/" element={<StudentList />} />
//         <Route path="/add_student" element={<StudentList />} />
//         optional: fallback if hit add_student directly (see below)
//       </Routes>

//        Modal layer only when we navigated with background
//       {state?.background && (
//         <Routes>
//           <Route path="/add_student" element={<AddStudent />} />
//         </Routes>
//       )}
//     </>
//   );
// }
//  */

// const App = () => {

//   const location = useLocation();
//   const state = location.state as { background?: Location };
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//           <Routes location={state?.background || location}></Routes>
//             <Route path="/" element={<StudentList />} />
//             <Route path="/student/:id" element={<GetStudent />} />
//             <Route path="/add_student" element={<AddStudent />} />
//             <Route path="/student/:id" element={<DeleteStudent />} />

//             {state?.background && (
//         <Routes>
//           <Route path="/add_student" element={<AddStudent />} />

//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes"; // <-- create separate file for routes
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRoutes /> {/* all routes here */}
        </main>
      </div>
    </Router>
  );
};

export default App;
