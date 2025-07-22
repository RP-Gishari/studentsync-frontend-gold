import { useEffect } from "react";

import useStudentStore from "../store/studentStore";

const StudentList = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();
  console.log("Students:", students);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div>Student List</div>;
};

export default StudentList;
