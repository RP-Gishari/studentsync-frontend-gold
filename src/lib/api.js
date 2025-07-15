const apiRequest = async (endpoint, options = {}) => {
  const url = `${import.meta.env.VITE_BACKEND_API_URL}${endpoint}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server returned non-JSON response");
    }

    return response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out - server might be slow or down");
    }
    throw error;
  }
};

export const API = {
  // Get all students
  async getAllStudents() {
    return apiRequest("/students");
  },

  // Get single student by ID
  async getStudent(id) {
    return apiRequest(`/students/${id}`);
  },
};
