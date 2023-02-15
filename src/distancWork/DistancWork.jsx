import React from 'react';
import s from './DistancWork.module.scss';
import comMonContainer from '../common/styles/commonContainer.module.css';


export const DistanceWork = () => {
    return (
        <div className={s.distanceBlock}>
            <div className={`${comMonContainer.container} ${s.container}`}>
                <div className={s.common}>
                    <h3 className={s.variants}>Рассматриваю варианты удаленной работы</h3>
                    <button className={s.button}>Нанять меня</button>
                </div>

            </div>
        </div>)
}





