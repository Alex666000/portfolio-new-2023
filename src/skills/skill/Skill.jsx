import React from 'react';
import s from './Skill.module.scss';

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <div className={s.skillDescription}>
                {props.description}
            </div>
        </div>
    )
};

export default Skill;