import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/StyleContainer.module.css";


const Contacts = () => {
    return(
        <div className={style.contacts}>
        <div className={`${styleContainer.container} ${style.contactContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.contactForm}>
                <input className={style.input} type={"text"}/>
                <input className= {style.input} type={"text"}/>
                <textarea className={style.textarea}></textarea>
            </form>
            <a className={style.button}>Отправить</a>
</div>
</div>
    )

}


export default Contacts