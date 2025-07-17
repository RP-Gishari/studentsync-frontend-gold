import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStudentStore from "../store/studentStore";
import deleteIcon from "../assets/delete.png";
import "./StudentList.css";

const StudentList = () => {
  const { students, fetchStudents, deleteStudent, loading, error } =
    useStudentStore();
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );
    if (confirmDelete) {
      deleteStudent(id);
    }
  };

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="student-list-container">
      <div className="header-row">
        <h2 className="allStudents">All students</h2>
        <Link to="/add_student" className="add-student-btn">
          + Add Student
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>User name</th>
            <th>Student ID</th>
            <th>Enrollment date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.student_id} className="student-row">
              <td className="user-info">
                {student.first_name} {student.last_name}
              </td>
              <td>{student.student_id}</td>
              <td>
                {new Date(student.enrollment_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="status enrolled">Enrolled</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="delete-icon"
                  onClick={() => handleDelete(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i + 1}
            className={`page ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
