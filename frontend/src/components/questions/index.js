import React from 'react'
import styles from './questions.module.css'
import { useState, useEffect } from "react"
import axios from 'axios'

export default function index() {
    
    const [questions, setQuestions] = useState([])
    const [questionInput, setQuestionInput] = useState('')
    const [answerInput, setAnswerInput] = useState('')


    useEffect( () => {
        axios.get('/Questions/questions')
        .then(res => {
            console.log(res.data)
            setQuestions(res.data)
        })
    } ,[])

    const submitQuestion = (e) => {
        e.preventDefault()
        axios.post('/Questions/question', {
            question: questionInput
        })
        .then(res => {
            console.log(res)
        })
    }


    const submitAnswer = (e, id) => {

        e.preventDefault()
        axios.put('/Questions/question', {
            answer: answerInput,
            id
        })
        .then(res => {
            console.log(res)
        })
    }


    const questionsDOM = questions.map( q => {
        return (
            <>  
                <div className={styles.question} >
                        <h2 className={styles.questionText} >{q.question}</h2>
                        {q.answer ? <p className={styles.answer} > {q.answer} </p> : <></>}
                        <div className={styles.formGroup} >
                            <textarea className={`${styles.textInput} ${styles.textarea} `} name="paragraph"  onChange={e => {setAnswerInput(e.target.value); console.log(e.target.value)}} />
                            <label className={styles.registerLabel} htmlFor="paragraph">اضافة اجابة</label>
                        </div>
                        <buttom className={styles.registerLink} onClick={(e) => {submitAnswer(e, q._id)}} >اضافة</buttom>
                    </div>
            </>
        )
    })
    
    

    return (
            <div className={styles.questionPage} >
                <div className={styles.register} >
                    <h3 className={styles.registerText} >اسئلة و اجابة</h3>
                </div>
                <div className={styles.questions} >
                    {questionsDOM}
                    <div className={styles.question} >
                        <div className={styles.formGroup} >
                            <textarea className={`${styles.textInput} ${styles.textarea} `} name="addQuestion"  value={questionInput} onChange={e => {setQuestionInput(e.target.value)}}  />
                            <label className={styles.registerLabel} htmlFor="addQuestion">اضافة سؤال</label>
                        </div>
                        <button className={styles.registerLink} onClick={submitQuestion} >اضافة</button>
                    </div>
                </div>
            </div>
    )
}
