// src/pages/ProjectBoard.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const IssueDetails = () => {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  useEffect(() => {
    // Get issues from local storage
    const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);

    // Extract the query parameter from the URL
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    if (query) {
      setSearchTerm(query);
    }
 
  }, [location.search]); // Add location.search to the dependency array

  const filteredIssues = issues.filter(issue => 
    issue.summary.match(new RegExp(searchTerm, "i")) || 
    issue.description.match(new RegExp(searchTerm, "i"))
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">Project Board</h1>
      <ul className="mt-4">
        {filteredIssues.map(issue => (
          <li key={issue.id} className="p-2 border-b border-gray-300">
            <h2 className="font-semibold">{issue.summary}</h2>
            <p>{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueDetails;
