import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import AllProjectsPage from "./ProjectsPage/AllProjectsPage";
import ProjectDetailPage from "./ProjectsPage/ProjectDetailPage";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#top");

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash || "#top");
    };

    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const projectDetailPrefix = "#project-detail-";
  const isProjectDetail = currentHash.startsWith(projectDetailPrefix);
  const activeProjectId = isProjectDetail
    ? currentHash.slice(projectDetailPrefix.length)
    : currentHash === "#project-detail"
      ? "project-01"
      : "";

  return (
    <>
      {currentHash === "#projects-all" ? (
        <AllProjectsPage />
      ) : isProjectDetail || currentHash === "#project-detail" ? (
        <ProjectDetailPage projectId={activeProjectId} />
      ) : (
        <HomePage />
      )}

    </>
  );
}

export default App;
