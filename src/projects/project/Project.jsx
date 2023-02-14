import React from 'react';
import s from "./Project.module.css";

const Project = (props) => {

    return (
        <div className={s.project}>
            <div style={props.style} className={s.imageContainer}>
                <a className={s.viewBtn}>Смотреть</a>
            </div>
            <div className={s.descriptionContainer}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    )

};

export default Project;