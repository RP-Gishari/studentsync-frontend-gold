import React from "react";
import StudentProfileForm from "../pages/StudentProfileForm";
import { useState, useEffect } from "react";
import "./StudentDetailPage.css";

function StudentDetailPage() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-GB", options));
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div className="wlcm-title">
          <h2 className="wlcm">Welcome</h2>
          <p className="time">{currentDate}</p>
        </div>
        <div className="page-search-bar">
          <input className="input" type="text" placeholder="Search" />
        </div>
      </div>
      <StudentProfileForm />
    </div>
  );
}

export default StudentDetailPage;
