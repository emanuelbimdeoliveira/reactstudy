
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"  
import { useAddPost } from '../../hooks/useAddPost';
import { useAuthContext } from '../../context/AuthContext';

import styles from "./NewPost.module.css"

const NewPost = () => {
  // states
  const [title, setTitle] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState(null)

  // context destructuring
  const {user} = useAuthContext();
  
  // hook destructuring
  const {addPost, state} = useAddPost("posts");

  // redirect to home
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    state.error = "";
    setError(null)

    // validate img
    try {
      new URL(urlImage);
    } catch (error) {
      return state.error = "URL inválida";
    }
    if (state.error) return;
    
    // arrange tags
    setTags((tags) => {
      return tags = tags.split(",").map((item) => {return item.trim().toLowerCase()})
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
    
    addPost(post);

    navigate("/");
  }

  useEffect(() => {
    setError(state.error);
  }, [state.error])

  return (
    <section>
      <h1>NewPost</h1>
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
        {!state.loading && <input type="submit" value="Postar" />}
        {state.loading && <input type="submit" disabled value="Aguarde..." />}
      </form>
      {error && <p className='danger'>{error}</p>}
    </section>
    
  )
}

export default NewPost