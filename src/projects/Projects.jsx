import React from 'react';
import s from './Projects.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';
import Project from "./project/Project";
import Title from "../common/components/Title";
import socialNetworkImg from "../assets/images/socialNetwork.jpg";
import todolistImg from "../assets/images/todolist.jpg";

export const Projects = () => {

    const socialStyle = {
        backgroundImage: 'url(' + socialNetworkImg + ')',
    }

    const todoStyle = {
        backgroundImage: 'url(' + todolistImg + ')',
    }

        return (
            <div className={s.projectsBlock}>
                <div className={`${commonContainer.container} ${s.projectsContainer}`}>
                    <Title text={'Project'}/>

                    <div className={s.projects}>
                        <Project style={socialStyle} title={'Social network'} description={'lorem killed'}/>
                        <Project style={todoStyle} title={'Todolist'} description={'Sed how are you'}/>
                    </div>
                </div>
            </div>
        );
    }
