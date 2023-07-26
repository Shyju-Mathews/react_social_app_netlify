import { format } from "date-fns";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/post";
import DataContext from "../context/DataContext";

const NewPost = () => {
  const { posts, setPosts } = useContext(DataContext)
  
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddPost = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    
    try {
      // const res = await api.post("/posts", newPost);
      const allPosts = [...posts, newPost];
      setPosts(allPosts);
      localStorage.setItem("posts", JSON.stringify(allPosts));
      navigate("/");
      console.log("Post Added suuccessfully", allPosts);
    } catch (error) {
      if (error.res) {
        console.log(error.res.data);
        console.log(error.res.status);
        console.log(error.res.headers);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  const handleUpdatePost = async (id) => {

    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatePost = { id, title: editTitle, datetime, body: editBody };
    try {
      // const res = await api.patch(`posts/${id}`, updatePost);
      const allPosts = posts.map((post) =>
        // post.id === id ? { ...res.data } : post
        post.id === id ? { ...updatePost} : post
      );
      setPosts(allPosts);
      localStorage.setItem("posts", JSON.stringify(allPosts));
      navigate("/");
      console.log("Post updated succcessfully", allPosts);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className="newPost">
      <h1 style={{ textAlign: "center" }}>
        {post ? "Update Post" : "Add Post"}
        {/* Add Post */}
      </h1>

     {
      post ? (
        <form
        action=""
        className="newPostForm"
        // onSubmit={() => handleUpdatePost(post.id)}
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="editTitle">Title :</label>
        <input
          type="text"
          id="editTitle"
          required
          placeholder="Edit Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="editBody">Post :</label>
        <textarea
          required
          placeholder="Type here"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        ></textarea>
        <button type="submit" onClick={() => handleUpdatePost(post.id)}> 
          {/* {post ? "Update" : "Add"} */}
          Update
        </button>
      </form>) : (

      <form
      action=""
      className="newPostForm"
      // onSubmit={() => handleUpdatePost(post.id)}
      onSubmit={handleAddPost}
    >
      <label htmlFor="postTitle">Title :</label>
      <input
        type="text"
        id="postTitle"
        required
        placeholder="Post Title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <label htmlFor="postBody">Post :</label>
      <textarea
        required
        placeholder="Type here"
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      ></textarea>
      <button type="submit">
        {/* {post ? "Update" : "Add"} */}
        Add
      </button>
    </form>)
     }
    </main>
  );
};

export default NewPost;
