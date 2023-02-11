import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/StyleContainer.module.css";

const Footer = () => {
  return(
      <div className={style.footer}>
          <div className={`${styleContainer.container} ${style.footerContainer}`}>
              <h2 className={style.title}>Maxim Chizhevskiy</h2>
              <div className={style.footerBlockContainer}>
                  <div className={style.footerBlock}></div>
                  <div className={style.footerBlock}></div>
                  <div className={style.footerBlock}></div>
                  <div className={style.footerBlock}></div>
              </div>
              <div className={style.rightsReserved}><h3>© 2023 All rights reserved</h3></div>
          </div>
      </div>
  )
}

export default Footer