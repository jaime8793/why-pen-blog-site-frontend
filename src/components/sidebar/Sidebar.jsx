import React, { useState } from "react";
import axios from "axios";

export default function Sidebar() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/email/", {
        email,
      });
      setMessage(response.data.message);
      setEmail("");
      alert("You have successfully subscribed to ypen — Thank you!");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="sidebar font-lato">
      <section className="blog-list-sidebar-area Blog-Area sideBar">
        <div className="container mx-auto px-4 pt-4 mb-4">
          <div className="flex flex-col space-y-8">
            <div className="email_tab bg-[#b1fdfd] text-[rgb(2,55,83)] p-6 rounded-3xl shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Subscribe By E-mail</h1>
              <p className="text-sm mb-4">
                Once a week, by email, you'll receive links to the new articles
                and blogs.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleInputChange}
                  className="border-none bg-white p-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-[#3ed2cb] text-[rgb(2,55,83)] py-2 px-4 rounded-full hover:bg-[#2bb3b3] transition duration-300 ease-in-out self-end"
                >
                  Join
                </button>
              </form>
              {message && (
                <p className="errmsg text-[#a30505] font-semibold mt-2">
                  {message}
                </p>
              )}
            </div>
            <div className="articles_tab text-[rgb(2,55,83)] border-3 border-[rgb(2,55,83)] rounded-3xl p-6 shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Literary Adventure</h1>
              <p className="mb-2">
                <b>
                  <i>Discover Your Next Literary Gem</i>
                </b>
              </p>
              <p className="text-sm mb-2">
                Looking for the perfect book to escape into a new world? Or
                maybe a quick short story to brighten up your day? Look no
                further!
              </p>
              <p className="text-sm font-bold mb-2">
                With just a few clicks, you can easily purchase and have them
                delivered straight to your doorstep!
              </p>
              <p className="text-sm italic mb-2">
                Indulge in the world of literature and find your next favorite
                read. Shop now!
              </p>
              <p className="text-sm">Coming soon...</p>
            </div>
            <div className="writing_tab text-[#01a3a3] border-3 border-[#01a3a3] rounded-3xl p-6 shadow-lg">
              <h1 className="text-2xl font-bold mb-4">WRITING CLINIC</h1>
              <p className="mb-2">
                <b>The Cure for Your Content Woes!</b>
              </p>
              <p className="text-sm italic">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
