import React from 'react'
import styles from './wrap.module.css'
import logo from '../../assets/logo.png'
import gradHat from '../../assets/grad-hat.svg'
import book from '../../assets/book.svg'
import phone from '../../assets/phone.svg'
import questionMark from '../../assets/question-mark.svg'
import uniLogo from '../../assets/university-logo.png'
import { Link, useLocation } from 'react-router-dom'


const wrapper = (props) => {
    const location = useLocation()
    const style = location.pathname.includes('page') ? { background: 'transparent'}: {background: '#e5e5e5'}
    const additionalStyles = location.pathname.includes('page') ? {} : {background: '#0B455F'}
    const additionalStyles2 = location.pathname.includes('page') ? {} : {background: '#0B455F', opacity: '0.8'}
    return(
        <div className={styles.wrapper} >
            <div style={style} className={styles.header} >
                <Link to='/pageOne' ><div className={styles.logoArea} style={additionalStyles2} >
                   <span> <img className={styles.logo} src={logo} /></span>
                </div></Link>
                <ul className={styles.linkList} style={additionalStyles} >
                    <li className={styles.link} >  <span > <img src={gradHat} className={`${styles.linkIcon} ${styles.gradIcon}`} /> </span> <Link to='/child-university' >جامعة الطفل</Link></li>
                    <li className={styles.link} >  <span > <img src={book} className={`${styles.linkIcon} ${styles.bookIcon}`} />  </span> <Link to='/services' >دورات تعليمية</Link></li>
                    <li className={styles.link} >  <span > <img src={phone} className={`${styles.linkIcon} ${styles.phoneIcon}`} /> </span> <Link to='/jobApplication' >طريقك أخضر</Link></li>
                    <li className={styles.link} > <span ><img src={questionMark} className={`${styles.linkIcon} ${styles.questionMark}`} /></span> <Link to='/questions' >استفسارات</Link></li>
                </ul>
            </div>
            {props.children}
            <div className={styles.footer} >
                <span ><img src={uniLogo}  className={styles.universityLogo} /></span>
                <p className={styles.uniLogoText} >جامعة <br/> دمنهور</p> 
            </div>
        </div>
    )
}

export default wrapper