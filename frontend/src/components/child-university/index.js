import React from 'react'
import Card from '../utils/card'
import styles from './child-university.module.css'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import imgProcessor from '../utils/imgProcessor'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const childUniversity = (props) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {

        axios.get('/Article/Articles/cu')
        .then(res => {
            setTopics(res.data)
            props.dispatchTopics(res.data)
        })

    },[])

    const cards = topics.map(topic => { 
        return (<Link to={`/topic/${topic._id}`}  key={topic._id}  >
                    <Card image={`data:image/jpeg;base64,${imgProcessor(topic.thumbnail.data)}`}  title={topic.title} />
                </Link>)
     })

     const registerPanel = (
                <div className={styles.register} >
                    <h3 className={styles.registerText} >للتسجيل بجامعة الطفل</h3>
                    <span className={styles.registerLink} ><Link to='/register/جامعة الطفل' >اضغط هنا </Link></span>
                </div>
    )

    return (
            <div className={styles.cuPage} >
                { topics.length !== 0 ? registerPanel : "" } 
                <div className={styles.cardsContainer} > 
                   { topics.length !== 0 ? cards : <p style={{fontSize: '2rem', textAlign: 'center'}} >Loading...</p> } 
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchTopics: (topics) => { dispatch({type: 'SET_TOPICS', payload: topics})}
    }
}

export default connect(null, mapDispatchToProps)(childUniversity)