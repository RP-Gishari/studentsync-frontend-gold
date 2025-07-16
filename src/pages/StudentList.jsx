import { useEffect } from "react";

import useStudentStore from "../store/studentStore";

const StudentList = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {" "}
      <h1>Student List</h1>
      <ol>
        {students.map((student) => (
          <li key={student.id}>
            <span style={{ marginRight: "40px" }}>
              {student.first_name}
              {student.last_name}
            </span>
            <span>{student.enrollment_date}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StudentList;
