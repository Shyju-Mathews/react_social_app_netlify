import React, { useContext } from 'react' 
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from "../api/post"
import DataContext from '../context/DataContext'

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext)

  const { id } = useParams()
  const post = posts.find((post) => (post.id).toString() === id)

  
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const post = posts.filter((post) => post.id !== id);
      setPosts(post)
    // localStorage.setItem("posts", JSON.stringify(post));
    console.log("post deleted successfully", post);
    navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <main className='postPage'>
      <article className='detailsPage'>
        {post && 
          <>
          <h1>{post.title}</h1>
          <p className="postdate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
        </>
        }
        {!post && 
        <>
        <p style={{marginTop: "5rem", textAlign: "center"}}>No posts to display</p>
        <p><Link to={'/'} style={{textDecoration: "none", fontWeight: "bold"}}>Visit Our HomePage</Link></p>
        </>
        }
        <div style={{ width: "20%", justifyContent: "center", gap: "2rem", display: "flex"}}>
        {
          post && <button><Link to={`/post/edit/${post.id}`} style={{color: "white", textDecoration: "none", padding: "0 0.9rem"}}>Edit</Link></button>
        }
        {
          post && <button onClick={() => handleDelete(post.id)}>Delete</button>
        }
        </div>
      </article>
      
    </main>
  )
}

export default PostPage