import ProjectData from '../data/projects.json';

import React, { Component } from 'react';



class Projects extends Component {
  render() {
    return(
      <ul>
        {ProjectData.allProjects.map((project, index) => {
            // console.log(project)
            return 
            (<li>
                    <p>{project.title}</p>
                    <p>{project.imgName}</p>
                    <p>{project.description}</p>
            </li>
            )
        })}
      </ul>
    )
  } 
}
export default Projects;