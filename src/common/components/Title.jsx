import React from 'react';
import s from "./Title.module.scss";

const Title = ({text, children, style, footerName}) => {
    return (
        <div className={footerName ? s.footerName : s.title}>
            <h2 style={style}>{text}</h2>
            {children}
        </div>
    );
};

export default Title;