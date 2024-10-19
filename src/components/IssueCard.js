// src/components/IssueCard.js
import React from "react";

const IssueCard = ({ issue }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold truncate">{issue.summary}</h3>
      <p className="text-gray-600 truncate">{issue.description}</p>
      <p className="text-gray-500">Assigned to: {issue.assignee}</p>
      <p className={`text-xs font-bold ${issue.priority === "HIGH" ? "text-red-500" : issue.priority === "MEDIUM" ? "text-yellow-500" : "text-green-500"}`}>
        Priority: {issue.priority}
      </p>
    </div>
  );
};

export default IssueCard;
