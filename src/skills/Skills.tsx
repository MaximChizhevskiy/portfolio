import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/StyleContainer.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill titleSkill={'HTML'}
                           descriptionSkill={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, perspiciatis.'}/>
                    <Skill titleSkill={'CSS'}
                           descriptionSkill={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, perspiciatis.'}/>
                    <Skill titleSkill={'JavaScript'}
                           descriptionSkill={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, perspiciatis.'}/>
                    <Skill titleSkill={'TypeScript'}
                           descriptionSkill={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, perspiciatis.'}/>
                    <Skill titleSkill={'React'}
                           descriptionSkill={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, perspiciatis.'}/>
                </div>

            </div>
        </div>
    )
}

export default Skills