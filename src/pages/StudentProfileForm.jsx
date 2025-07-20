function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return date.toLocaleDateString();
}

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStudentStore from "../store/studentStore";
import "./StudentProfileForm.css";
import image from "../assets/image1.png";

const StudentProfileForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { student, getStudent, updateStudent, loading, error } =
    useStudentStore();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    student_id: "",
    email: "",
    date_of_birth: "",
    contact_number: "",
    enrollment_date: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getStudent(id);
  }, [id]);

  useEffect(() => {
    if (student) {
      setFormData({
        first_name: student.first_name || "",
        last_name: student.last_name || "",
        student_id: student.student_id || "",
        email: student.email || "",
        date_of_birth: student.date_of_birth
          ? student.date_of_birth.slice(0, 10)
          : "",
        contact_number: student.contact_number || "",
        enrollment_date: student.enrollment_date
          ? student.enrollment_date.slice(0, 10)
          : "",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, formData);
    setIsEditing(false);
  };

  if (loading) return <div className="center">Loading...</div>;
  if (error) return <div className="center error">{error}</div>;

  return (
    <div className="profile-card">
      <div className="green-top-line"></div>
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={student.profile} alt="Avatar" />
          <div>
            <h3 className="names">
              {student.first_name} {student.last_name}
            </h3>
            <p>{student.email}</p>
          </div>
        </div>
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Student Id</label>
          <input name="student_id" value={formData.student_id} readOnly />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            name="date_of_birth"
            type="date"
            value={formData.date_of_birth}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Enrollment Date</label>
          <input
            name="enrollment_date"
            type="date"
            value={formData.enrollment_date}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        {isEditing && (
          <div className="form-actions">
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        )}
      </form>

      <div className="email-info">
        <h4>My email Address</h4>
        <div className="email-row">
          <img src={image} alt="Email" />
          <span>{student.email}</span>
        </div>
        <p className="updated-text">
          Updated{" "}
          {student.updated_at
            ? formatRelativeTime(student.updated_at)
            : "recently"}
        </p>
      </div>

      <div className="back-btn-wrapper">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Go back
        </button>
      </div>
    </div>
  );
};

export default StudentProfileForm;
