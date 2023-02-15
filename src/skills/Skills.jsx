import React from 'react';
import s from './Skills.module.css';
import comMonContainer from '../common/styles/commonContainer.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";

const Skills = (props) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${comMonContainer.container} ${s.container}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...\n'}/>
                    <Skill title={'CSS'} description={'\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...\n'}/>
                    <Skill title={'React'} description={' \t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...\n'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;