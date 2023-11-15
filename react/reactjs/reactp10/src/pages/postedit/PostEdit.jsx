
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"  

// custom hooks
import { useGetPosts } from '../../hooks/useGetPosts';

// context
import { useAuthContext } from '../../context/AuthContext';

import styles from "../newpost/NewPost.module.css"

const PostEdit = () => {
  // states
  const [title, setTitle] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState(null)

  // context destructuring
  const { user } = useAuthContext();
  const { id } = useParams();
  
  // hook destructuring
  const {getPosts, documents: post, loading} = useGetPosts("posts", null, null, id);

  useEffect(() => {
    if (post) {
       // settings states
       setTitle(post.title);
       setUrlImage(post.urlImage);
       setContent(post.content);
       setTags(post.tags);
    }  
  }, [post])
  
  // redirect to home
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setError(null)

    // validate img
    try {
      new URL(urlImage);
    } catch (error) {
    }
    
    // arrange tags
    setTags((tags) => {
      return tags.split(",").map((item) => {return item.replace("#", "").trim().toLowerCase()})
    })
    
    if (!title || !urlImage || !content || !tags) return setError("Algo deu errado!");
    
    const post = {
      title, 
      urlImage,
      content,
      tags,
      userId: user.uid,
      userName: user.displayName
    }
    
    navigate("/");
  }  

  return (
    <section>
      <h1>PostEdit</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <label>
            <span>Título</span>
            <input 
              type="text"
              name="titleOfPost"
              id="titleOfPost"
              autoComplete='true'
              value={title}
              placeholder='Adicione o título'
              required
              onChange={(event) => {setTitle(event.target.value)}}
              />
          </label>
          <label>
            <span>URL da imagem</span>
            <input 
              type="text"
              name="urlImage"
              id="urlImage"
              autoComplete='true'
              value={urlImage}
              placeholder='Adicione uma URL'
              required
              onChange={(event) => {setUrlImage(event.target.value)}}
            />
            <p>Imagem Atual:</p>
            {post && <img src={post.urlImage} alt={post.title} />}
          </label>
          <label>
            <span>Conteúdo</span>
            <input 
              type="text"
              name="content"
              id="content"
              autoComplete='true'
              value={content}
              placeholder='Adicione o conteúdo'
              required
              onChange={(event) => {setContent(event.target.value)}}
              />
          </label>
          <label>
            <span>Tags</span>
            <input 
              type="text"
              name="tags"
              id="tags"
              autoComplete='true'
              value={tags}
              placeholder='Adicione as tags'
              required
              onChange={(event) => {setTags(event.target.value)}}
              />
          </label>
        </fieldset>
        {!loading && <input type="submit" value="Editar" />}
        {loading && <input type="submit" disabled value="Aguarde..." />}
      </form>
      {error && <p className='danger'>{error}</p>}
    </section>
    
  )
}

export default PostEdit