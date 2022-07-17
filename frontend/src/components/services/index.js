import React from 'react'
import Card from '../utils/card'
import styles from '../child-university/child-university.module.css'
import { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import imgProcessor from '../utils/imgProcessor'
import { Link } from 'react-router-dom'

const services = (props) => {

    const [topics, setTopics] = useState([])

    useEffect(() => {

        axios.get('/Article/Articles/services')
        .then(res => {
            setTopics(res.data)
            props.dispatchTopics(res.data)
        })

    },[])

    const registerPanel = (
        <div className={styles.register} >
            <h3 className={styles.registerText} >للتسجيل بجامعة الطفل</h3>
            <span className={styles.registerLink} ><Link to='/register/جامعة الطفل' >اضغط هنا </Link></span>
        </div>
    )

    const cards = topics.map(topic => { 
        return (<Link to={`/topic/${topic._id}`}  key={topic._id}  >
                    <Card image={`data:image/jpeg;base64,${imgProcessor(topic.thumbnail.data)}`}  title={topic.title} />
                </Link>)
     })

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
        dispatchTopics: (topics) => { dispatch({type: 'SET_TOPICS_SERVICES', payload: topics})}
    }
}

export default connect(null, mapDispatchToProps)(services)