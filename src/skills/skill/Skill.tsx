import React from 'react';
import style from '../skill/Skill.module.css'

type SkillPropsType ={
    titleSkill: string
    descriptionSkill: string
}

function Skill(props: SkillPropsType) {
    return(
        <div className={style.skill}>
            <div className={style.iconSkill}></div>
            <h3>{props.titleSkill}</h3>
            <span className={style.description}>{props.descriptionSkill}</span>
        </div>
    )
}

export default Skill