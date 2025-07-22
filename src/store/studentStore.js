/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { API } from "../lib/api";
const useStudentStore = create((set, get) => ({
  students: [],
  student: {},
  loading: false,
  error: null,

  // Fetch all students
  fetchStudents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await API.getAllStudents();
      if (response.success) {
        set({ students: response.data, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Get single student
  getStudent: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await API.getStudent(id);
      if (response.success) {
        set({ student: response.data, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Add student
  addStudent: async (studentData) => {
    set({ loading: true, error: null });
    // implementation goes here
    try {
      const response = await API.addStudent(studentData);
      if (response.success) {
        set((state) => ({
          students: [...state.students, response.data],
          loading: false,
        }));
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  // Update student
  updateStudent: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const response = await API.updateStudent(id, updatedData);
      if (response.success) {
        set((state) => ({
          students: state.students.map((student) =>
            student.id === id ? response.data : student,
          ),
          student: response.data,
          loading: false,
        }));
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Delete student
  deleteStudent: async (id) => {
    set({ loading: true, error: null });

    try {
      const response = await API.deleteStudent(id);

      if (response.success) {
        set((state) => ({
          students: state.students.filter((student) => student.id !== id),
          loading: false,
        }));
      } else {
        set({
          error: response.message || "Failed to delete student",
          loading: false,
        });
      }
    } catch (error) {
      set({
        error: error.message || "Something went wrong while deleting.",
        loading: false,
      });
    }
  },
}));

export default useStudentStore;
