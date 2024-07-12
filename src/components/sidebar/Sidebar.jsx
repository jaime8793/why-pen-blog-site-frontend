import "./sidebar.css"
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
            alert("You have successfuly subcribed to ypen — Thank you!")
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong, please try again later.");
        }
    };
    return (
        <div className="sidebar">
            <section className="blog-list-sidebar-area Blog-Area sideBar">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 right_bar">
                            <div className="d-flex flex-column">
                                <div className="col email_tab">
                                    <h1>Subscribe By E-mail</h1>
                                    <p>
                                        Once a week, by email, you’ll receive links to the new articles and blogs.
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={handleInputChange}
                                        />
                                        <button type="submit">Join</button>
                                    </form>
                                    {message && <p className="errmsg">{message}</p>}
                                </div>
                                <div className="col articles_tab">
                                    <h1>Literary Adventure</h1>
                                    <p>
                                        <b><i>Discover Your Next Literary Gem</i></b> <br />
                                        </p>
                                        <p>
                                        <span>Looking for the perfect book to escape into a new world? Or maybe a quick short story to brighten up your day? Look no further!<br /></span>
                                        </p>
                                        <p>
                                        <span><b>With just a few clicks, you can easily purchase and have them delivered straight to your doorstep!</b><br /></span>
                                        </p>
                                        <p>
                                        <span><i>Indulge in the world of literature and find your next favorite read. Shop now!</i><br /></span>
                                        </p>
                                        <p>
                                        <span>Comming soon...</span>
                                    </p>
                                </div>
                                <div className="col writing_tab">
                                    <h1>WRITING CLINIC </h1>
                                    <p>
                                        <b>The Cure for Your Content Woes!</b> <br />
                                        
                                        <span style={{fontSize:"14px"}}><i>Comming soon...</i></span>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
