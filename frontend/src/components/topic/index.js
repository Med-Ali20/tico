import React from 'react'
import styles from './topic.module.css'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import imgProcessor from '../utils/imgProcessor'

const topic = (props) => {
    const date = new Date()
    const min = date.getMinutes()
    const hour = date.getHours()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const { id } = useParams()
    console.log(id)
    
    const topic =  props.topics.find(topic => topic._id === id)

    const photos = topic ? topic.images.map(img => {
        return(
            <span className={styles.topicPhoto} key={Math.random()*10000} > <img src={`data:image/jpeg;base64,${imgProcessor(img.data)}`} width="500px" height="300px" /> </span>
        )
    }): (<></>)

    const topicDOM = topic ? (<>
        <div className={styles.topicHeader} >
                <h1 className={styles.topicHeaderText} >{topic.title}</h1>
                <p className={styles.date} > {`${day} / ${month} / ${year} - ${hour}:${min}`} </p>
            </div>
            <div className={styles.thumbnail} > <img src={`data:image/jpeg;base64,${imgProcessor(topic.thumbnail.data)}`} width="800px" height="600px" /> </div>
            <div className={styles.topicBody} >
                <p className={styles.topicParagraph} >
                    {topic.paragraph}
                    {topic.applyingAllowed ? <Link to={`/register/${topic.title}`}><a className={styles.registerLink} > التسجيل الان </a></Link> : <></>}
                </p>
                <div className={styles.topicPhotos} >
                    {photos}
                </div>
            </div>
    </>) : 'Loading'

  return (
    <>
        <div className={styles.topicPage} >

            {topicDOM}
        </div>
        
    </>
  )
}

const mapStateToProps = state => {
    return {
        topics: [...state.cuTopics, ...state.servicesTopics]
    }
}


export default connect(mapStateToProps)(topic)