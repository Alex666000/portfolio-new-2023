import React from 'react';
import s from './Contacts.module.scss';
import commonContainer from '../common/styles/commonContainer.module.css';
import Title from "../common/components/Title";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${commonContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.contactForm}>
                        <div >
                            <input type="text" id="c_name" className={s.formName} name="c_name" placeholder="Name"
                                   required="" autoFocus/>
                        </div>
                        <div>
                            <input type="text" id="c_name"  className={s.formEmail} name="c_name" placeholder="Email"
                                   required="" autoFocus/>
                    </div>
                    <textarea className={s.formTextarea} name="c_message" rows="7"
                              placeholder="Your message" required="" autoFocus></textarea>
                </form>
                <button type={'submit'} className={s.submitBtn}>Send message</button>
            </div>
        </div>)
}





