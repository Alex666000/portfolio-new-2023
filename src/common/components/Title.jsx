import React from 'react';
import s from "./Title.module.scss";

const Title = ({text}) => {
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    );
};

export default Title;