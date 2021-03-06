import React from 'react'
import styles from './job-application.module.css'
import { Link } from 'react-router-dom'
import search from '../../assets/search.svg'
import manager from '../../assets/manager.svg'

export default function index() {
  return (
    <div className={styles.page} >
        <Link className={styles.section} to="/register/عرض وظيفة"><div className={styles.businessman} > <img src={manager} className={styles.icon} alt='' /> <h1 className={styles.header} > اصحاب اعمال </h1></div></Link>
        <Link className={styles.section} to="/register/بحث عن وظيفة" ><div className={styles.applicant} >  <img src={search} className={styles.icon} alt='' /> <h1 className={styles.header} > باحث عن عمل </h1> </div></Link>
    </div>
  )
}
