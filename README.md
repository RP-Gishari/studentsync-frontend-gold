# StudentSync - Student Management System

## Overview

StudentSync is a modern, responsive web application built with React and Vite for managing student information efficiently.
The application features a clean, purple-themed UI with comprehensive student management capabilities.

## 🛠 Tech Stack & Setup

- **Frontend**: React + Vite
- **State Management**: Zustand
- **UI Components**: Material-UI
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Development Tools**: ESLint, Prettier, Husky

### Pre-configured Features

- ✅ Complete project structure
- ✅ Routing setup with React Router
- ✅ API service layer with Axios
- ✅ Global state management with Zustand
- ✅ Basic components (Navbar, Layout)
- ✅ Responsive CSS styling
- ✅ Error handling interceptors
- ✅ Development tooling (ESLint, Prettier)

## 📋 Implementation Tasks

### 1. Add Student Form (`/src/pages/AddStudent.jsx`)

Required fields:

- First Name
- Last Name
- Email
- Phone
- Date of Birth
- Address
- Profile Picture Upload
- Form validation
- Success/Error messages

### 2. Student Detail Page (`/src/pages/StudentDetail.jsx`)

Features to implement:

- Display comprehensive student information
- Add edit functionality
- Implement delete with confirmation
- Show student profile picture
- Add back navigation

### 3. Edit Student Form (`/src/pages/EditStudent.jsx`)

Requirements:

- Pre-fill form with existing data
- Implement form validation
- Handle image update
- Show success/error messages
- Add cancel button

## 🔄 API Integration

The API service layer is already set up in `/src/services/api.js` with the following endpoints:

- GET `/students` - Fetch all students
- GET `/students/:id` - Get single student
- POST `/students` - Create new student
- PUT `/students/:id` - Update student
- DELETE `/students/:id` - Delete student

## 💾 State Management

Zustand store is configured in `/src/store/studentStore.js`. Implementation needed for:

- `getStudent`
- `addStudent`
- `updateStudent`
- `deleteStudent`

## 🎨 UI Guidelines

- Use the existing purple theme (`#6b46c1`)
- Follow the responsive design patterns in `App.css`
- Maintain consistent form styling
- Implement loading states and error messages

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the application at `http://localhost:5173`


## 💻 Commit Convention

Commits must follow this format:
`type: subject`

### Types
- feat - new features
- fix - bug fixes
- docs - documentation
- style - formatting, missing semi colons, etc
- refactor - code changes that neither fixes a bug nor adds a feature
- test - adding tests
- chore - maintenance tasks

### Examples
feat: add student registration form
fix: resolve date formatting
docs: update API documentation
style: format components


## NOTE: Invalid commits will be rejected by husky