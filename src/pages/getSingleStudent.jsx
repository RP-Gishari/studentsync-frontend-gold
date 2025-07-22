import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStudentStore from "../store/studentStore";

const GetStudent = () => {
  const { id } = useParams();
  const { getStudent, student, loading, error } = useStudentStore();

  useEffect(() => {
    if (id) getStudent(id);
  }, [id, getStudent]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!student) return <div>No student found.</div>;

  return (
    <div>
      <p>First name: {student.first_name}</p>
      <p>Last name: {student.last_name}</p>
      <p>Student ID: {student.id}</p>
      <p>Date of birth: {student.date_of_birth}</p>
      <p>Email: {student.email}</p>
      <p>Contact number: {student.contact_number}</p>
      <p>Enrollment date: {student.enrollment_date}</p>
    </div>
  );
};

export default GetStudent;
