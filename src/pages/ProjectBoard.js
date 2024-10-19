import React, { useState, useEffect } from "react";
import IssueCard from "../components/IssueCard";

const ProjectBoard = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [filteredIssues, setFilteredIssues] = useState([]);

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
    if (savedProjects.length > 0) {
      setSelectedProject(savedProjects[0].id); // Set the first project as the default
    }
  }, []);

  // Filter issues based on the selected project
  useEffect(() => {
    const existingIssues = JSON.parse(localStorage.getItem("issues")) || [];
    console.log(existingIssues);
    console.log(selectedProject);
    const filtered = existingIssues.filter(issue => issue.project == selectedProject);
    setFilteredIssues(filtered);
  }, [selectedProject]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Project Board</h2>
      {projects.length > 0 ? (
        <>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4"
          >
        
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>

          {filteredIssues.length === 0 ? (
            <p className="text-red-500">No issues available for this project.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredIssues.map((issue) => (
                <IssueCard key={issue.id} issue={issue} />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-red-500">
          No projects available.{" "}
          <a href="/create-project" className="text-blue-500 underline">
            Create Project
          </a>
        </p>
      )}
    </div>
  );
};

export default ProjectBoard;
