import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    image: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts");
    setPosts(response.data);
  };

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts", {
        ...newPost,
        tags: newPost.tags.split(",").map((tag) => tag.trim()),
      });
      fetchPosts();
      setNewPost({ title: "", content: "", category: "", tags: "", image: "" });
    } catch (error) {
      alert("Failed to add post. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      fetchPosts();
    } catch (error) {
      alert("Failed to delete post. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin: Manage Blog Posts</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Post title"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          placeholder="Post content"
          className="w-full p-2 mb-4 border rounded"
          rows="4"
        ></textarea>
        <input
          type="text"
          name="category"
          value={newPost.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="tags"
          value={newPost.tags}
          onChange={handleInputChange}
          placeholder="Tags (comma-separated)"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          value={newPost.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Post
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">Your Posts:</h3>
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 mb-4 rounded shadow">
          <h4 className="text-lg font-semibold">{post.title}</h4>
          <p className="text-gray-600">
            By {post.author} on {new Date(post.createdAt).toLocaleDateString()}{" "}
            in {post.category}
          </p>
          <p className="mb-2">{post.snippet}</p>
          <div className="mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => handleDelete(post._id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
