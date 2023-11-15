import React from 'react'

// hooks
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useGetPosts } from '../../hooks/useGetPosts'

// components
import ShowPost from '../../components/showpost/ShowPost'

import styles from "../home/Home.module.css"

const IndividualPost = () => {
  const { id } = useParams();
  console.log(id)

  const {getPosts, documents: post, loading} = useGetPosts("posts", null, null, id);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {post && !loading ? (
        <ul className={styles.ul}>
            <li key={post.title}>
              <ShowPost key={post.id}
                id={post.id}
                img={post.urlImage}
                title={post.title}
                content={post.content}
                userName={post.userName}
                tags={post.tags}/>
            </li>
        </ul>
      ) : (
        <>
        <h2>Ainda não existem Posts</h2>
        <Link to={"/newpost/create"} className='link'>Adicionar um Post</Link>
        </>
      )}
    </>
  )
}

export default IndividualPost