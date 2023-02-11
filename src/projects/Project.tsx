import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    titleProject: string
    descriptionProject: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.pictureProject}>
                <a className={style.button} href={'projectLink'}>Open</a>
            </div>
            <div className={style.titleProject}>{props.titleProject}</div>
            <div className={style.descriptionProject}>{props.descriptionProject}</div>

        </div>
    )
}

export default Project