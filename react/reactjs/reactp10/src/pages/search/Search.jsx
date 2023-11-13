import React from 'react'

// hooks 
import { Link } from 'react-router-dom';

// custom hooks
import { useSearchPost } from '../../hooks/useSearchPost'
import { useGetPosts } from '../../hooks/useGetPosts';

// components
import ShowPost from '../../components/showpost/ShowPost';

import styles from "../home/Home.module.css"

const Search = () => {
  const url = useSearchPost();
  const urlParams = url.get("q");
  
  const {getPost, documents: posts, loading, error} = useGetPosts("posts", urlParams);

  return (
    <>
      <h1>{urlParams}</h1>
      {posts && posts.length !== 0 ? (
              <ul className={styles.ul}>
                {posts.map((item) => (
                  <li key={item.title}>
                    <ShowPost key={item.id}
                     img={item.urlImage}
                     title={item.title}
                     content={item.content}
                     userName={item.userName}
                     tags={item.tags}/>
                  </li>
                ))}
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

export default Search