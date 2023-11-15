import { Link } from "react-router-dom";

import styles from "./ShowPost.module.css";

const ShowPost = ({img, title, content, userName, tags, id}) => {

  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <h3>Criado por {userName}</h3>
        <p>{content}</p>
        <p>{tags}</p>
        <Link to={`/post/${id}`}>Ler</Link>
    </div>
  )
}

export default ShowPost