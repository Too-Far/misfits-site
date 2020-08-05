import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import styles from './PhotoCard.module.css'

const PhotoCard = (props) => {
    const caption = props.data.caption
    const url = props.url
    return(
      <div className={styles.gallery}>
      <Paper className={styles.media}>
        <img src={url} alt="" />
        <div className={styles.layer}>
          <div className={styles.innerText}>
            <h2 style={{fontFamily: 'UnifrakturMaguntia, cursive'}}>{caption}</h2>
          </div>
        </div>
      </Paper>
    </div>
    )
}

export default PhotoCard