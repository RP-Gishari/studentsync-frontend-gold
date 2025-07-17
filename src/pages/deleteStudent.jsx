import useStudentStore from "../store/studentStore";

const DeleteStudent = ({ studentId }) => {
  const { deleteStudent, loading, error } = useStudentStore();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );
    if (confirmDelete) {
      deleteStudent(studentId);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete Student"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeleteStudent;
