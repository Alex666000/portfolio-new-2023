import React from 'react';
import s from './Footer.module.css';
import commonContainer from '../common/styles/commonContainer.module.css';
import Title from "../common/components/Title";

const Footer = () => {
    const size = {
        fontSize: '22px'
    }

    return (
        <div className={s.footerBlock}>
            <div className={`${commonContainer.container} ${s.footerContainer}`}>
                <a href="#"><Title footerName style={size} text={'Aleksandr Bogdanov'}/></a>

                <div className={s.socialIcons}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                </div>
                <ul className={s.socialLinks}>
                    <li><a href="#" className={s.socialLink}>Vk</a></li>
                    <li><a href="#" className={s.socialLink}>hh</a></li>
                </ul>
                <p className={s.copyright}>
                    © 2023, All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;