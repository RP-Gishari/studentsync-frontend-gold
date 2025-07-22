import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
// import Detail from "./components/Triall";

const App = () => {
  return (
    <Router>
      {/* <Detail /> */}
      <div className="app-container">
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
