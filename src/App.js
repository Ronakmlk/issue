// src/App.js
import React, { useState } from "react"; // Ensure you're importing React
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Ensure this path is correct
import SideNav from "./components/SideNav"; // Ensure this path is correct
import ProjectBoard from "./pages/ProjectBoard"; // Ensure this path is correct
import CreateIssue from "./pages/CreateIssue"; // Ensure this path is correct
import CreateProject from "./pages/CreateProject"; // Ensure this path is correct
import IssueDetails from "./pages/IssueDetails"; // Ensure this path is correct
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideNav />
        <div className="flex-grow">
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<ProjectBoard />} />
              <Route path="/create-issue" element={<CreateIssue />} />
              <Route path="/create-project" element={<CreateProject />} />
              <Route path="/search" element={<IssueDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
