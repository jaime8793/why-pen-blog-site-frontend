import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [categoryName, setCategoryName] = useState(""); // state to store category name

  useEffect(() => {
    fetchPost();
    fetchCategoryForPost();
  }, [id]); // Effect re-runs if id changes

  const fetchPost = async () => {
    const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
    setPost(response.data);
    if (response.data) {
      // Fetch category when you have post data
      fetchCategoryForPost(response.data.category);
    }
  };

  const fetchCategoryForPost = async (categoryId) => {
    const response = await axios.get(
      `http://localhost:5000/api/categories/${categoryId}`
    );
    setCategoryName(response.data.name); // Set the category name from fetched category data
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover mb-4"
        />
      )}
      <p className="text-gray-600 mb-2">
        By {post.author} on {new Date(post.createdAt).toLocaleDateString()} in{" "}
        {categoryName}
      </p>
      <div className="mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="whitespace-pre-wrap">{post.content}</p>
    </div>
  );
}

export default PostDetail;
