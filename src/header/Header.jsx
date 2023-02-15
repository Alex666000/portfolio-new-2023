import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.headerBlock}>
            <div className={s.nav}>
                <a>Главная</a>
                <a>Скиллы</a>
                <a>Работа</a>
                <a>Контакты</a>
            </div>

        </div>
    );
};

export default Header;