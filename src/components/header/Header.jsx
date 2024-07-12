import "./header.css";
import 'owl.carousel/dist/owl.carousel.min.js';
import one from "../imgs/hero/one.jpg";
import two from "../imgs/hero/two.jpg";
import three from "../imgs/hero/three.jpg";
import four from "../imgs/hero/four.jpg";
import five from "../imgs/hero/five.jpg";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <section className="home-area feature-post">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="feature-post-slider owl-carousel">
                            <div className="single-feature-post">
                                <img src={one} alt="Hero" />
                                <div className="feature-text-wrapper">
                                    <div className="feature-text ft_green">
                                        <h2>Life Everyday</h2>
                                        <p>
                                            Empowering Your Everyday: Navigating Life's Journey with Confidence
                                            <br />
                                            <i>Enhance your daily experience with actionable insights, tips and tricks.</i>
                                        </p>
                                        <Link className="feature-post-btn" to={"/?cat=Life%20Everyday"} style={{ textDecoration: "none" }}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="single-feature-post">
                                <img src={two} alt="Hero" />
                                <div className="feature-text-wrapper">
                                    <div className="feature-text ft_blue">
                                        <h2>Money Matters</h2>
                                        <p>
                                            Mastering Your Finances: Building Wealth with Wisdom
                                            <br />
                                            <i>Take control of your financial future with expert advice and proven strategies.</i>
                                        </p>
                                        <Link className="feature-post-btn" to={"/?cat=Money%20Matters"} style={{ textDecoration: "none" }}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="single-feature-post">
                                <img src={three} alt="Hero" />
                                <div className="feature-text-wrapper">
                                    <div className="feature-text ft_orange">
                                        <h2>Technology Space</h2>
                                        <p>
                                            Exploring the Digital Frontier: Staying Ahead of the Game
                                            <br />
                                            <i>Stay ahead of the curve with cutting-edge insights and analysis of the <br />
                                                latest technological advancements.</i>
                                        </p>
                                        <Link className="feature-post-btn" to={"/?cat=Tech%20Space"} style={{ textDecoration: "none" }}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="single-feature-post">
                                <img src={four} alt="Hero" />
                                <div className="feature-text-wrapper">
                                    <div className="feature-text ft_blueDark">
                                        <h2>Creative Pen</h2>
                                        <p>
                                            Unleashing Your Imagination: Nurturing Your Creative Side
                                            <br />
                                            <i>Unleash your inner artist with inspiration and guidance for all things creative.</i>
                                        </p>
                                        <Link className="feature-post-btn" to={"/?cat=Creative%20Pen"} style={{ textDecoration: "none" }}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="single-feature-post">
                                <img src={five} alt="Hero" />
                                <div className="feature-text-wrapper">
                                    <div className="feature-text ft_red">
                                        <h2>Blog</h2>
                                        <p>
                                            Sharing Ideas, Insights and Perspectives: An Open Discussion
                                            <br />
                                            <i>Join the conversation and discover a wealth of knowledge through <br />
                                                thought-provoking discussions and expert perspectives.</i>
                                        </p>
                                        <Link className="feature-post-btn" to={"/?cat=Blog"} style={{ textDecoration: "none" }}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
