import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/StyleContainer.module.css";
import Project from "./Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project titleProject={'Project1'} descriptionProject={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project titleProject={'Project2'} descriptionProject={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects