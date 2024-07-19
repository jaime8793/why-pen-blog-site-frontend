import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

 /* const clearStorageAndCookies = () => {
    localStorage.clear();
    document.cookie.split(";").forEach((c) => {
      document.cookie =
        c.trim().startsWith("token=") || c.trim().startsWith("isAdmin=")
          ? `${c.trim()}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
          : c;
    });
  };
*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear local storage and cookies
    //clearStorageAndCookies();

    try {
      console.log("Sending request with credentials:", credentials);
      const response = await axios.post("/api/users/login", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Request Headers:", response.config.headers);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAdmin", response.data.isAdmin);
      // Redirect to appropriate page based on admin status
      if (response.data.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response error status:", error.response.status);
        console.error("Response error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
