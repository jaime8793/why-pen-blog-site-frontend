import "./footer.css"
import React from "react";
import { Link } from "react-router-dom";

export default function Footer2() {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start md:mb-0 mb-6">
            <a href="/">
              <img
                src={"https://mysitedatasafe.neocities.org/whypen/Y-logo.png"}
                alt="website logo"
                className="mb-4"
              />
            </a>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://twitter.com/Whyypen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://whypen.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/pin/create/button/?url=https://whypen.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-around">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">COMPANY</h3>
              <ul>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/market"}>Store</Link>
                </li>
                <li>
                  <Link to={"/about"}>Privacy policy</Link>
                </li>
                <li>
                  <Link to={"/login"}>Admin</Link>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">TOPICS</h3>
              <ul>
                <li>
                  <Link to={"/?cat=Life%20Everyday"}>Life Everyday</Link>
                </li>
                <li>
                  <Link to={"/?cat=Money%20Matters"}>Money Matters</Link>
                </li>
                <li>
                  <Link to={"/?cat=Tech%20Space"}>Tech Space</Link>
                </li>
                <li>
                  <Link to={"/?cat=Creative%20Pen"}>Creative Pen</Link>
                </li>
                <li>
                  <Link to={"/?cat=Blog"}>Blog</Link>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">GET CONNECTED</h3>
              <ul>
                <li>
                  <Link to={"/about"}>Enroll</Link>
                </li>
                <li>
                  <Link to={"/about"}>Dashboard</Link>
                </li>
                <li>
                  <Link to={"/market"}>Market</Link>
                </li>
                <li>
                  <Link to={"/about"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/about"}>Advertise</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">SOCIAL</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Whyypen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="./">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center">
          <p>©2023 Whypen Terms Privacy</p>
        </div>
      </div>
    </section>
  );
}
