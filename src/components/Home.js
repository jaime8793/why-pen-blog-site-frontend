import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setPosts(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:5000/categories");
    setCategories(response.data);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Recent blog posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeaturedPostCard2 post={posts[0]} />
          <div className="grid grid-rows-2 gap-8">
            <SmallPostCard post={posts[1]} />
            <SmallPostCard post={posts[2]} />
          </div>
          <LargePostCard post={posts[3]} />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Recent blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {posts.slice(0, 3).map((post) => (
          <FeaturedPostCard
            key={post._id}
            post={post}
            categories={categories}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">All blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <PostCard key={post._id} post={post} categories={categories} />
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

function FeaturedPostCard({ post, categories }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <Link
          to={`/post/${post._id}`}
          className="text-xl font-semibold hover:text-blue-600"
        >
          {post.title}
        </Link>
        <p className="text-gray-600 mt-2">{post.snippet}</p>
        <div className="mt-4 flex flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 mb-2 px-3 py-1 bg-gray-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-2">
          By {post.author} on {new Date(post.createdAt).toLocaleDateString()} in{" "}
          {categories.find((cat) => cat.id === post.category)?.name ||
            "Uncategorized"}
        </p>
      </div>
    </div>
  );
}

function PostCard({ post, categories }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <Link
          to={`/post/${post._id}`}
          className="text-lg font-semibold hover:text-blue-600"
        >
          {post.title}
        </Link>
        <p className="text-gray-600 mt-2 text-sm">{post.snippet}</p>
        <div className="mt-4 flex flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-xs mt-2">
          By {post.author} on {new Date(post.createdAt).toLocaleDateString()} in{" "}
          {categories.find((cat) => cat.id === post.category)?.name ||
            "Uncategorized"}
        </p>
      </div>
    </div>
  );
}

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-12">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`mx-1 px-3 py-2 ${
            currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-md`}
        >
          {number}
        </button>
      ))}
    </div>
  );
}


function FeaturedPostCard2({ post }) {
  if (!post) return null;
  return (
    <div className="col-span-2 md:col-span-1 row-span-2">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
      <div className="mt-2">
        <span className="text-purple-600 text-sm">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</span>
        <Link to={`/post/${post._id}`} className="block text-xl font-semibold mt-1 hover:text-blue-600">{post.title}</Link>
        <p className="text-gray-600 mt-2">{post.snippet}</p>
        <div className="mt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block mr-2 text-sm text-blue-600">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmallPostCard({ post }) {
  if (!post) return null;
  return (
    <div className="flex">
      <img src={post.image} alt={post.title} className="w-1/3 h-32 object-cover" />
      <div className="ml-4 flex-1">
        <span className="text-purple-600 text-sm">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</span>
        <Link to={`/post/${post._id}`} className="block text-lg font-semibold mt-1 hover:text-blue-600">{post.title}</Link>
        <p className="text-gray-600 mt-2 text-sm">{post.snippet}</p>
        <div className="mt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block mr-2 text-sm text-blue-600">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LargePostCard({ post }) {
  if (!post) return null;
  return (
    <div className="col-span-2">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
      <div className="mt-2">
        <span className="text-purple-600 text-sm">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</span>
        <Link to={`/post/${post._id}`} className="block text-xl font-semibold mt-1 hover:text-blue-600">{post.title}</Link>
        <p className="text-gray-600 mt-2">{post.snippet}</p>
        <div className="mt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block mr-2 text-sm text-blue-600">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
