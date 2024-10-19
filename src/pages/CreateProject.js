// src/components/CreateProject.js
import React, { useState } from "react";
import { assignee } from "../mockData";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    owner: assignee[0].id,
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing projects from localStorage
    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    
    // Add the new project to the existing list
    const updatedProjects = [...existingProjects, formData];

    // Save the updated project list to localStorage
    localStorage.setItem('projects', JSON.stringify(updatedProjects));

    alert('Project'+formData.name 
        +'created!'
    )
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create Project</h2>
      <label className="block mb-2">
        Project Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          maxLength="150"
          required
          className="p-2 border border-gray-300 rounded w-full"
        />
      </label>
      <label className="block mb-2">
        Owner:
        <select
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        >
          {assignee.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block mb-2">
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </label>
      <label className="block mb-2">
        End Date:
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Create Project
      </button>
    </form>
  );
};

export default CreateProject;
