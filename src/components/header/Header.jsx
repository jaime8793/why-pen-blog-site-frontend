import React, { useEffect } from "react";
import "./header.css";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel.min.js";
import one from "../imgs/hero/one.jpg";
import two from "../imgs/hero/two.jpg";
import three from "../imgs/hero/three.jpg";
import four from "../imgs/hero/four.jpg";
import five from "../imgs/hero/five.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
      });
    });
  }, []);

  return (
    <section className="home-area feature-post">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="owl-carousel owl-theme">
              <div className="relative">
                <img
                  src={one}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                  <div className="text-green-500">
                    <h2 className="text-2xl font-bold">Life Everyday</h2>
                    <p>
                      Empowering Your Everyday: Navigating Life's Journey with
                      Confidence
                      <br />
                      <i>
                        Enhance your daily experience with actionable insights,
                        tips and tricks.
                      </i>
                    </p>
                    <Link
                      className="text-white mt-4"
                      to={"/?cat=Life%20Everyday"}
                      style={{ textDecoration: "none" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={two}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                  <div className="text-blue-500">
                    <h2 className="text-2xl font-bold">Money Matters</h2>
                    <p>
                      Mastering Your Finances: Building Wealth with Wisdom
                      <br />
                      <i>
                        Take control of your financial future with expert advice
                        and proven strategies.
                      </i>
                    </p>
                    <Link
                      className="text-white mt-4"
                      to={"/?cat=Money%20Matters"}
                      style={{ textDecoration: "none" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={three}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                  <div className="text-orange-500">
                    <h2 className="text-2xl font-bold">Technology Space</h2>
                    <p>
                      Exploring the Digital Frontier: Staying Ahead of the Game
                      <br />
                      <i>
                        Stay ahead of the curve with cutting-edge insights and
                        analysis of the latest technological advancements.
                      </i>
                    </p>
                    <Link
                      className="text-white mt-4"
                      to={"/?cat=Tech%20Space"}
                      style={{ textDecoration: "none" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={four}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                  <div className="text-blue-800">
                    <h2 className="text-2xl font-bold">Creative Pen</h2>
                    <p>
                      Unleashing Your Imagination: Nurturing Your Creative Side
                      <br />
                      <i>
                        Unleash your inner artist with inspiration and guidance
                        for all things creative.
                      </i>
                    </p>
                    <Link
                      className="text-white mt-4"
                      to={"/?cat=Creative%20Pen"}
                      style={{ textDecoration: "none" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={five}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                  <div className="text-red-500">
                    <h2 className="text-2xl font-bold">Blog</h2>
                    <p>
                      Sharing Ideas, Insights and Perspectives: An Open
                      Discussion
                      <br />
                      <i>
                        Join the conversation and discover a wealth of knowledge
                        through thought-provoking discussions and expert
                        perspectives.
                      </i>
                    </p>
                    <Link
                      className="text-white mt-4"
                      to={"/?cat=Blog"}
                      style={{ textDecoration: "none" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
