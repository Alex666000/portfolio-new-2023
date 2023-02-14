import React from 'react';
import s from './Skills.module.css';
import comMonContainer from '../common/styles/commonContainer.module.css';
import Skill from "./skill/Skill";

const Skills = (props) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${comMonContainer.container} ${s.container}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={' Прнивет Прнивет Прнивет Прнивет Прнивет'}/>
                    <Skill title={'CSS'} description={' xxxx Прнивет Прнивет Прнивет Прнивет'}/>
                    <Skill title={'React'} description={' rrrrr Прнивет Прнивет Прнивет Прнивет'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;