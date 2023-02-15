import React from 'react';
import s from './Main.module.scss';
import portfolioPhoto from "../assets/images/portpholioPhoto.jpg";

const Main = () => {
    const portfolioStyle = {
        backgroundImage: 'url(' + portfolioPhoto + ')',
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.description}>
                    <span>Hi!</span>
                    <h1>My name is Aleksandr</h1>
                    <p>I am frontend developer</p>
                </div>
                <div className={s.photo} style={portfolioStyle}>
                </div>
            </div>
        </div>
    );
};

export default Main;