import styles from "./ShowPost.module.css";

import React from 'react'

const ShowPost = ({img, title, content, userName, tags}) => {

  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <h3>Criado por {userName}</h3>
        <p>{content}</p>
        <p>{tags}</p>
    </div>
  )
}

export default ShowPost