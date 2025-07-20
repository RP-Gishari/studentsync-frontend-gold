import { useState } from "react";
import useStudentStore from "../store/studentStore";
import { useNavigate } from "react-router-dom";
import logoAdd from "../assets/logo.png";
import "./AddStudent.css";

const AddStudent = () => {
  const { addStudent, loading, error } = useStudentStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    student_id: "",
    email: "",
    date_of_birth: "",
    contact_number: "",
    enrollment_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addStudent(formData);
    if (result?.success) {
      navigate("/");
    }
  };

  const handleCancel = () => navigate("/");

  return (
    <div className="modal-backdrop">
      <div className="form-card">
        <div className="form-header">
          <div className="logo-title">
            <img src={logoAdd} alt="logo" className="form-logo" />
            <h2 className="colorSync">STUDENTSYNC</h2>
          </div>

          <p className="form-title">Add new student</p>
        </div>
        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-grid">
            <div>
              <label>First name</label>
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Date Of Birth</label>
              <input
                name="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Student ID</label>
              <input
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="full-width">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Contact Number</label>
              <input
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                required
              />

              <label>Enrollment date</label>
              <input
                name="enrollment_date"
                type="date"
                value={formData.enrollment_date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <div className="error-text">{error}</div>}
          <div className="form-actions">
            <button type="submit" className="add-btn" disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
