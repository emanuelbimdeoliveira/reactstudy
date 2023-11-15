import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

import { Link } from "react-router-dom";

// hooks
import { useGetPosts } from "../../hooks/useGetPosts";
import { useDeletePost } from "../../hooks/useDeletePost";

import ShowPost from "../../components/showpost/ShowPost";

import styles from "./DashBoard.module.css"

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const { getPost, documents: posts, loading } =  useGetPosts("posts", null, user.uid);
  const { deletePost } = useDeletePost("posts");

  const handleDeletePost = (postId) => {
    deletePost(postId);
  }

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {posts && <p>{posts.id}</p>}
      {posts && posts.length != 0 && !loading ? (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Posts</th>
                <th className={styles.th}>Opções</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className={styles.tr} style={{backgroundImage: `url(${post.urlImage})`}}>
                  <td className={styles.td}>{post.title}</td>
                  <td className={styles.td_flex}>
                    <Link to={`/post/${post.id}`} className={styles.options}>Ler</Link>
                    <Link to={`/post/edit/${post.id}`} className={styles.options}>Editar</Link>
                    <button className={styles.options} onClick={() => {handleDeletePost(post.id)}}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>        
      ) : (
        <>
          <h2 style={{marginBottom: "10px"}}>Ainda não existem Posts</h2>
          <Link to={"/newpost/create"} className='link'>Adicionar um Post</Link>
        </>
      )}
    </div>
  )
}

export default DashBoard
