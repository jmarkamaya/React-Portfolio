import React, { useState } from 'react';
import Project from "../Project";
function Portfolio() {

  const [projects] = useState([
    {
      name: 'weather-dashboard',
      description: 'weather app',
      link: "https://jmarkamaya.github.io/weather-dashboard/",
      repo: "https://github.com/jmarkamaya/weather-dashboard"
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};
export default Portfolio;









