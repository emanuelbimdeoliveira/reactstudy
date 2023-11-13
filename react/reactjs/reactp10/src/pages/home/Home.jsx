// hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// custom hooks
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthContext } from '../../context/AuthContext'
import { useGetPosts } from '../../hooks/useGetPosts'
import { useSearchPost } from '../../hooks/useSearchPost'

// components
import ShowPost from '../../components/showpost/ShowPost'

import styles from "./Home.module.css"


const Home = () => {
  const [searchTags, setSearchTags] = useState("");

  const {user} = useAuthContext();

  const navigate = useNavigate();
  const {getPost, documents: posts, loading, error} = useGetPosts("posts", searchTags);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTags) {
      navigate(`/search?q=${searchTags}`);
    }
  }

  return (
    <section>
      {user && (
        <section>
          <h1>Bem Vindo {user.displayName}!</h1>
          <h2>Posts recentes</h2>
          <form onSubmit={handleSearch}>
            <fieldset className={styles.fieldset}>
              <label className={styles.label}>
                <input 
                  type="text"
                  className={styles.input}
                  placeholder='Pesquisar por Tags'
                  onChange={(event) => {setSearchTags(event.target.value)}}
                  value={searchTags} 
                />
                <input type="submit" className={styles.submit} value="Pesquisar" />
              </label>
            </fieldset>
          </form>
          <section className={styles.posts_section}>
            {posts ? (
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
          </section>
        </section>
      )}
    </section>
  )
}

export default Home