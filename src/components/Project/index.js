import React from 'react';
function Project({ project }) {
  const { name, repo, link, description } = project;
  return (
    <div>
    <div className="project" key={name} >
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={name}
      />
      <div className="project-text">
        <h3>
          <a href={link}> {name}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
 </div>

  );
}
export default Project;