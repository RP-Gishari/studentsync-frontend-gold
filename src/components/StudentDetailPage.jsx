import React, { useState, useEffect } from "react";
import StudentProfileForm from "../pages/StudentProfileForm";
import useStudentStore from "../store/studentStore";
import { useNavigate, useParams } from "react-router-dom";
import "./StudentDetailPage.css";
import image4 from "../assets/image.png";

function StudentDetailPage() {
  const [currentDate, setCurrentDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { students, fetchStudents } = useStudentStore();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    );
    fetchStudents();
  }, [fetchStudents]);

  const handleSearch = () => {
    const match = students.find((student) =>
      `${student.first_name} ${student.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    if (match) {
      navigate(`/students/${match.id}`);
    } else {
      alert("No student found!");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div className="wlcm-title">
          <h2 className="wlcm">Welcome</h2>
          <p className="time">{currentDate}</p>
        </div>
        <div className="page-search-bar">
          <img className="img-search-icon" src={image4} alt="Search Icon" />
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
      </div>
      {id ? (
        <StudentProfileForm />
      ) : (
        <p className="center">Search for a student...</p>
      )}
    </div>
  );
}

export default StudentDetailPage;
