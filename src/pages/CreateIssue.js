import React, { useState, useEffect } from "react";
import { assignee } from "../mockData";

const CreateIssue = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState(assignee);

  const [formData, setFormData] = useState({
    summary: "",
    project: "",
    assignee: "",
    priority: "LOW",
    description: "",
  });

  // Load projects and users from localStorage or mock data (assuming mockData is stored in localStorage)
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];   
    setProjects(savedProjects);

    // Set default project and assignee if data exists
    if (savedProjects.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        project: savedProjects[0].id,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing issues from localStorage
    const existingIssues = JSON.parse(localStorage.getItem("issues")) || [];

    // Add the new issue to the existing list
    const updatedIssues = [...existingIssues, formData];

    // Save the updated issue list to localStorage
    localStorage.setItem("issues", JSON.stringify(updatedIssues));

    alert(`Issue "${formData.summary}" created!`);

    // Optionally, reset form fields
    setFormData({
      summary: "",
      project: projects.length > 0 ? projects[0].id : "",
      assignee: users.length > 0 ? users[0].id : "",
      priority: "LOW",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create Issue</h2>
      
      <label className="block mb-2">
        Summary:
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          maxLength="150"
          required
          className="p-2 border border-gray-300 rounded w-full"
        />
      </label>

      <label className="block mb-2">
        Project:
        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
          required
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))
          ) : (
            <option disabled>No projects available</option>
          )}
        </select>
      </label>

      <label className="block mb-2">
        Assignee:
        <select
          name="assignee"
          value={formData.assignee}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
          required
        >
          {users.length > 0 ? (
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          ) : (
            <option disabled>No users available</option>
          )}
        </select>
      </label>

      <label className="block mb-2">
        Priority:
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
          maxLength="500"
        ></textarea>
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Create Issue
      </button>
    </form>
  );
};

export default CreateIssue;
