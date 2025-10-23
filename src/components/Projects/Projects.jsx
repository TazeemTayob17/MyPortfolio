import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  //console.log(getImageUrl(imageSrc));
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2> 
      <p className={styles.projectsIntro}>The following projects showcase my skills and experience through examples of my work. <br/>
        Each project is briefly described with links to code repositories in it.</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
