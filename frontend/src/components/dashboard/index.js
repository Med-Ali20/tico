import React from 'react'
import styles from './dashboard.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const dashboard = () => {
    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        axios.get('/Applicant/applicants')
        .then(res => {
            setApplicants(res.data)
        })
    },[])

 

    const data = applicants.map(applicant => {

        if(applicant.service === 'عرض وظيفة'){
            return (
                <div className={styles.applicantsDataText} key={applicant._id} >
                    <p className={styles.applicantName} >:اسم الشركة <span>  {applicant.applicantName} </span> </p>
                    <p className={styles.applicantName} >:مجال العمل <span>  {applicant.workField} </span> </p>
                    <p className={styles.applicantName} >:المواصفات المطلوبة<span>  {applicant.qualificationsRequired} </span> </p>
                    <p className={styles.applicantName} >:نوعية العمل العمل <span>  {applicant.workType} </span> </p>
                    <p className={styles.applicantName} >:الموبايل <span> {applicant.phoneNumber} </span> </p>
                    <p className={styles.applicantName} >:الخدمة <span>  {applicant.service} </span> </p>

                </div>
    
            )
        } else if(applicant.service === 'بحث عن وظيفة'){
            return (
                <div className={styles.applicantsDataText} key={applicant._id} >
                    <p className={styles.applicantName} >:اسم الخريج <span>  {applicant.applicantName} </span> </p>
                    <p className={styles.applicantName} >:مجال الدراسة <span>  {applicant.studyField} </span> </p>
                    <p className={styles.applicantName} >:المهارات<span>  {applicant.skills} </span> </p>
                    <p className={styles.applicantName} >:الموبايل <span> {applicant.phoneNumber} </span> </p>
                    <p className={styles.applicantName} >:الخدمة <span>  {applicant.service} </span> </p>

                </div>
            )
        }

        else 
            return (
                <>
                    <div className={styles.applicantsDataText} key={applicant._id} >
                        <p className={styles.applicantName} >:الاسم <span> {applicant.applicantName} </span> </p>
                        <p className={styles.applicantName} >:الموبايل <span> {applicant.phoneNumber} </span> </p>
                        <p className={styles.applicantName} >:الخدمة <span>  {applicant.service} </span> </p>
                    </div>
                </>
            )
    })

    return (
            <div className={styles.dashboardPage} >
                <span className={styles.addTopic} > <Link to='/addTopic'> اضافة موضوع</Link></span>
                <a href="" className={`${styles.addTopic} ${styles.logout} `} > تسجيل الخروج </a>
                <div className={styles.applicantsData} >
                    {data}
                </div>
            </div>
        
    )
}


export default dashboard