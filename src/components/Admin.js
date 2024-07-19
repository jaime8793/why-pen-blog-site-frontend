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
    author: "", // We'll set this based on the logged-in user
  });
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [categoryMap, setCategoryMap] = useState({});
 
  useEffect(() => {
    if (token) {
      fetchPosts();
      fetchCategories();
    }
  }, [token]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
        
      });
      setPosts(response.data);
      console.log("Token received:", response.data.token);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data);
      const map = {};
      response.data.forEach((cat) => (map[cat._id] = cat.name));
      setCategoryMap(map);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
        tags: newPost.tags.split(",").map((tag) => tag.trim()),
        image: newPost.image,
        // The author should be set on the server based on the authenticated user
      };

      const response = await axios.post(
        "http://localhost:5000/api/posts",
        postData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Post created:", response.data);
      fetchPosts();
      setNewPost({
        title: "",
        content: "",
        category: "",
        tags: "",
        image: "",
      });
    } catch (error) {
      console.error(
        "Error creating post:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add post. Please try again.");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch (error) {
      alert("Failed to delete post. Please try again.");
    }
  };

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/categories",
        { name: newCategory },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchCategories();
      setNewCategory("");
    } catch (error) {
      alert("Failed to add category. Please try again.");
    }
  };

  if (!token) {
    return <div>Please log in to access the admin panel.</div>;
  }

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
        <select
          name="category"
          value={newPost.category}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
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

      <h3 className="text-xl font-bold mb-2">Add New Category:</h3>
      <form onSubmit={handleCategorySubmit} className="mb-8">
        <input
          type="text"
          value={newCategory}
          onChange={handleCategoryChange}
          placeholder="New Category"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Category
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">Your Posts:</h3>
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 mb-4 rounded shadow">
          <h4 className="text-lg font-semibold">{post.title}</h4>
          <p className="text-gray-600">
            By {post.author} on {new Date(post.createdAt).toLocaleDateString()}{" "}
            in {categoryMap[post.category] || "Uncategorized"}
          </p>
          <p className="mb-2">{post.content.substring(0, 100)}...</p>
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
