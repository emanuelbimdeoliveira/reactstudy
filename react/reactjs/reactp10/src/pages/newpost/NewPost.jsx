
import { useState } from 'react'
import { useAddPost } from '../../hooks/useAddPost';
import { useAuthContext } from '../../context/AuthContext';

import styles from "./NewPost.module.css"

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  // context destructuring
  const {user} = useAuthContext();
  
  // hook destructuring
  const {addPost, state} = useAddPost("posts");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    state.error = "";
    const post = {
      title, 
      urlImage,
      content,
      tags,
      userId: user.uid,
      userName: user.displayName
    }
    
    addPost(post);
  }

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
      {state.error && <p className='danger'>{state.error}</p>}

    </section>
    
  )
}

export default NewPost